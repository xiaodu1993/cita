module.exports = {
    contract: {
        permission_system: {
            psABI: [{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"queryUsers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"bytes32"},{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"}],"name":"deleteRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"queryGroupInfo","outputs":[{"name":"","type":"address[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bool"},{"name":"","type":"bytes32[]"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oldName","type":"bytes32"},{"name":"_newName","type":"bytes32"},{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"}],"name":"modifyRoleName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"querySubSwitch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"}],"name":"approveQuit","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"}],"name":"quitGroup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_users","type":"address[]"}],"name":"revokeRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_resource","type":"bytes32"}],"name":"setAuthorization","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_newName","type":"bytes32"},{"name":"_newUsers","type":"address[]"},{"name":"_newSubSwitch","type":"bool"},{"name":"_op","type":"uint8"},{"name":"_role","type":"bytes32"},{"name":"_profile","type":"string"}],"name":"newGroup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_basic","type":"bytes32"},{"name":"_permissions","type":"bytes32[]"}],"name":"initRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"queryProfile","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_newSubSwitch","type":"bool"}],"name":"modifySubSwitch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"queryRoles","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_role","type":"bytes32"}],"name":"queryPermissions","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"},{"name":"_userGroup","type":"bytes32"},{"name":"_resourceGroup","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_permission","type":"bytes32"}],"name":"checkPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_newName","type":"bytes32"},{"name":"_role","type":"bytes32"}],"name":"deleteGroup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"bytes32"},{"name":"_permissions","type":"bytes32[]"},{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"}],"name":"addPermissions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_role","type":"bytes32"}],"name":"initAuthorization","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"bytes32"},{"name":"_permissions","type":"bytes32[]"},{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"}],"name":"deletePermissions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oldName","type":"bytes32"},{"name":"_newName","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"}],"name":"modifyGroupName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_resource","type":"bytes32"}],"name":"cancelAuthorization","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"queryGroups","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"}],"name":"applyGroup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_users","type":"address[]"}],"name":"grantRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"}],"name":"approveApply","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"queryParentGroups","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"queryAllGroups","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"querySuperAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_root","type":"bytes32"},{"name":"_adamEve","type":"address[]"},{"name":"_subSwitch","type":"bool"}],"name":"initGroup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_newName","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_newPermissions","type":"bytes32[]"},{"name":"_op","type":"uint8"}],"name":"newRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryAllRoles","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_group","type":"bytes32"},{"name":"_resource","type":"bytes32"},{"name":"_role","type":"bytes32"},{"name":"_newProfile","type":"string"}],"name":"modifyProfile","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_group","type":"bytes32"}],"name":"querySubGroups","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"queryBasicPermission","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_superAdmin","type":"address"},{"name":"_adamEve","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_group","type":"bytes32"},{"indexed":true,"name":"_newGroup","type":"bytes32"}],"name":"GroupNewed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_root","type":"bytes32"},{"indexed":false,"name":"_adamEve","type":"address[]"},{"indexed":true,"name":"_subSwitch","type":"bool"}],"name":"GroupInited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_basic","type":"bytes32"},{"indexed":false,"name":"_permissions","type":"bytes32[]"}],"name":"RoleInited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_group","type":"bytes32"},{"indexed":true,"name":"_role","type":"bytes32"}],"name":"AuthorizationInited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_group","type":"bytes32"}],"name":"GroupApplied","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_group","type":"bytes32"},{"indexed":true,"name":"_resource","type":"bytes32"},{"indexed":false,"name":"_role","type":"bytes32"}],"name":"ApplyApproved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_group","type":"bytes32"},{"indexed":true,"name":"_resource","type":"bytes32"},{"indexed":true,"name":"_role","type":"bytes32"},{"indexed":false,"name":"_users","type":"address[]"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_group","type":"bytes32"},{"indexed":true,"name":"_resource","type":"bytes32"},{"indexed":true,"name":"_role","type":"bytes32"},{"indexed":false,"name":"_users","type":"address[]"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_group","type":"bytes32"}],"name":"GroupQuitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_user","type":"address"},{"indexed":true,"name":"_group","type":"bytes32"},{"indexed":true,"name":"_resource","type":"bytes32"},{"indexed":false,"name":"_role","type":"bytes32"}],"name":"QuitApproved","type":"event"}],
            psAddr: '0x00000000000000000000000000000000013241a5',
            superAdmin: {
                address: '0x33434ebd8799bc93f3623c7eb619350e41fb08d1',
                privkey: 'b7eb833f2ac19d3dabf4375146a7ce0e983b9997a02557be05f224e22797419e'
            }
        },
        permission_manager: {
            pmABI: [{"constant":false,"inputs":[{"name":"_user","type":"address"},{"name":"_permission","type":"uint8"}],"name":"grantPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_user","type":"address"}],"name":"queryPermission","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_permission","type":"uint8"}],"name":"queryUsersOfPermission","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"user_permission","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_user","type":"address"},{"name":"_permission","type":"uint8"}],"name":"revokePermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_senders","type":"address[]"},{"name":"_creators","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"},{"indexed":false,"name":"_permission","type":"uint8"}],"name":"GrantPermission","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"},{"indexed":false,"name":"_permission","type":"uint8"}],"name":"RevokePermission","type":"event"}],
            pmAddr: '0x00000000000000000000000000000000013241a4',
            sender: {
                address: '0x1a702a25c6bca72b67987968f0bfb3a3213c5688',
                privkey: '866c936ff332228948bdefc15b1877c88e0effce703ee6de898cffcafe9bbe25'
            }
        },
        permission: {
            pABI: [{"constant":true,"inputs":[{"name":"cont","type":"address"},{"name":"func","type":"bytes4"}],"name":"inPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"updateName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryInfo","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"address[]"},{"name":"","type":"bytes4[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_conts","type":"address[]"},{"name":"_funcs","type":"bytes4[]"}],"name":"deleteResources","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"close","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryResource","outputs":[{"name":"","type":"address[]"},{"name":"","type":"bytes4[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_conts","type":"address[]"},{"name":"_funcs","type":"bytes4[]"}],"name":"addResources","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_conts","type":"address[]"},{"name":"_funcs","type":"bytes4[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_conts","type":"address[]"},{"indexed":false,"name":"_funcs","type":"bytes4[]"}],"name":"ResourcesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_conts","type":"address[]"},{"indexed":false,"name":"_funcs","type":"bytes4[]"}],"name":"ResourcesDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oldName","type":"bytes32"},{"indexed":true,"name":"_name","type":"bytes32"}],"name":"NameUpdated","type":"event"}],
            pAddr: '0x00000000000000000000000000000000013241b5'
        },
        authorization: {
            aABI: [{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_permission","type":"address"}],"name":"cancelAuth","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_permission","type":"address"}],"name":"queryAccounts","outputs":[{"name":"_accounts","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"},{"name":"_cont","type":"address"},{"name":"_func","type":"bytes4"}],"name":"checkPermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"queryPermissions","outputs":[{"name":"_permissions","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"clearAuth","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_permission","type":"address"}],"name":"setAuth","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_superAdmin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":true,"name":"_permission","type":"address"}],"name":"AuthSetted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":true,"name":"_permission","type":"address"}],"name":"AuthCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"AuthCleared","type":"event"}],
            aAddr: '0x00000000000000000000000000000000013241b4',
            superAdmin: '0x9dcd6b234e2772c5451fd4ccf7582f4283140697',
            permissions: [
                '0x00000000000000000000000000000000013241b5',
                '0x00000000000000000000000000000000023241b5',
                '0x00000000000000000000000000000000033241b5',
                '0x00000000000000000000000000000000043241b5',
                '0x00000000000000000000000000000000053241b5' 
            ],
            resources: ['0xf036ed56', '0x3482e0c9', '0xf036ed56', '0x6446ebd8', '0x537bf9a3', '0x0f5aa9f3', '0x3482e0c9', '0xa5925b5b'] 
        },
        permission_management: {
            pManagementABI: [{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_permission","type":"address"}],"name":"setAuthorization","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_permission","type":"address"}],"name":"cancelAuthorization","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_permission","type":"address"},{"name":"_name","type":"bytes32"}],"name":"updatePermissionName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_permission","type":"address"},{"name":"_conts","type":"address[]"},{"name":"_funcs","type":"bytes4[]"}],"name":"deleteResources","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_permission","type":"address"}],"name":"deletePermission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"clearAuthorization","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_permission","type":"address"},{"name":"_conts","type":"address[]"},{"name":"_funcs","type":"bytes4[]"}],"name":"addResources","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_conts","type":"address[]"},{"name":"_funcs","type":"bytes4[]"}],"name":"newPermission","outputs":[{"name":"id","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],
            pManagementAddr: '0x00000000000000000000000000000000013241b2'
        },
        role_management: {
            rmABI: [{"constant":false,"inputs":[{"name":"_roleid","type":"address"},{"name":"_permissions","type":"address[]"}],"name":"addPermissions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_roleid","type":"address"},{"name":"_permissions","type":"address[]"}],"name":"deletePermissions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_roleId","type":"address"}],"name":"queryAccounts","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_roleid","type":"address"}],"name":"deleteRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_permissions","type":"address[]"}],"name":"newRole","outputs":[{"name":"roleid","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_role","type":"address"}],"name":"setRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_role","type":"address"}],"name":"cancelRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"clearRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_roleid","type":"address"},{"name":"_name","type":"bytes32"}],"name":"updateRoleName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"queryRoles","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":true,"name":"_role","type":"address"}],"name":"RoleSetted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":true,"name":"_role","type":"address"}],"name":"RoleCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"}],"name":"RoleCleared","type":"event"}],
            rmAddr: '0xe3b5ddb80addb513b5c981e27bb030a86a8821ee',
            permissions: [
                '0x00000000000000000000000000000000013241b5',
                '0x00000000000000000000000000000000023241b5'
                // '0x00000000000000000000000000000000033241b5',
                // '0x00000000000000000000000000000000043241b5',
                // '0x00000000000000000000000000000000053241b5' 
            ]
        },
        role: {
            rABI: [{"constant":false,"inputs":[{"name":"_permissions","type":"address[]"}],"name":"addPermissions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deleteRole","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"updateName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"cancelRolePermissionsOf","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryPermissions","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"clearRolePermissionsOf","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"queryRole","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_permissions","type":"address[]"}],"name":"deletePermissions","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"applyRolePermissionsOf","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_permissions","type":"address[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oldName","type":"bytes32"},{"indexed":true,"name":"_newName","type":"bytes32"}],"name":"NameUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_permissions","type":"address[]"}],"name":"PermissionsAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_permissions","type":"address[]"}],"name":"PermissionsDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_name","type":"bytes32"},{"indexed":false,"name":"_permissions","type":"address[]"}],"name":"RoleCreated","type":"event"}]
        }
    },
    localServer: 'http://127.0.0.1:1337',
    remoteServer: 'http://47.94.105.230:1337',
    testAddr: ['0x1a702a25c6bca72b67987968f0bfb3a3213c5600','0x1a702a25c6bca72b67987968f0bfb3a3213c5601','0x1a702a25c6bca72b67987968f0bfb3a3213c5602'],
    testFunc: ['0xf036ed56', '0x3482e0c9', '0xf036ed56']
};
