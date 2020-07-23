<template>
  <div>
    <header-test ref="header"/>
    <div class="wrapper">
      <div class="aside">
        <el-switch
        v-model="isCollapse"
        active-color="#13ce66"
        inactive-color="#409EFF">
        </el-switch>
        <el-menu :default-active="activeindex" class="el-menu-vertical-demo"  :collapse="isCollapse">

          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">个人资料</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goAvatar">
            <i class="el-icon-menu"></i>
            <span slot="title">更换头像</span>
          </el-menu-item>
        </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
import HeaderTest from '@/components/content/HeaderTest'

export default {
  name: "",
  mixins: [],
  props: {},
  components: {
    HeaderTest
  },
  data() {
    return {
      activeindex:'1',
      isCollapse: false,
      userData:{}
    };
  },
  watch: {},
  computed: {},
  created() {

  },
  mounted() {
    this.$refs.header.activeIndex = '4'
  },
  methods: {
    goAvatar(){
      this.activeindex = '2'
      this.$router.push('/user/avatar')
    }
  }
};
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .wrapper{
    width: 1600px;
    margin: 50px auto;
    display: flex;
  }
  .aside{
    width: 400px;

  }
  .main{
    width: 800px;
    float: right;
  }
</style>
