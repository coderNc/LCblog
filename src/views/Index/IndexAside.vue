<template>
    <div class="aside-wrapper">
      <el-card class="box-card">
        <div slot="header" class="clearfix header">
          <span> <i class="el-icon-collection-tag"></i> 标签云</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div class="text item">
          <biao-qian-yun/>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix header">
          <span> <i class="iconfont icon-hot"></i> 最热文章</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div class="text item">
          <el-link :underline="false" v-for="(item,index) in hotArticleData.slice(0,10)" :key="index" class="ellink" @click="goDetail(item.id)"><i class="">{{index + 1}}</i> {{item.blogTitle}}</el-link>
        </div>
      </el-card>
      <music-play/>
    </div>

</template>

<script>
import MusicPlay from '@/components/common/MusicPlay'
import BiaoQianYun from '@/components/common/BiaoQianYun'
export default {
    name:  '',
    mixins: [],
    props: {
      hotArticleData:{
        type:Array,
        default:[]
      }
    },
    components: {
      BiaoQianYun,
      MusicPlay
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
      goDetail(id){
        //console.log(id);
        this.$router.push('/detail/' + id)
      }
    }
}
</script>

<style scoped>

.aside-wrapper {
  width: 400px;
  
  position: absolute;
  top: 0;
  right: 0;
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
    width: 400px;
    margin-bottom: 30px;
  }
  .header span{
    font-size: 18px;
    color: #303133;
  }
  .header i{
    color: #409eff;
  }
  .ellink{
    display: block;
    margin: 15px;
    font-size: 16px;
    font-family: "Hiragino Sans GB";
  }
  .ellink i{
    margin-right: 5px;
    color: #409eff;
    font-weight: 600;
  }

</style>
