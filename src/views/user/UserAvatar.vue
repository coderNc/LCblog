<template>
  <div>
    <el-card class="box-card">
  <div slot="header" class="clearfix header">
    <span><i class="el-icon-picture"></i> 更换头像</span>
  </div>
  <div  class="text item">

        <div class="before">
      <span>用户头像</span>
      <img :src="img" >
    </div>

    <div class="after">
          <span>更换后</span>
    <el-upload
      class="avatar-uploader"
      action="#"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :on-change="changeFile"
      >
      
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>

  </div>
</el-card>

  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      img:'',
      imageUrl: '',
      id:54,
      userData:{}
    };
  },
  watch: {},
  computed: {},
  created() {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //请求登录数据
      this.axios({
        method:'get',
        url:'/picture'
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          //登录成功
          this.userData = res.data.data
          this.id = res.data.data.id
          this.img = res.data.data.picture
        }

      })
  },
  mounted() {},
  methods: {
    handleAvatarSuccess(res, file) {
      //this.imageUrl = URL.createObjectURL(file.raw);
    },
    changeFile(file,fileList){

      let formData = new FormData();
      formData.append('file',file.raw)
      formData.append('id',this.id)
      this.axios({
        method:'post',
        url:'/user/picture',
        data:formData,
        headers:{'Content-Type': 'multipart/form-data'},
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.imageUrl = res.data.data
          this.$message({
            type: 'success',
            message: '头像修改成功!重新登录即可刷新'
            });
          
        }else{
          this.$message.error(res.data.data.errMsg);
        }
      })
    }
  }
};
</script>

<style scoped>
.avatar-uploader{
  border: 1px solid rgb(190, 190, 190);
  width: 180px;
}
    .avatar-uploader .el-upload {
    border: 1px solid #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .header{
    text-align: left;
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
    width: 420px;
    text-align: center;
  }
  .box-card span{
    width: 178px;
    margin-bottom: 10px;
    display: block;
  }
  .before{
    width: 178px;
    height: 178px;
    float: right;
  }
  .before img{
    width: 178px;
  }
  .after{
    width: 178px;
    height: 200px;
  }
</style>
