import {getPermissionList} from "@/api/api";

const permission = {
  state: {
    permissionList: []
  },
  getter: {
    permissionList: state => state.permission.permissionList
  },
  actions: {
    /**
     * 获取权限列表
     */
    GetPermissionList() {
      new Promise((resolve, reject) => {
        getPermissionList().then(res => {

        })
      })
    }
  }
}

export default permission
