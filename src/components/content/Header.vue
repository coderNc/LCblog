<template>
    <div>
        <div class="header ">
    <div class="nav-bar">
      <div class="fl">
        <i class="iconfont icon-liebiao"></i>
      </div>
      <div class="logo">
        <a href="#"><img src="@/assets/img/LCBLOG.png" alt="LcBlog"></a>
      </div>
      <div class="clickList">
        <ul>
          <li>
            <a href="index.html">
              <i class="iconfont icon-shouye"></i>
              首页
            </a>
          </li>
          <li>
            <a href="category.html">
              <i class="iconfont icon-caidan"></i>
              分类
            </a>
          </li>
          <li>
            <a href="auout.html">
              <i class="iconfont icon-lianjie"></i>
              关于
            </a>
          </li>
          <li id="userLogin">
            <a href="javasctipt:;" id="login">
              <i class="iconfont icon-yonghu_zhanghao_wode"></i>
              登录
            </a>
          </li>
          <li id="userInfo">
            <a href="user.html">
              <i class="iconfont icon-yonghu_zhanghao_wode"></i>
              个人资料
            </a>
          </li>

        </ul>
      </div>
    </div>
  
  </div>
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
  /* background-color: #000; */
  margin: 0 auto;
  height: 100%;
  

}
.nav-bar .fl{
  display: none;
}
.nav-bar .logo{
  float: left;
  /* opacity: .8; */
}

.nav-bar .logo img {
  width: 100px;

}

.nav-bar .clickList{
  float: right;
  /* margin: 10px; */
  height: 100%;
}
.clickList ul{
  width: 480px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
.clickList ul #userInfo{
  display: none;
}
.clickList ul li{
  /* float: left; */
  height: 100%;
  list-style: none;
  margin: 0 10px;
  padding:0 5px;
  transition: all .5s;
  
}
.clickList ul li:hover{
  background-color: rgba(68, 152, 247, 0.199);

}
.clickList ul li:hover i{
  color:rgba(29, 131, 247, 0.767);
}
.clickList li a{
  text-decoration: none;
  font-size: 22px;
  text-align: center;
  line-height: 60px;
  color: #303133;
}
</style>
