<template>
    <div>
      
      <el-table :data="categoryData" style="width:100%" border>
        <el-table-column label="id"  align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="名称"  align="center">
          <template slot-scope="scope">{{scope.row.categoryName}}</template>
        </el-table-column>
          <el-table-column label="操作"  align="center">
          <template slot="header" slot-scope="scope">
            <el-button type="primary" @click="dialogVisible = true">添加分类<i class="el-icon-plus el-icon--right"></i></el-button>
      </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deleteCategory(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider></el-divider>


<el-dialog
  title="添加分类"
  :visible.sync="dialogVisible"
  width="30%"
  >
  <el-input  placeholder="请输入分类名称" v-model="categoryName"></el-input>
  
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addCategory">添 加</el-button>
  </span>
</el-dialog>
    </div>
</template>

<script>
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {},
    data () {
        return {
          categoryData:[],
          dialogVisible: false,
          categoryName:'',
        }
    },
    watch: {

    },
    computed: {

    },
    created () {
      this.axios.defaults.baseURL = 'http://www.lcblog.xyz:81'
      this.axios.defaults.withCredentials = true
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
      deleteCategory(id){
        console.log(id);
        //调用删除分类接口
        this.$confirm('此操作将删除该分类, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            //调用删除用户接口
            this.axios({
                method:'DELETE',
                url:'/category/' + id
            }).then(res => {
                //console.log(res);
                if(res.status == 200 && res.data.status == 'success'){
                    this.$message({
                            type: 'success',
                            message: '删除成功!'
                    });
                }
                location.reload()
            })
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消删除'
            });          
        });
      },
      //添加分类

      addCategory(){
        console.log(this.categoryName);
        this.axios({
          method:'POST',
          url:'/category',
          params:{
            category:this.categoryName
          }
        }).then(res => {
          //console.log(res);
          if(res.status == 200 && res.data.status == 'success'){
            this.$message({
              type: 'success',
              message: '添加成功!'
            });
            location.reload()
            
          }else{
            this.$message.error(res.data.data.errMsg+ '!请重新输入');
          }

        })
      },
    }
}
</script>

<style scoped>

</style>

