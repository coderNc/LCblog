<template>
  <div>
    <!-- <Header></Header> -->
    <header-test></header-test>
    <div  class="container">
          <article-content :articles="articleData"  :topArticleData="topArticleData"/>
          <index-aside :hotArticleData="hotArticleData"/>
          
    </div>
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
    
  </div>
  
</template>

<script>
import HeaderTest from '@/components/content/HeaderTest'
import Header from '@/components/content/Header'
import ArticleContent from '@/components/content/article/ArticleContent'
import IndexAside from './IndexAside'
import MusicPlay from '@/components/common/MusicPlay'

import { showLoading, hideLoading } from '@/components/common/loading.js'
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      Header,
      HeaderTest,
      ArticleContent,
      IndexAside,
      MusicPlay
    },
    data () {
        return {
          articleData:[],
          hotArticleData:[],
          topArticleData:[],
          currentPage: 1,     //当前页
          total:100,          //总数
          pageSize:10,         //每页展示个数
          limit:10,
          offset:0
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      console.log(this.$route.path);
        const h = this.$createElement;
        this.$notify({
          title: 'Hello',
          message: h('i', { style: 'color: teal'}, '此博客的前端已经重构为Vue + ElementUI')
        });
          this.$notify({
          title: '提示',
          message: '旧版博客链接：<a href="static/public/index.html">旧版博客</a>',
          dangerouslyUseHTMLString: true,
          duration: 0 ,
          position: 'top-left'
        });
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      showLoading()
      //请求博客数据
      this.axios({
        method:'get',
        url:'/blogs',
        params:{
          offset:0,
          limit:100
        }
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.articleData = res.data.data.slice(0,this.limit)
          this.total = res.data.data.length
















          //置顶博客
          this.topArticleData = res.data.data.filter(value => {
            return value.status == '1'
          })








          //热门博客
          //排序算法
          let test = res.data.data
          let x
          for(let i=0 ; i<test.length ; i++){
            for(let j=i+1 ; j<test.length ; j++){
              if(test[i].readNum < test[j].readNum){
                x = test[i].readNum
                test[i].readNum = test[j].readNum 
                test[j].readNum = x
              }
            }
          }
          this.hotArticleData = test
          //console.log(this.hotArticleData);
          hideLoading()
        }
      })
    },
    mounted () {
      
    },
    methods: {
      handleCurrentChange(pages){
        //console.log(pages);
        this.offset = (pages - 1) * this.limit
        //console.log(this.offset);
        this.axios({
          method:'get',
          url:'/blogs',
          params:{
            offset:this.offset,
            limit:this.limit
          }
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.articleData = res.data.data
          }
        })
      },
      handleSizeChange(pagesize){
        //console.log(pagesize);
        this.pageSize = this.limit = pagesize
        this.axios({
          method:'get',
          url:'/blogs',
          params:{
            offset:this.offset,
            limit:this.limit
          }
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.articleData = res.data.data
          }
        })
      },
    }
}
</script>

<style>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.container {
  width: 1240px;
  margin: 40px auto;
  position: relative;
  /* background-color: #bfa; */
}
.block{
  text-align: center;
}
</style>
