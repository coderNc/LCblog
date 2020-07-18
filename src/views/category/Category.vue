<template>
    <div>
      <header-test ref="header"/>
      <category-content :articles="articleData"  />
      <category-menu :categoryData="categoryData"/>
      
    </div>
</template>

<script>
import HeaderTest from '@/components/content/HeaderTest'
import ArticleContent from '@/components/content/article/ArticleContent'
import CategoryContent from '@/components/content/article/CategoryContent'
import CategoryMenu from './CategoryMenu'
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      HeaderTest,
      ArticleContent,
      CategoryContent,
      CategoryMenu
    },
    data () {
        return {
          articleData:[],
          categoryData:[],
          id:0
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true

      //获取路由参数id
      //console.log(this.$route.params.id);
      this.id = this.$route.params.id
      console.log(this.id);
      if(this.id == 0){
        //请求所有文章数据
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
            this.articleData = res.data.data
          }
        })
      }else{
        this.axios({
          method:'get',
          url:'/blogs/category',
          params:{
            offset:0,
            limit:100,
            id:this.id
          }
        }).then(res => {
          console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.articleData = res.data.data
          }
        })
      }


      //请求分类数据
      this.axios({
        method:'get',
        url:'/category'
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.categoryData =res.data.data
        }
      })
    },
    mounted () {
      this.$refs.header.activeIndex = '2'
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
