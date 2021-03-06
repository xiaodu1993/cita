// CITA
// Copyright 2016-2017 Cryptape Technologies LLC.

// This program is free software: you can redistribute it
// and/or modify it under the terms of the GNU General Public
// License as published by the Free Software Foundation,
// either version 3 of the License, or (at your option) any
// later version.

// This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied
// warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
// PURPOSE. See the GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

#![cfg_attr(feature = "clippy", feature(plugin))]
#![cfg_attr(feature = "clippy", plugin(clippy))]
#![allow(deprecated, unused_must_use, unused_mut, unused_assignments)]
#![feature(iter_rfind)]
#![feature(try_from)]
extern crate byteorder;
extern crate bytes;
extern crate clap;
extern crate dotenv;
extern crate futures;
#[macro_use]
extern crate libproto;
#[macro_use]
extern crate log;
extern crate logger;
extern crate notify;
extern crate protobuf;
extern crate pubsub;
extern crate rand;
extern crate rustc_serialize;
#[cfg(test)]
extern crate tempfile;
extern crate tokio_io;
extern crate tokio_proto;
extern crate tokio_service;
#[macro_use]
extern crate util;

#[macro_use]
extern crate serde_derive;

pub mod config;
pub mod netserver;
pub mod connection;
pub mod citaprotocol;
pub mod synchronizer;
//pub mod sync_vec;
pub mod network;

use clap::App;
use config::NetConfig;
use connection::{manage_connect, Connection};
use libproto::Message;
use libproto::router::{MsgType, RoutingKey, SubModules};
use netserver::NetServer;
use network::NetWork;
use notify::{RecommendedWatcher, RecursiveMode, Watcher};
use pubsub::start_pubsub;
use std::convert::TryFrom;
use std::net::SocketAddr;
use std::sync::Arc;
use std::sync::mpsc::channel;
use std::thread;
use std::time::Duration;
use synchronizer::Synchronizer;
use util::set_panic_handler;

fn main() {
    micro_service_init!("cita-network", "CITA:network");
    // init app
    // todo load config
    let matches = App::new("network")
        .version("0.1")
        .author("Cryptape")
        .about("CITA Block Chain Node powered by Rust")
        .args_from_usage("-c, --config=[FILE] 'Sets a custom config file'")
        .get_matches();

    let mut config_path = "config";
    if let Some(c) = matches.value_of("config") {
        info!("Value for config: {}", c);
        config_path = c;
    }

    let config = NetConfig::new(config_path);

    // init pubsub

    // split new_tx with other msg
    let (ctx_sub_tx, crx_sub_tx) = channel();
    let (ctx_pub_tx, crx_pub_tx) = channel();
    start_pubsub(
        "network_tx",
        routing_key!([Auth >> Request]),
        ctx_sub_tx,
        crx_pub_tx,
    );

    let (ctx_sub_consensus, crx_sub_consensus) = channel();
    let (ctx_pub_consensus, crx_pub_consensus) = channel();
    start_pubsub(
        "network_consensus",
        routing_key!([Consensus >> SignedProposal, Consensus >> RawBytes]),
        ctx_sub_consensus,
        crx_pub_consensus,
    );

    let (ctx_sub, crx_sub) = channel();
    let (ctx_pub, crx_pub) = channel();
    start_pubsub(
        "network",
        routing_key!([
            Chain >> Status,
            Chain >> SyncResponse,
            Jsonrpc >> RequestNet,
        ]),
        ctx_sub,
        crx_pub,
    );

    let (net_work_tx, net_work_rx) = channel();
    // start server
    // This brings up our server.
    // all server recv msg directly publish to mq
    let address_str = format!("0.0.0.0:{}", config.port.unwrap());
    let address = address_str.parse::<SocketAddr>().unwrap();
    let net_server = NetServer::new(net_work_tx.clone());

    //network server listener
    thread::spawn(move || net_server.server(address));

    //connections manage to loop
    let (tx, rx) = channel();
    let mut watcher: RecommendedWatcher = Watcher::new(tx, Duration::from_secs(1)).unwrap();
    watcher.watch(".", RecursiveMode::NonRecursive);

    let (sync_tx, sync_rx) = channel();
    let con = Arc::new(Connection::new(&config));
    let net_work = NetWork::new(
        Arc::clone(&con),
        ctx_pub.clone(),
        sync_tx,
        ctx_pub_tx,
        ctx_pub_consensus,
    );
    manage_connect(&Arc::clone(&con), config_path, rx);

    // loop deal data
    thread::spawn(move || loop {
        if let Ok((source, cita_req)) = net_work_rx.recv() {
            net_work.receiver(source, cita_req);
        }
    });

    // Sync loop
    let mut synchronizer = Synchronizer::new(ctx_pub, Arc::clone(&con));
    thread::spawn(move || loop {
        if let Ok((source, payload)) = sync_rx.recv() {
            synchronizer.receive(source, payload);
        }
    });

    // Subscribe Auth Tx
    let con_tx = Arc::clone(&con);
    thread::spawn(move || loop {
        let (key, body) = crx_sub_tx.recv().unwrap();
        let msg = Message::try_from(&body).unwrap();
        trace!("Auth Tx from Local");
        con_tx.broadcast(key, msg);
    });

    // Subscribe Consensus Msg
    thread::spawn(move || loop {
        let (key, body) = crx_sub_consensus.recv().unwrap();
        let msg = Message::try_from(&body).unwrap();
        trace!("Consensus Msg from Local");
        con.broadcast(key, msg);
    });

    loop {
        // Msg from MQ need proc before broadcast
        let (key, body) = crx_sub.recv().unwrap();
        trace!("handle delivery from {} payload {:?}", key, body);
        net_work_tx.send((Source::LOCAL, (key, body))).unwrap();
    }
}

#[derive(Copy, Clone, Eq, PartialEq, Debug)]
pub enum Source {
    LOCAL,
    REMOTE,
}
