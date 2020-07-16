<template>
    <div>
      <el-container style="height: 60px; border: 1px solid #eee">
        <el-header style="text-align: right; font-size: 12px">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">分类</el-menu-item>
            <el-menu-item index="3" >关于</el-menu-item>
            <el-menu-item index="4"><a href="javascript:;" target="_blank">登录</a></el-menu-item>
          </el-menu>
        </el-header>
    
      </el-container>
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
        activeIndex: '1',
        activeIndex2: '1'
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

    }
}
</script>

<style scoped>

</style>
