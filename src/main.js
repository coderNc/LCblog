import Vue from 'vue'
import App from './App'
import router from './router'

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



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



