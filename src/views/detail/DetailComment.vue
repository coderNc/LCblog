<template>
    <div class="comment-wrapper">
      <div class="comment">
        <div class="comment-info">
          <p><i class="el-icon-warning-outline"></i> 评论说明：请先登录后在评论！</p>
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
        <div class="comments">
          <div class="comments-count">
            <h3>共{{getLength}}条评论</h3>
          </div>
          <div class="comments-content-wrapper">
            <div class="commentss-item" v-for="(item,index) in detailComments" :key="index">
              <div class="comments-img">
                <img :src="item[0].picture">
              </div>
              <span class="comment-user">{{item[0].commonSourceName}}</span>
              <span class="comment-time">{{item[0].createTime}}</span>
              <div class="comments-content">
                {{item[0].commonContent}}
              </div>
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
          rules: {
            desc: [
              { required: true, message: '请填写评论内容', trigger: 'blur' }
          ]
        }
        }
    },
    watch: {

    },
    computed: {
      getLength(){
        return this.detailComments.length
      }
    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
    },
    mounted () {

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
  border-bottom: 1px solid rgba(102, 102, 102, 0.562);
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
  font-size: 16px;
}
.comments-content-wrapper {
  margin-top: 10px;
  padding: 0 10px;
}
.commentss-item {
  line-height: 50px;
  position: relative;
  border-bottom: 1px solid rgba(102, 102, 102, 0.562);
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
  position: absolute;
  left: 80px;
  top: 0;
}
.commentss-item .comment-time {
  position: absolute;
  right: 0;
  top: 0;
}
.comments-content {
  padding-left: 80px;
}
</style>
