<template>
    <div>
        <div class="entry">
          <div class="head">
            <span class="sort">{{articlesItem.blogCategory}}</span>
            <router-link :to="'/detail/'+articlesItem.id"> {{articlesItem.blogTitle}}</router-link>
          </div>
          <div class="main">
            <p class="info">{{articlesItem.blogAuthor}} 发表于 {{articlesItem.createTime}}</p>
            <div class="brief" v-html="articlesItem.blogContent.trim().substr(0,180)+'...'"></div>
            <p class="extra">
              <span class="reading">阅读({{articlesItem.readNum}})</span>
              <span class="comment">评论({{articlesItem.commentNum}})</span>
              <a href="javascript:;" class="like">
                <i class="fa fa-thumbs-up"></i>
                <span>赞({{articlesItem.likeNum}})</span>
              </a>
              <router-link :to="'/category/'+articlesItem.id"  class="tags"> 分类：<span>{{articlesItem.blogCategory}}</span></router-link>
<!--               <a href="javascript:;" class="tags">
                分类：<span>{{articlesItem.blogCategory}}</span>
              </a> -->
            </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:  '',
    mixins: [],
    props: {
      articlesItem:{
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

    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style>
.content .entry {
  position: relative;
  /* clear: both; */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin: 30px 0;
  padding: 10px;
  transition: all 0.3s;
  height: 230px;
}
.content .entry:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.content .entry + .entry {
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
}
.content .sort li:after {
  content: '';
  width: 110%;
  margin: 0 -20px;
  border-bottom: 1px solid #eee;
  position: absolute;
  left: 0;
  bottom: 0;
}
.content .head {
  height: 30px;
  line-height: 1;
  padding: 5px 0;
  margin: 8px 0 10px 0;
  box-sizing: border-box;
  font-size: 20px;
  color: #444;
}
.content .head a {
  color: #444;
  transition: all 0.5s;
}
.content .head a:hover {
  color: #409EFF;
}
.content .head .sort {
  position: relative;
  display: block;
  height: 24px;
  line-height: 24px;
  padding: 0 10px;
  margin-right: 10px;
  float: left;
  color: #fff;
  background-color: #409EFF;
  font-size: 12px;
}
.content .head .sort:after {
  display: block;
  position: absolute;
  top: 8px;
  right: -8px;
  content: '';
  border-width: 4px;
  border-style: solid;
  border-color: transparent transparent transparent #409EFF;
}
.content .main {
  overflow: hidden;
  margin-bottom: 8px;
  position: relative;
}
.content .info {
  font-size: 12px;
  color: #999;
  width: 800px;
  margin: 0;
}
.content .brief {
  /* line-height: 22px; */
  
  margin-bottom: 10px;
  font-size: 14px;
  color: #777;
  width: 780px;
  height: 130px;
  /* background-color: #bfa; */
  /* overflow: hidden; */
}
.content .brief p,.content .brief h2{
  font-size: 14px;
  margin: 5px;
  /* display: inline-block; */
}
.content .brief pre{
  margin: 3px;
}
#dian {
  height: 20px;
  width: 10%;
  position: absolute;
  bottom: 20%;
  color: rgba(29, 131, 247, 0.767);
  text-decoration: none;
}
.content .extra {
  font-size: 12px;
  color: #999;
}
.content .extra .fa {
  width: 12px;
  height: 12px;
}
.content .extra > span,
.content .extra > a {
  margin-right: 20px;
}
.content .extra a {
  color: #999;
}
.content .extra .like:hover {
  color: #409EFF;
}
.content .extra a span {
  text-decoration: underline;
}
.content .tags span:hover {
  color: #409EFF;
}
/* .content .entry p {
  width: 100%;
  float: left;
  clear: both;
} */
</style>
