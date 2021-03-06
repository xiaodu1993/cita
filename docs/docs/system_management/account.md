# 账号管理

*TODO: 分成两个单独的章节: 权限管理及配额管理*

## 权限管理

CITA实现了对账户的权限管理，并支持基于角色的权限管理(其类似于权限管理的插件，不建议和权限管理混合使用)。

权限(permission)在此系统中的定义为多个资源(resource)的集合，其中资源(resource)为一个合约地址及一个函数签名。

用户可自定义权限及角色，其中系统内置了几种权限，如下所示：

* `sendTx`: 表示发交易的权限
* `createContract`: 表示创建合约的权限
* `newPermission`: 表示创建一个新的权限的权限
* `deletePermission`: 表示删除一个权限的权限
* `updatePermission`: 表示更新一个权限的权限
* `setAuth`: 表示对账号进行授权的权限
* `cancelAuth`: 表示对帐号取消授权的权限

系统内置了superAdmin的帐号，其拥有以上所有权限，可对其进行正常的权限管理。

CITA通过智能合约的方式来对权限进行管理。

### 权限管理合约接口

#### 操作类接口

<table>
  <tr>
    <th>名称</th>
    <th>需要权限</th>
    <th>入参</th>
    <th>返回值</th>
    <th>详细描述</th>
  </tr>
  <tr>
    <td>
      newPermission(name, conts, funcs) <br/>
      <strong>创建新权限</strong>
    </td>
    <td>newPermission</td>
    <td>
      name: 权限的名称
      <br/>
      conts: 权限包含的合约地址的集合
      <br/>
      funcs: 权限包含的的函数签名的集合
    </td>
    <td>新权限的地址 (Address)</td>
    <td>成功后即生成了一个新的权限类型</td>
  </tr>
  <tr>
    <td>
      deletePermission(permission) <br/>
      <strong>删除权限</strong>
    </td>
    <td>deletePermission</td>
    <td>permission: 权限地址 </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后权限不可用</td>
  </tr>
  <tr>
    <td>
      updatePermissionName(permission, name) <br/>
      <strong>更新权限名称</strong>
    </td>
    <td>updatePermission</td>
    <td>
      permission: 权限地址
      <br/>
      name: 新的权限名称
    </td>
    <td>操作是否成功 (bool)</td>
    <td>更新权限的名称，新名称可任意指定，权限之间的名称可重复</td>
  </tr>
  <tr>
    <td>
      addResources(permission, conts. funcs) <br/>
      <strong>添加资源</strong>
    </td>
    <td>updatePermission</td>
    <td>
      permission: 操作的权限对象
      <br/>
      conts: 添加的合约地址的集合
      <br/>
      funcs: 添加的函数签名的集合
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后为指定的权限添加新的资源</td>
  </tr>
  <tr>
    <td>
      deleteResources(permission, conts. funcs) <br/>
      <strong>删除资源</strong>
    </td>
    <td>updatePermission</td>
    <td>
      permission: 操作的权限对象
      <br/>
      conts: 删除的合约地址的集合
      <br/>
      funcs: 删除的函数签名的集合
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后删除指定权限的指定资源</td>
  </tr>
  <tr>
    <td>
      setAuthorization(account, permission) <br/>
      <strong>授权</strong>
    </td>
    <td>setAuth</td>
    <td>
      account: 授权的帐号对象
      <br/>
      permission: 授权的权限对象
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后帐号拥有所授予的权限</td>
  </tr>
  <tr>
    <td>
      setAuthorizations(account, permissions) <br/>
      <strong>多次授权</strong>
    </td>
    <td>setAuth</td>
    <td>
      account: 授权的帐号对象
      <br/>
      permissions: 授权的权限对象的集合
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后帐号拥有所授予的权限集合</td>
  </tr>
  <tr>
    <td>
      cancelAuthorization(account, permission) <br/>
      <strong>取消授权</strong>
    </td>
    <td>cancelAuth</td>
    <td>
      account: 取消授权的帐号对象
      <br/>
      permissions: 取消授权的权限对象
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后帐号不再拥有此权限</td>
  </tr>
  <tr>
    <td>
      cancelAuthorizations(account, permissions) <br/>
      <strong>多次取消授权</strong>
    </td>
    <td>cancelAuth</td>
    <td>
      account: 取消授权的帐号对象
      <br/>
      permissions: 取消授权的权限对象集合
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后帐号不再拥有此权限集合</td>
  </tr>
  <tr>
    <td>
      clearAuthorization(account) <br/>
      <strong>取消账户的所有授权</strong>
    </td>
    <td>cancelAuth</td>
    <td>
      account: 取消授权的帐号对象
    </td>
    <td>操作是否成功 (bool)</td>
    <td>成功后帐号不再拥有任何权限</td>
  </tr>
</table>

