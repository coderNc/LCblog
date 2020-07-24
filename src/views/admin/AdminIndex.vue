<template>
  <div>
    <stacked :userData="userData" :articleData="articleData"/>
  </div>
</template>

<script>
const Stacked = () => import('./echarts/Stacked')
  export default {
    components:{
      Stacked
    },
    data() {
      return {
        userData:[],
        articleData:[]
      }
    },
    created() {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //请求用户列表

      this.axios({
        method:'get',
        url:'/users',
        params:{
          offset:0,
          limit:100000
        }
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.userData = res.data.data
        }
      })

      //请求博客列表
      this.axios({
        method:'get',
        url:'/blogs',
        params:{
          offset:0,
          limit:1000000
        }
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.articleData = res.data.data
        }
      })
      
    },
  }

</script>

<style scoped>

</style>
