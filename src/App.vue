<template>
  <div id="app">
    <router-view :key="key"/>
    <el-backtop ></el-backtop>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/content/Footer.vue'
import hljs  from 'highlight.js'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/vs2015.css'



export default {
  name: 'App',
  components:{
    Footer
  },
  computed:{
    key(){
      return this.$route.name?this.$route.name + + new Date():this.$route+ +new Date()
    }
  },
  created(){


  },
  mounted(){
    
  }
}
</script>

<style>
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
pre {
  position: relative;
  margin-bottom: 24px;
  border-radius: 3px;
  overflow-y: scroll;
  max-height: 500px;
  }
  code {
    display: block;
    padding: 12px 24px;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    font-size: 0.8em;margin-left: 30px;
    }


</style>
