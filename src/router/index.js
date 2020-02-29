import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)


export default new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/', name: 'Main', component: Main, children: [
      {path:'/',component:()=> import('../views/Goods.vue')},//默认路由
      {path: '/Goods', name: 'Goods', component: () => import('../views/Goods.vue')},
      {path: '/shoppingcar', component: () => import('../views/ShoppingCar.vue')},
      {path: '/evaluate',  component: () => import('../views/Evaluate.vue')},
      {path: '/business',component: () => import('../views/Business.vue')},

    ]
    },

  ]
})
