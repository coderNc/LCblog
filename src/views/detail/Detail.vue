<template>
    <div>
      <header-test ref="header"/>
      <detail-content :detailData="detailData" />
      <detail-comment :detailComments="detailData.blogCommon" :detailData="detailData"/>
    </div>
</template>

<script>
import HeaderTest from '@/components/content/HeaderTest'
import DetailContent from './DetailContent'
import DetailComment from './DetailComment'

export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      HeaderTest,
      DetailContent,
      DetailComment
    },
    data () {
        return {
          detailData:{},
          id:''
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      

      this.id = this.$route.params.id
      console.log(this.id);
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //向服务器请求数据
      this.axios({
        method:'get',
        url:'/blog/' + this.id
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.detailData = res.data.data
        }
      })
    },
    mounted () {
      this.$refs.header.activeIndex = null
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
