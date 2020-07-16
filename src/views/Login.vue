<template>
    <div class="login">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <h3 class="login-title">登陆</h3>

        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login('form')">登录</el-button>
          <el-button @click="test">取消</el-button>
        </el-form-item>

      </el-form>
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
          form: {
            name: '',
            password:'',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 6, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
            ]
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
            //获取用户名和密码
            let username = this.form.name
            let password = this.form.password
            console.log(username);
            console.log(password);
            //请求登录
            this.axios({
              method:'get',
              url:'/user',
              params:{
                username:username,
                password:password
              }
            }).then(res => {
              console.log(res);
              if(res.status == 200 && res.data.status == 'success'){
                //console.log('123');
                this.$message({
                  message: '登录成功',
                  type: 'success'
                });
                
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
      }
    }
}
</script>

<style scoped>
  .login{
    width: 400px;
    margin: 300px auto 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 20px 10px 5px;
    border-radius: 20px
  }
  .login-title{
    text-align: center;
    color: #409EFF;
  }
</style>
