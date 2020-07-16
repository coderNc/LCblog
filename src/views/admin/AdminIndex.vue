<template>
<el-table :data="userData" style="width:100%" border>
      <el-table-column label="id">
        <template slot-scope="scope">{{scope.row.id}}</template>
      </el-table-column>
      <el-table-column label="头像" prop="picture">
        <template   slot-scope="scope">            
          <img :src="scope.row.picture"  min-width="70" height="70" />
        </template>         
      </el-table-column>
      <el-table-column label="用户名">
        <template slot-scope="scope">{{scope.row.username}}</template>
      </el-table-column>
      <el-table-column label="手机号">
        <template slot-scope="scope">{{scope.row.telephone}}</template>
      </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">{{scope.row.level}}</template>
      </el-table-column>
      <el-table-column label="注册时间">
        <template slot-scope="scope">{{scope.row.createTime}}</template>
      </el-table-column>
        <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          >删除</el-button>
      </template>
    </el-table-column>
    </el-table>
</template>

<script>
  export default {
    data() {
      return {
        userData:[]
      }
    },
    created() {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //请求用户列表

      this.axios({
        method:'get',
        url:'/users',
        params:{
          offset:0,
          limit:100
        }
      }).then(res => {
        console.log(res);
        this.userData = res.data.data
      })
      
    },
  }

</script>

<style scoped>

</style>
