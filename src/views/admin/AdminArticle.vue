<template>
    <div>
      
      <el-table :data="articleData" style="width:100% ;" border stripe>
        <el-table-column label="id" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="标题" align="center">
          <template slot-scope="scope">{{scope.row.blogTitle}}</template>
        </el-table-column>
        <el-table-column label="作者" align="center">
          <template slot-scope="scope">{{scope.row.blogAuthor}}</template>
        </el-table-column>
        <el-table-column label="分类" align="center">
          <template slot-scope="scope">{{scope.row.blogCategory}}</template>
        </el-table-column>
        <el-table-column label="点赞" align="center">
          <template slot-scope="scope">{{scope.row.likeNum}}</template>
        </el-table-column>
        <el-table-column label="阅读量" align="center">
          <template slot-scope="scope">{{scope.row.readNum}}</template>
        </el-table-column>
        <el-table-column label="评论" align="center">
          <template slot-scope="scope">{{scope.row.commentNum}}</template>
        </el-table-column>
        <el-table-column label="发表时间" align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
          <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini"  @click="editArticle(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteArticle(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider></el-divider>
    <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[5, 10, 20, 50]"
      
      layout="total, sizes,prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
    </div>
</template>

<script>
/* :page-size="100"
  */
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {},
    data () {
        return {
          articleData:[],
          currentPage: 1,     //当前页
          total:100,          //总数
          pageSize:10,         //每页展示个数
          limit:10,
          offset:0
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
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
          this.articleData = res.data.data.slice(0,this.limit)
          this.total = res.data.data.length
        }
      })
    },
    mounted () {

    },
    methods: {
      deleteArticle(id){
        
        this.$confirm('此操作将删除该博客, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            console.log(id);
            //调用删除博客接口
            this.axios({
                method:'DELETE',
                url:'/blog/' + id
            }).then(res => {
                console.log(res);
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
      },
      //分页
      handleCurrentChange(pages){
        //console.log(pages);
        this.offset = (pages - 1) * this.limit
        //console.log(this.offset);
        this.axios({
          method:'get',
          url:'/blogs',
          params:{
            offset:this.offset,
            limit:this.limit
          }
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.articleData = res.data.data
          }
        })
      },
      handleSizeChange(pagesize){
        //console.log(pagesize);
        this.pageSize = this.limit = pagesize
        this.axios({
          method:'get',
          url:'/blogs',
          params:{
            offset:this.offset,
            limit:this.limit
          }
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.articleData = res.data.data
          }
        })
      },
      editArticle(id){
        //console.log(id);
        this.$router.push({path:'/admin/addarticle',query:{id:id}})
      }
    }
}
</script>

<style scoped>

</style>
