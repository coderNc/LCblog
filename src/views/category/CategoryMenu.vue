<template>
    <div class="menu-wrapper">
      <el-row class="tac">
  <el-col :span="12">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo">
      <el-menu-item @click="goCategoryAll" index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">全部</span>
      </el-menu-item>

      <el-menu-item v-for="(item,index) in categoryData" :key="index" @click="goCategoryOther(item.id,index)" :index="index+2">
        <i class="el-icon-medal"></i>
        <span slot="title">{{item.categoryName}}</span>
      </el-menu-item>

    </el-menu>
  </el-col>
  </el-row>
    </div>
</template>

<script>
export default {
    name:  '',
    mixins: [],
    props: {
      categoryData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {},
    data () {
        return {
          id:0,
          
        }
    },
    watch: {

    },
    computed: {
      activeIndex(){
        return this.$store.state.currentIndex
      }
    },
    created () {
      this.id = this.$route.params.id
      console.log(this.id);
      
    },
    mounted () {

    },
    methods: {
      goCategoryAll(){
        if(this.id == 0){
          location.reload()
        }else{
          this.$store.commit('asddd',-1)
          this.$router.push('/category/0')
        }
        
      },
      goCategoryOther(id,index){
        //获取到分类id
        //console.log(id);
        this.$store.commit('asddd',index)
        console.log(this.$store.state.currentIndex);
        //console.log(this.$store);
        this.$router.push('/category/'+id)
      }
    }
}
</script>

<style scoped>
.menu-wrapper{
  width: 400px;
  margin-left: 340px;
  position: fixed;
  top: 100px;
}
.tac{
  width: 400px;
  
  
}

</style>
