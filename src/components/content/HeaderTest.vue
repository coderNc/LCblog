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
            <el-menu-item index="3"  ><i class="el-icon-info"></i>关于</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-s-custom"></i>登录</el-menu-item>
            <el-menu-item index="5" class="aboutMe"><i class="el-icon-s-custom"></i>个人</el-menu-item>
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
        activeIndex2: '1'
        }
    },
    watch: {

    },
    computed: {

    },
    created () {

    },
    mounted () {

    },
    methods: {
      goHome(){
        this.$router.push('/index')
      },
      goCategory(){
        this.$router.push('/category/0')
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
