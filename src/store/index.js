import Vue from 'vue'
import Vuex from 'vuex'


// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
/* const state = {
  

} */
const store = new Vuex.Store({
  state:{
    currentIndex:'0'
  },
  mutations:{
    asddd(state,payload){
      let testIndex = payload + 2
      state.currentIndex = testIndex.toString()
    }
  }

})

// 3.导出store独享
export default store