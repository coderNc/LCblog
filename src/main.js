import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入初始化样式表
import 'normalize.css'
import './assets/icon/iconfont.css'
import $ from 'jquery'

//import  'ribbon.js'



//引入axios模块
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//导入地图插件
import VueAMap from 'vue-amap'

Vue.use(VueAMap);
//百度地图	
VueAMap.initAMapApiLoader({
  key: '	3f5bdc7cb6cfffbafe7fbbb18528d7bb',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
Vue.config.productionTip = false
//注册elementUI
Vue.use(ElementUI)

//注册axios模块
Vue.use(VueAxios , axios)

//代码高亮
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})




