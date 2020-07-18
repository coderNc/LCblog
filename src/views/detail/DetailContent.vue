<template>
    <div class="detail-wrapper">
      <div class="detail">
        <div class="detail-title">
          <h2>{{detailData.blogTitle}}</h2>
        </div>
        <div class="detail-info">
          <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumbList">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:'/category/0'}">{{detailData.blogCategory}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{detailData.blogTitle}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="userInfo">
            <span>{{detailData.blogAuthor}} 发表于：{{detailData.createTime}}</span>
            <span class="shuxian">|</span>
            <router-link to="/category/0">分类：<span>{{detailData.blogCategory}}</span></router-link>
            <span class="shuxian">|</span>
            <span>阅读量：{{detailData.readNum}}</span>
            <span class="shuxian">|</span>
            <span> 点赞：{{detailData.likeNum}}</span>
          </div>
        </div>
        <div class="detail-content" v-html="detailData.blogContent">
          
        </div>
        <el-divider></el-divider>
        <div class="dianzan" > 
          <el-button type="primary" @click="dianZan">点赞<i class="el-icon-star-off el-icon--right" ref="dianzan"></i></el-button>
          <p>-------------本文结束感谢您的阅读-------------</p>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
    name:  '',
    mixins: [],
    props: {
      detailData:{
        type:Object,
        default(){
          return {}
        }
      }
    },
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
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
    },
    mounted () {

    },
    methods: {
      //点赞

      dianZan(){
        //console.log(this.detailData.id);
        this.axios({
          method:'post',
          url:'/blog/like/' + this.detailData.id
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.$message({
              message: '点赞成功',
              type: 'success'
            });
            this.$refs.dianzan.className = 'el-icon-star-on el-icon--right'
          }else{
            this.$message.error(res.data.data.errMsg);
          }
        })
      }
    }
}
</script>

<style scoped>
  .detail-wrapper{
    width: 1240px;
    margin: 0 auto;
  }
  .detail {
  width: 100%;
  /* height: 1000px; */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin-top: 40px;
}
.breadcrumbList{
  padding: 20px;
  font-size: 16px;
}
.detail-title {
  text-align: center;
  padding: 20px;
}
.detail-info .userInfo {
  padding-left: 20px;
  color: #999;
  font-size: 14px;
}
.detail-info .userInfo a {
  text-decoration: none;
  color: #666;
}
.detail-info .userInfo a:hover {
  color: #409EFF;
}
.detail-content {
  padding: 60px;
}
.detail-content pre {
  /* background-color: rgb(211, 208, 208); */
}
.detail-content img {
  width: 100%;
}
.dianzan {
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 10px;
}
</style>
