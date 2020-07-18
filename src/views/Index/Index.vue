<template>
  <div>
    <!-- <Header></Header> -->
    <header-test></header-test>
    <article-content :articles="articleData"  />
    <index-aside/>
    
  </div>
  
</template>

<script>
import HeaderTest from '@/components/content/HeaderTest'
import Header from '@/components/content/Header'
import ArticleContent from '@/components/content/article/ArticleContent'
import IndexAside from './IndexAside'
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      Header,
      HeaderTest,
      ArticleContent,
      IndexAside
    },
    data () {
        return {
          articleData:[]
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //请求文章数据
      this.axios({
        method:'get',
        url:'/blogs',
        params:{
          offset:0,
          limit:100
        }
      }).then(res => {
        console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.articleData = res.data.data


        }
      })
    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
