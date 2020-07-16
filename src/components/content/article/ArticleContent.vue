<template>
    <div class="container">
      <div class="content">
        <h3 class="topTitle">置顶</h3>
        <div class="top">

        </div>
        <h3 class="newput">最新发布</h3>
        <div class="panel new">

          <article-content-item v-for="(item,index) in articles" :key="index" :articlesItem='item' />

        </div>
      </div>
        
    </div>
</template>

<script>
import ArticleContentItem from './ArticleContentItem'



export default {
    name:  '',
    mixins: [],
    props: {
      articles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      ArticleContentItem
    },
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
.container {
  width: 1240px;
  margin: 0 auto;
  position: relative;
  background-color: #bfa;
}
.content {
  width: 820px;
  position: absolute;
  top: 50px;
  left: 0px;
}
.content .newput,
.topTitle {
  height: 40px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 40px;
  font-size: 24px;
}
</style>
