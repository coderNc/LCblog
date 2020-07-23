<template>
    <div class="header">
      <el-container style="height: 60px;" class="nav-bar">
        <el-header style="text-align: right; font-size: 14px">
          <div class="demo-image">
            <a href="javascript:;"><img src="../../assets/img/LCBLOG.png" alt="LCBLOG"></a>
        </div>
          <el-menu :default-active="activeIndex" class="el-menu-demo el-menu-me" mode="horizontal" 
          text-color="#000"
          background-color="#fff"
          active-text-color="#409EFF">
            <el-menu-item index="1" @click="goHome"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-menu-item index="2" @click="goCategory"> <i class="el-icon-menu"></i>分类</el-menu-item>
            <el-menu-item index="3" @click="goAbout" ><i class="el-icon-info" ></i>关于 </el-menu-item>
            <el-menu-item index="4" @click="goLogin" v-if="isShowLogin"><i class="el-icon-s-custom"></i>登录</el-menu-item>
            <el-menu-item index="4" v-else @click="goUser"><i class="el-icon-s-custom"></i>个人</el-menu-item>
          </el-menu>
        </el-header>
    
      </el-container>
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
        activeIndex: '1',
        isShowLogin: true,
        userData:{}
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //请求登录数据
      this.axios({
        method:'get',
        url:'/picture'
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          //登录成功
          this.userData = res.data.data
          this.isShowLogin = false 
        }else{
          this.isShowLogin = true
        }
      })
    },
    mounted () {

    },
    methods: {
      goHome(){
        this.$router.push('/index')
      },
      goCategory(){
        this.$router.push('/category/0')
      },
      goAbout(){
        this.$router.push('/about')
      },
      goLogin(){
        this.$router.push('/login')
      },
      goUser(){
        this.$router.push('/user')
      }
    }
}
</script>

<style scoped>
  .header{
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  /* opacity: .5; */
}
.header a{
  text-decoration: none;
}
.header .nav-bar{
  width: 1240px;
  margin: 0 auto;
  height: 100%;
  position: relative;

}
.el-menu-me{
  width: 400px;
  float: right;
}
.demo-image{
  height: 60px;
  width: 100px;
  float: left;
}
.demo-image img{
  width: 60px;
  height: 60px;
}
.aboutMe{
  display: none;
}
</style>
