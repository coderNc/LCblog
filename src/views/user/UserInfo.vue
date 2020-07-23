<template>
  <div>
          <el-row>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="userData.picture" class="image">
            <div style="padding: 14px;">
              <p>用户名：{{userData.username}}</p>
              <p>手机号：{{userData.telephone}}</p>
              <div class="bottom clearfix">
                <time class="time">创建时间：{{ userData.createTime }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
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

        }

      })
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