#### 查询类接口

查询类接口的调用不需要权限。

<table>
  <tr>
    <th>名称</th>
    <th>入参</th>
    <th>返回值</th>
    <th>详细描述</th>
  </tr>
  <tr>
    <td>
      queryAllAccounts()<br/>
      <strong>查询所有帐号</strong>
    </td>
    <td>None</td>
    <td>所有拥有权限的账号集合</td>
    <td>查询到的账号为权限管理记录的所有帐号</td>
  </tr>
  <tr>
    <td>
      queryPermissions(account) <br/>
      <strong>查询帐号权限</strong>
    </td>
    <td>
      account: 查询的帐号
    </td>
    <td>帐号拥有的权限集合</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      queryAccounts(permission) <br/>
      <strong>查询拥有权限的账号</strong>
    </td>
    <td>permission: 权限地址</td>
    <td>拥有此权限的所有帐号集合</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      checkPermission(account, cont, func) <br/>
      <strong>检查权限</strong>
    </td>
    <td>
      account: 鉴权的帐号对象
      <br/>
      cont: 合约地址
      <br/>
      func: 函数签名
    </td>
    <td>判断此帐号是否拥有执行此合约函数的权限</td>
    <td>其中合约地址及函数签名组成了一个资源</td>
  </tr>
  <tr>
    <td>
      inPermission(permission, cont, func) <br/>
      <strong>检查权限</strong>
    </td>
    <td>
      permission: 判断的权限对象
      <br/>
      cont: 合约地址
      <br/>
      func: 函数签名
    </td>
    <td>判断此权限是否拥有合约及函数</td>
    <td>其中合约地址及函数签名组成了一个资源</td>
  </tr>
  <tr>
    <td>
      queryInfo()<br/>
      <strong>查询权限信息</strong>
    </td>
    <td>None</td>
    <td>权限的所有信息</td>
    <td>信息包括名称及包含的资源集合</td>
  </tr>
  <tr>
    <td>
      queryName()<br/>
      <strong>查询权限名称</strong>
    </td>
    <td>None</td>
    <td>权限的名称</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      queryResource()<br/>
      <strong>查询权限资源</strong>
    </td>
    <td>None</td>
    <td>权限的资源</td>
    <td>None</td>
  </tr>
</table>

### 基于角色的权限管理合约接口

角色相关的操作不需要权限，只有在需要调用权限管理的相关接口时才需要相关的权限。

#### 操作类接口

<table>
  <tr>
    <th>名称</th>
    <th>需要权限</th>
    <th>入参</th>
    <th>返回值</th>
    <th>详细描述</th>
  </tr>
  <tr>
    <td>
      newRole(name, permissions)<br/>
      <strong>新建角色</strong>
    </td>
    <td>None</td>
    <td>
      name: 角色名称
      <br/>
      permissions: 权限集合
    </td>
    <td>新建的角色的地址</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      deleteRole(role) <br/>
      <strong>删除角色</strong>
    </td>
    <td>Node/cancelAuthorization</td>
    <td>
      role: 角色地址
    </td>
    <td>删除是否成功 (bool)</td>
    <td>如果角色已经被授予帐号则需要cancelAuthorization，否则则不需要权限</td>
  </tr>
  <tr>
    <td>
      updateRoleName(role, name) <br/>
      <strong>更新角色名称</strong>
    </td>
    <td>None</td>
    <td>
      role: 更新的角色
      <br/>
      name: 更新的新的角色的名称 
    </td>
    <td>更新是否成功 (bool)</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      addPermissions(role, permissions) <br/>
      <strong>添加角色权限</strong>
    </td>
    <td>setAuthorization/None</td>
    <td>
      role: 角色
      <br/>
      permissions: 添加的权限集合
    </td>
    <td>添加是否成功 (bool)</td>
    <td>如果角色已经被授予帐号则需要setAuthorization，否则则不需要权限</td>
  </tr>
  <tr>
    <td>
      deletePermissions(role, permissions) <br/>
      <strong>添加角色权限</strong>
    </td>
    <td>cancelAuthorization/None</td>
    <td>
      role: 角色
      <br/>
      permissions: 删除的权限集合
    </td>
    <td>删除是否成功 (bool)</td>
    <td>如果角色已经被授予帐号则需要cancelAuthorization，否则则不需要权限</td>
  </tr>
  <tr>
    <td>
      setRole(account, role) <br/>
      <strong>设置角色</strong>
    </td>
    <td>setAuthorization</td>
    <td>
      account: 设置角色的帐号对象
      <br/>
      role: 设置的角色
    </td>
    <td>设置是否成功 (bool)</td>
    <td>调用权限管理，把role内的所有permission依次授予account</td>
  </tr>
  <tr>
    <td>
      cancelRole(account, role) <br/>
      <strong>取消设置角色</strong>
    </td>
    <td>cancelAuthorization</td>
    <td>
      account: 取消设置角色的帐号对象
      <br/>
      role: 取消设置的角色
    </td>
    <td>取消设置是否成功 (bool)</td>
    <td>调用权限管理，把role内的所有permission依次取消授予account</td>
  </tr>
  <tr>
    <td>
      clearRole(account) <br/>
      <strong>取消帐号所有的角色</strong>
    </td>
    <td>cancelAuthorization</td>
    <td>
      account: 取消设置角色的帐号对象
    </td>
    <td>取消设置是否成功 (bool)</td>
    <td>调用权限管理，把account所有的role内的所有permission依次取消授予account</td>
  </tr>
