<template>
    <div class="login">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="formWrapper">
        <h3 class="login-title">登陆</h3>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login('form')">登录</el-button>
          <el-button @click="goBack">取消</el-button>
        </el-form-item>
        <el-form-item>
          <el-link @click="openEnrol">还没有账号？立即注册<i class="el-icon-view el-icon--right"></i> </el-link>
        </el-form-item>
      </el-form>


      <el-dialog
        title="注册"
        :visible.sync="dialogVisible"
        width="30%"
        center>
        <el-form ref="form" :model="enrolForm" :rules="rules" label-width="80px">

        <el-form-item label="用户名" prop="username">
          <el-input v-model="enrolForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="enrolForm.password"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telephone">
          <el-input v-model="enrolForm.telephone" placeholder="请输入手机号"></el-input>
        </el-form-item> 
      </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="enrol">注 册</el-button>
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
          dialogVisible: false,
          form: {
            username: '',
            password:'',
          },
          enrolForm:{
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
              { min: 6, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
            ],
            telephone: [
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { min: 11, max: 11, message: '请输入正确的手机号！', trigger: 'blur' }
            ],
          }
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
    },
    mounted () {
/*       const s = document.createElement('script');
      s.color = '0,0,0';
      s.opacity = '0.5';
      s.count = '99';
      s.type = 'text/javascript';
      s.src = 'https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js';
      document.body.appendChild(s); */
    },
    methods: {
      
      Login(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //如果校验成功进入此
            //请求登录
            this.axios({
              method:'get',
              url:'/user',
              params:{
                username:this.form.username,
                password:this.form.password
              }
            }).then(res => {
              console.log(res);
              if(res.status == 200 && res.data.status == 'success'){
                //console.log('123');
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
                this.$store.commit('upDataUser',res.data.data)
                //跳转到对应的界面
                if(res.data.data.level == 1){
                  this.$router.push('/admin/index')
                }else{
                  this.$router.push('/index')
                }
              }
            })
          } else {
            this.$message.error('请输入正确格式的用户名或密码');
            return false;
          }
        });

        
      },
      test(){
        //console.log(this.name);
      },
      goBack(){
        this.$router.go(-1)
      },
      openEnrol(){
        this.dialogVisible = true
      },
      enrol(){
        //console.log(this.enrolForm);
        //console.log(JSON.stringify(this.enrolForm));
        this.axios({
          method:'POST',
          url:'/user',
          data:JSON.stringify(this.enrolForm),
          headers:
            {
            'Content-Type': 'application/json'
            }
        }).then(res => {
                //console.log(res);
                if(res.status == 200 && res.data.status == 'success'){
                    this.$message({
                            type: 'success',
                            message: '注册成功!请重新登录！'
                    });
                    //location.reload()
                    this.dialogVisible = false
                }else{
                    this.$message.error(res.data.data.errMsg+ '!请重新输入!');
                }
            })
      }
    }
}
</script>

<style scoped>
  .login{
    width: 400px;
    margin: 240px auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 20px 10px 5px;
    border-radius: 20px
  }
  .login-title{
    text-align: center;
    color: #409EFF;
  }
  .hhh{
    display: inline-block;
    height: 40px;
    padding-top: 2px;
  }
</style>
