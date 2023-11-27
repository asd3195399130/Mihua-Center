import { createRouter, createWebHashHistory, RouteRecordRaw, } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/test/'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },{
    path:"/test",
    name: 'test',
    component:()=>import("../views/TestView.vue"),
    redirect: "/test/homeword",
    children:[
      {
       path:"/test/homeword",
       name: "homeword",
       component:()=>import("../views/HomeWord.vue"),
       
      },{
        path:"/test/template",
        name:"template",
        component:()=>import ("../views/TemplateView.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
