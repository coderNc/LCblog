<template>
      <div class="content">
        <div class="top" v-if="isShowTop">
          <el-card class="box-card">
            <div slot="header" class="clearfix header">
              <span><i class="el-icon-upload2"></i> 置 顶</span>
            </div>
            <div class="text item">
              <article-content-item v-for="(item,index) in topArticleData" :key="index" :articlesItem='item' />
            </div>
          </el-card>
        </div>
        <p class="newput"><i class="el-icon-s-promotion"></i> 最新发布</p>
        <div class="panel new ">

          <article-content-item v-for="(item,index) in articles" :key="index" :articlesItem='item' />
        </div>
      </div>
</template>

<script>
import ArticleContentItem from './ArticleContentItem'
import { showLoading, hideLoading } from '@/components/common/loading.js'


export default {
    name:  '',
    mixins: [],
    props: {
      articles:{
        type:Array,
        default(){
          return []
        }
      },
      topArticleData:{
        type:Array,
        default:[]
      }
    },
    components: {
      ArticleContentItem
    },
    data () {
        return {
          count: 0,
          isShowTop:false
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      if(this.topArticleData.length){
        this.isShowTop = true
      }
    },
    mounted () {
      /* hideLoading() */
    },
    methods: {
      load () {
        this.count += 2
      }
    }
}
</script>

<style scoped>
  .header{
    text-align: center;
    font-size: 20px;
  }
  .header i{
    color: #409EFF;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
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
