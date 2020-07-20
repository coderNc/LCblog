<template>
    <div>
      
        
      <el-table :data="userData" style="width:100%; " border  stripe >
        
      <el-table-column label="id" align="center">
        <template slot-scope="scope">{{scope.row.id}}</template>
      </el-table-column>
      <el-table-column label="头像" prop="picture" align="center">
        <template   slot-scope="scope">            
          <img :src="scope.row.picture"  min-width="70" height="70" />
        </template>         
      </el-table-column>
      <el-table-column label="用户名"  align="center">
        <template slot-scope="scope">{{scope.row.username}}</template>
      </el-table-column>
      <el-table-column label="手机号"  align="center">
        <template slot-scope="scope">{{scope.row.telephone}}</template>
      </el-table-column>
      <el-table-column label="角色"  align="center">
        <template slot-scope="scope">{{scope.row.level == '1' ? '管理员' : '普通用户'}}</template>
      </el-table-column>
      <el-table-column label="注册时间"  align="center">
        <template slot-scope="scope">{{scope.row.createTime}}</template>
      </el-table-column>
        <el-table-column label="操作"  align="center">
          
          <template slot="header" slot-scope="scope">
            <el-button type="primary" @click="dialogVisible = true">添加用户<i class="el-icon-plus el-icon--right"></i></el-button>
      </template>
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteUser(scope.row.id)">删除</el-button>
          </template>
    </el-table-column>
    </el-table>
    <el-divider></el-divider>
    <div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="[5, 10, 20, 50]"
        
        layout="total, sizes,prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>




    <el-dialog
        title="添加用户"
        :visible.sync="dialogVisible"
        width="30%">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="form.telephone" placeholder="请输入手机号"></el-input>
        </el-form-item> 
        <el-form-item label="用户角色" prop="level">
            <el-radio-group v-model="form.level">
            <el-radio label="0" >普通用户</el-radio>
            <el-radio label="1" >管理员</el-radio>
            </el-radio-group>
        </el-form-item>
      </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser">添 加</el-button>
        </span>
        </el-dialog>
    </div>

</template>

<script>
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {},
    data () {
        return {
            userData:[],
            dialogVisible: false,
            form:{
                username:'',
                password:'',
                telephone:'',
                level:'0'
            },
            rules: {
            username: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
            ],
            telephone: [
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { min: 11, max: 11, message: '请输入正确的手机号！', trigger: 'blur' }
            ],
            level: [
            { required: true, message: '请选用户角色', trigger: 'change' }
          ],
          },
          currentPage: 1,     //当前页
          total:100,          //总数
          pageSize:5,         //每页展示个数
          limit:5,
          offset:0
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
        this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
        this.axios.defaults.withCredentials = true
      //请求用户列表

      this.axios({
        method:'get',
        url:'/users',
        params:{
          offset:0,
          limit:100000
        }
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.userData = res.data.data.slice(0,this.limit)
          this.total = res.data.data.length
        }
        
      })
    },
    mounted () {

    },
    methods: {
        deleteUser(id){
            console.log(id);
            this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            //调用删除用户接口
            this.axios({
                method:'DELETE',
                url:'/user/delete/' + id
            }).then(res => {
                console.log(res);
                if(res.status == 200 && res.data.status == 'success'){
                    this.$message({
                            type: 'success',
                            message: '删除成功!'
                    });
                }
            })
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除'
            });          
        });
        },
        addUser(){
            console.log(JSON.stringify(this.form));
            //请求添加用户
            this.axios({
                method:'POST',
                url:'/user',
                data:JSON.stringify(this.form),
                headers:
                        {
                        'Content-Type': 'application/json'
                        }
            }).then(res => {
                console.log(res);
                if(res.status == 200 && res.data.status == 'success'){
                    this.$message({
                            type: 'success',
                            message: '添加成功!'
                    });
                    location.reload()
                }else{
                    this.$message.error(res.data.data.errMsg+ '!请重新输入!');
                }
            })
        },
        handleCurrentChange(pages){
        console.log(pages);
        this.offset = (pages - 1) * this.limit
        console.log(this.offset);
        this.axios({
          method:'get',
          url:'/users',
          params:{
            offset:this.offset,
            limit:this.limit
          }
        }).then(res => {
          console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.userData = res.data.data
          }
        })
      },
      handleSizeChange(pagesize){
        //console.log(pagesize);
        this.pageSize = this.limit = pagesize
        this.axios({
          method:'get',
          url:'/users',
          params:{
            offset:this.offset,
            limit:this.limit
          }
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.userData = res.data.data
          }
        })
      }
    }
}
</script>

<style scoped>
  tbody img {
    width: 50px;
    height: 50px;
  }
</style>
