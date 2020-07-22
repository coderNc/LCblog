<template>
    <div>
      <h2>{{title}}</h2>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-width="80px" >
  <el-form-item label="博客标题" >
    <el-input v-model="form.blogTitle"></el-input>
  </el-form-item>

  <el-form-item label="分类">
    <el-select v-model="form.blogCategory" placeholder="请选择分类">
      <el-option v-for="(item,index) in categoryData" :key="index" :label="item.categoryName" :value="item.categoryName"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="是否置顶">
    <el-radio-group v-model="form.status">
      <el-radio label="0" >不置顶</el-radio>
      <el-radio label="1">置顶</el-radio>
    </el-radio-group>
  </el-form-item>
  
<el-form-item label="博客内容">
    <editor  ref="edit" v-model="form.blogContent" :contxt="form.blogContent" :isShowBtn='isShowBtn'></editor>
  </el-form-item>
  <el-divider></el-divider>
  <el-form-item class="btns">
    <el-button>取消</el-button>
    <el-button type="primary" @click="onUpdata" v-if="isShowBtn">修改</el-button>
    <el-button type="primary" @click="onSubmit" v-else>发布</el-button>
    
  </el-form-item>
</el-form>
    </div>
</template>

<script>
import Editor from '@/components/common/Editor.vue'
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      Editor
    },
    data () {
        return {
          categoryData:[],
          form: {
            blogTitle: '',
            blogCategory: '',
            blogContent: '',
            status: '',
          },
          id:null,
          title:'写博客',
          isShowBtn:false
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
      //console.log(this.$route.query);
      this.id = this.$route.query.id
      //console.log(this.id);
      if(this.id == undefined){
        console.log('undefined');
      }else{
        this.title = '编辑博客'
        console.log(this.id);
        //根据id查询博客
        this.axios({
          method:'get',
          url:'/blog/' + this.id
        }).then(res => {
          console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.form.blogTitle = res.data.data.blogTitle
            this.form.blogCategory = res.data.data.blogCategory
            this.form.blogContent = res.data.data.blogContent
            this.form.status = res.data.data.status
            this.isShowBtn = true
          }
        })
      }








      //请求分类数据
      this.axios({
        method:'get',
        url:'/category'
      }).then(res => {
        //console.log(res);
        if(res.status == 200 && res.data.status == 'success'){
          this.categoryData =res.data.data
        }
      })
    },
    mounted () {
      

    },
    methods: {
      onSubmit(){
        //this.form.blogContent = this.$refs.edit.editorContent
        //console.log(this.form);
        //请求添加博客
        this.axios({
          method:'post',
          url:'/blog',
          data:JSON.stringify(this.form),
          headers:
                        {
                        'Content-Type': 'application/json'
                        }
        }).then(res => {
          console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.$message({
              type: 'success',
              message: '发布成功!'
              });
              this.$router.push('/admin/article')
          }else{
            this.$message.error(res.data.data.errMsg+ '!请重新输入!');
          }
        })
        
      },
      onUpdata(){
        console.log(this.form);
        let formData = this.form
        formData.id = this.id
        console.log(formData);
        console.log(JSON.stringify(formData));
        this.axios({
          method:'put',
          url:'/blog',
          data:JSON.stringify(formData),
          headers:
          {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.$message({
              type: 'success',
              message: '发布成功!'
              });
              this.$router.push('/admin/article')
          }else{
            this.$message.error(res.data.data.errMsg+ '!请重新输入!');
          }
        })
      }
    }
}
</script>

<style scoped>
  .btns{
    margin-top: 20px;
  }
</style>
