<template>
      <div class="content">
        <p class="topTitle"><i class="el-icon-upload2"></i> 置顶</p>
        <div class="top">

        </div>
        <p class="newput"><i class="el-icon-s-promotion"></i> 最新发布</p>
        <div class="panel new">

          <article-content-item v-for="(item,index) in articles" :key="index" :articlesItem='item' />

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
  /* background-color: #bfa; */
}
.content {
  width: 800px;
/*   position: absolute;
  top: 21px;
  left: 0px; */
}
.content .newput,
.topTitle {
  height: 40px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  font-family: "Helvetica Neue";
}
.topTitle{
  display: none;
}
.el-icon-s-promotion{
  color: #409EFF;
}
</style>
