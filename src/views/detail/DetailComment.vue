<template>
    <div class="comment-wrapper">
      
      <div class="comment">
        <div class="comment-info">
          <p><i class="el-icon-warning-outline"></i> 评论说明：请先<el-link type="primary" style="font-size: 16px;" @click="goLogin">登录</el-link>后在评论！</p>
        </div>
        <div class="comment-content">
          <el-form  :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm ">
              <el-form-item label="内容" prop="desc" >
              <el-input type="textarea" v-model="commentContent"  placeholder="请填写内容" :autosize="{minRows:8}" ></el-input>
            </el-form-item>
          </el-form>
          <div class="btn01">
            <el-button type="primary" @click="submitComment">提交</el-button>
          </div>
        </div>

        <el-divider></el-divider>
        <div class="comments" v-if="isSowComment">
          <div class="comments-count">
            <h3>共{{getLength}}条评论</h3>
          </div>
          <el-divider></el-divider>
          <div class="comments-content-wrapper">
            <div class="commentss-item" v-for="(item,index) in detailComments" :key="index">
              <div class="comments-img">
                <img :src="item[0].picture">
              </div>
              <span class="comment-user">{{item[0].commonSourceName}}</span>
              <span class="comment-time">{{item[0].createTime}}  <el-button type="primary" icon="el-icon-delete" size="mini" round v-if="isShowBtnDelete" @click="deliteComment(item[0].id)"></el-button></span>
              <div class="comments-content">
                {{item[0].commonContent}}
              </div>
              <el-divider></el-divider>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name:  '',
    mixins: [],
    props: {
      detailComments:{
        type:Array,
        default(){
          return []
        }
      },
      detailData:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components: {},
    data () {
        return {
          commentContent:'',
          isShowBtnDelete:false,
          userData:{},
          rules: {
            desc: [
              { required: true, message: '请填写评论内容', trigger: 'blur' }
          ]
        },
        isSowComment:false
        }
    },
    watch: {
      detailComments(){
        if(this.detailComments.length != 0){
        this.isSowComment = true
      }
/*             if(this.$store.state.user.level == '1'){
        this.isShowBtnDelete = true
      } */
      }
    },
    computed: {
      getLength(){
        return this.detailComments.length
      }
    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //请求登录页用户数据
      this.axios({
        method:'get',
        url:'/picture'
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
            this.userData = res.data.data
            if(this.userData.level == '1'){
              this.isShowBtnDelete = true
      }
        }
      })

    },
    mounted () {
/*             if(this.$store.state.user.level == '1'){
        this.isShowBtnDelete = true
      } */
    },
    methods: {
      submitComment(){
        console.log(this.detailData);
        //请求评论
          this.axios({
            method:'post',
            url:'/common',
            data:{
              commonTargetName:this.detailData.blogAuthor,
              blogId:this.detailData.id,
              commonContent:this.commentContent,
              pid:0
            }
          }).then(res => {
            console.log(res);
            if(res.status == 200 && res.data.status == 'success'){
              this.$message({
                message: '评论成功',
                type: 'success'
              });
              location.reload()
            }else{
              this.$message.error(res.data.data.errMsg);
            }
          })
      },
      goLogin(){
        this.$router.push('/login')
      },
      deliteComment(id){
        //console.log(id);

        this.$confirm('此操作将删除该评论, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            //调用删除评论接口
            this.axios({
                method:'DELETE',
                url:'/common/' + id
            }).then(res => {
                //console.log(res);
                if(res.status == 200 && res.data.status == 'success'){
                    this.$message({
                            type: 'success',
                            message: '删除成功!'
                    });
                    location.reload()
                }
            })
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除'
            });          
        });
      }
    }
}
</script>

<style scoped>
.comment-wrapper{
  width: 1240px;
  margin: 0 auto;
  
}
.comment {
  margin-top: 40px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  /* height: 500px; */
}
.comment-info {
  padding: 10px;
  font-size: 16px;
 
}
.comment-info i{
  color: #f00;
}
.comment-content {
  padding: 10px;
}
.comment-content span {
  margin-bottom: 10px;
  display: inline-block;
}
.btn01{
  width: 100px;
  margin: 0 auto;
}
.textareInput{
  height: 200px;
}
.comments {
  margin-top: 10px;
}
.comments-count {
  padding-left: 10px;

}
.comments-count h3{
    font-size: 18px;
  font-weight: 500;
  font-family: "PingFang SC";
  color: #303133;
}
.comments-content-wrapper {
  margin-top: 10px;
  padding: 0 10px;
}
.commentss-item {
  line-height: 50px;
  position: relative;
 
  margin: 10px 0;
}
.commentss-item span {
  /* line-height: 50px; */
  /* display: inline-block; */
  /* height: 50px; */
}
.commentss-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* float: left; */
}
.comments-img {
  width: 50px;
  height: 50px;
}
.commentss-item .comment-user {
  font-family: "PingFang SC";
  font-size: 14px;
  color: #909399;
  position: absolute;
  left: 80px;
  top: 0;
}
.commentss-item .comment-time {
  font-family: "PingFang SC";
  font-size: 14px;
  color: #909399;
  position: absolute;
  right: 0;
  top: 0;
}
.comments-content {
  color: #606266;
  font-family: "PingFang SC";
  padding-left: 80px;
}
</style>
