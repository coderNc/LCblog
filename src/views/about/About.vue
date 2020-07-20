<template>
    <div>
      <header-test ref="header"/>
      <div class="aboutWrapper clearfix">
      <div class="aboutMe">
        <div class="aboutMe-title">
    
          <h2> <i class="iconfont icon-mingpian-copy"></i> 关于我们</h2>
        </div>
        <div class="info xiaoniu">
          
          <p>网名：小牛</p>
          <p>职业：前端学习者</p>
          <p>学校：西安邮电大学</p>
          <p>现居：陕西省-西安市</p>
          <p>Email：895407322@qq.com</p>
          <p>QQ：895407322</p>
          <a href="javascript:;"><i class="iconfont icon-shejiaotubiao-01"></i></a>
          <a href="javascript:;"><i class="iconfont icon-shejiaotubiao-03"></i></a>
          <a href="javascript:;"><i class="iconfont icon-shejiaotubiao-21"></i></a>
        </div>
        <div class="info xiaoli">
          
          <p>网名：小李</p>
          <p>职业：后端学习者</p>
          <p>学校：西安邮电大学</p>
          <p>现居：陕西省-西安市</p>
          <p>Email：1404465761@qq.com</p>
          <p>QQ：1404465761</p>
          <a href="javascript:;"><i class="iconfont icon-shejiaotubiao-01"></i></a>
          <a href="javascript:;"><i class="iconfont icon-shejiaotubiao-03"></i></a>
          <a href="javascript:;"><i class="iconfont icon-shejiaotubiao-21"></i></a>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="block">
        <el-timeline >
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF"  size="large">
            <el-card>
              <h4>在6.20的晚上，小李忽然和我说：哥，咱们写一个博客吧！我忽然慌了，因为我那时还在学vue的基础，就是一直在学，没有实践。
                所以那几天晚上一直在琢磨这个事儿。未来10天都是考试，再加上这个我顿时没了心思学vue了。
              </h4>
              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>之后去小李家准备把这个博客做完，由于那会vue还不咋会索性就拿 BootStrap+jQuery+Ajax 做了</h4>
              <p>小牛 提交于 2020/7/18 17:53 </p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>其实真正做的时间不长，页面+逻辑大概4天就完成了，就是样式和调试接口费了较长时间，尤其是Ajax的跨域问题，
                以前看别人做的时候也没那么多事。还有获取后端一直获取不到session的问题，我在本地测试时只有登录界面能获取到session其他地方一直无法存储cookie，
                去了他家后找不同，小李查了半天没查出来，我也查了半天发现在请求接口的时候要给请求头加两行代码： withCredentials: true  ;crossDomain: true,
                原因是我一直以为存储信息只要在登录的时候存储就OK了（我真傻）,没想到是其他地方只要用到当前登录信息的都要传cookie，之后给大部分Ajax请求都
                加了这两句代码，结果就OK了
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                在7.07时，终于准备部署了，小李早在我去他家之前就已经将后端接口部署在服务器上，所以只剩下部署前端项目了，于是我打开了王红元老师的视频，
                最后几节有讲怎么样将项目用Nginx部署在远程服务器上，于是下载，搞nginx的配置文件，又弄了一个晚上，索性结果是好的，直接打开域名就看到自己写的页面了
                。那一天真的很开心。

                </h4>
              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                7-13，和舍友吃完饭就坐火车回家了，回来后准备把剩下的vue学完且准备尝试拿vue重新写前端。
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                7-15，做好了登录页面。
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                7-15，做好了登录页面和主页。
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                7-16，做好了分类页面。
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                7-17，做好了文章详情页面。
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020/7/18" placement="top" type="success" color="#409EFF" size="large">
            <el-card>
              <h4>
                7-18，做好了关于页面（也就是这个页面）。
                因为是边做边学，所以速度很慢。
                </h4>

              <p>小牛 提交于 2020/7/18 17:53</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    </div>
</template>

<script>
import HeaderTest from '@/components/content/HeaderTest'
export default {
    name:  '',
    mixins: [],
    props: {},
    components: {
      HeaderTest
    },
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
      this.$refs.header.activeIndex = '3'
    },
    methods: {

    }
}
</script>

<style scoped>
.aboutWrapper{
  width: 1240px;
  margin: 0 auto;
  position: relative;
}

/* 关于我们 */
.aboutMe {
  margin:0 auto;
  width: 620px;
  height: 330px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}
.aboutMe .aboutMe-title {
  margin: 10px;
  text-align: center;
  border-bottom: 1px solid rgba(88, 88, 84, 0.411);
}
.aboutMe .aboutMe-title h2 {
  color: #303133be;
  margin-bottom: 10px;
}
.aboutMe .aboutMe-title h2 i {
  font-size: 20px;
  color: #fdc56f;
}
.aboutMe .info {
  float: left;
  margin: 10px;
  width: 45%;
}
.aboutMe .info p {
  color: #303133;
  margin: 8px;
}
.aboutMe .info a {
  text-decoration: none;
  display: inline-block;
  margin-right: 25px;
  margin-top: 35px;
}
.aboutMe .info a i {
  font-size: 30px;
}
.icon-shejiaotubiao-01 {
  color: #8dc81b;
}
.icon-shejiaotubiao-03 {
  color: #68a5e1;
}
.icon-shejiaotubiao-21 {
  color: #708a97;
}
</style>