</table>

#### 查询类接口

<table>
  <tr>
    <th>名称</th>
    <th>入参</th>
    <th>返回值</th>
    <th>详细描述</th>
  </tr>
  <tr>
    <td>
      queryRoles(account)<br/>
      <strong>查询帐号所有的角色</strong>
    </td>
    <td>account: 查询的帐号</td>
    <td>所有账号拥有的角色集合</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      queryAccounts(role) <br/>
      <strong>查询拥有此角色的所有帐号</strong>
    </td>
    <td>
      role: 查询的角色
    </td>
    <td>帐号集合</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      queryAccounts(permission) <br/>
      <strong>查询拥有权限的账号</strong>
    </td>
    <td>permission: 权限地址</td>
    <td>拥有此权限的所有帐号集合</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      queryRole() <br/>
      <strong>查询角色信息</strong>
    </td>
    <td>None</td>
    <td>角色的信息集合</td>
    <td>信息包括角色名称和权限列表</td>
  </tr>
  <tr>
    <td>
      queryName()<br/>
      <strong>查询角色名称</strong>
    </td>
    <td>None</td>
    <td>角色的名称</td>
    <td>None</td>
  </tr>
  <tr>
    <td>
      queryPermissions()<br/>
      <strong>查询角色权限</strong>
    </td>
    <td>None</td>
    <td>角色的权限集合</td>
    <td>None</td>
  </tr>
</table>

## 配额管理

通过配额管理合约实现对区块(中的视图）以及用户配额消耗上限的管理:

* 设置区块配额上限即为每个区块设置统一的配额上限;
* 设置账号配额上限包括:

    - 默认的账号配额上限，全局设置，即若账号未指定配额上限，默认为此值;
    - 设置指定账号配额上限，可针对不同用户灵活分配对应的配额上限。

### 配额管理合约接口

说明:

* BQL: BlockQuotaLimit 缩写
* AQL: AccountQuotaLimit 缩写

<table>
  <tr>
    <th>名称</th>
    <th>需要权限</th>
    <th>传入参数</th>
    <th>返回值</th>
    <th>详细描述</th>
  </tr>
  <tr>
    <td>
      setBQL(quotaLimit)<br/>
      <strong>设置区块配额上限</strong>
    </td>
    <td>管理员角色</td>
    <td>quotaLimit uint: 配额值</td>
    <td>操作是否成功 (bool)</td>
    <td>设置每个块的配额上限</td>
  </tr>
  <tr>
    <td>
      setDefaultAQL(quotaLimit)<br/>
      <strong>设置默认账号配额上限</strong>
    </td>
    <td>管理员角色</td>
    <td>quotaLimit uint: 配额值</td>
    <td>操作是否成功 (bool)</td>
    <td>设置默认的账号配额上限</td>
  </tr>
  <tr>
    <td>
      setAQL(address, quotaLimit) <br/>
      <strong>设置指定账号配额上限</strong>
    </td>
    <td>管理员角色</td>
    <td>
      address: 指定的账号的地址
      <br/>
      quotaLimit uint: 设置的配额值
    </td>
    <td>操作是否成功 (bool)</td>
    <td>设置指定账号的配额上限</td>
  </tr>
  <tr>
    <td>
      getBQL() <br/>
      <strong>查询区块配额上限</strong>
    </td>
    <td>普通角色</td>
    <td>空</td>
    <td>查询到的配额上限 (uint)</td>
    <td>查询设置的区块配额上限</td>
  </tr>
  <tr>
    <td>
      getDefaultAQL() <br/>
      <strong>查询默认账号配额上限</strong>
    </td>
    <td>普通角色</td>
    <td>空</td>
    <td>查询到的配额上限 (unit)</td>
    <td>查询设置的默认账号配额上限</td>
  </tr>
  <tr>
    <td>
      getAQL <br/>
      <strong>查询指定账号配额上限</strong>
    </td>
    <td>普通角色</td>
    <td>address: 为指定的账号地址</td>
    <td>查询到的配额上限 (uint)</td>
    <td>查询设置的指定账号配额上限</td>
  </tr>
</table>
