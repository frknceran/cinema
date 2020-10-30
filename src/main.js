import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import App from './App.vue'
import Search from './components/Search.vue'


const router = new VueRouter({

  routes: [
    {
      path: '/', 
      component: Search, 
      name:'Search'
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
