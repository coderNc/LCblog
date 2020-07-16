<template>
    <div>
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="height: 918px ; background-color: rgb(238, 241, 246)">
            <div style="height:60px">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

            </div>
                <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="1-1">用户列表</el-menu-item>
                    <el-menu-item index="1-2">添加用户</el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>博客管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="2-1">博客列表</el-menu-item>
                    <el-menu-item index="2-2">写博客</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>分类管理</template>
                    <el-menu-item-group>
                    <el-menu-item index="3-1">分类列表</el-menu-item>
                    <el-menu-item index="3-2">添加分类</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item  @click="goMapList">地图</el-menu-item>
                </el-menu>
            </el-aside>
            
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
                </el-header>
                
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
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
        goMapList(){
            this.$router.push('/admin/maplist')
        }
    }
}
</script>

<style scoped>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    }
    .el-aside {
    color: #333;
    }
</style>
