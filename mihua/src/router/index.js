import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/HomeView",
    component: HomeView,
    redirect: "/HomeView/homepage/",
    children: [
      {
        path: "/HomeView/homepage/",
        name: "HomePage",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "/HomeView/UserSystem",
        name: "UserSystem",
        component: () => import("../views/power/UserSystem.vue"),
      },
      {
        path: "/HomeView/SystemRole",
        name: "Systemrole",
        component: () => import("../views/power/SystemRole.vue"),
      },
      {
        path: "/HomeView/CallbuillingView",
        name:"CallbuillingView",
        component:()=>import("../views/system/CallbuillingView.vue")
      },
      {
        path: "/HomeView/TelephoneView",
        name:"TelephoneView",
        component:()=>import("../views/Numbermange/TelephoneView.vue")
      },
      {
        path: "/HomeView/EnterPrise",
        name: "EnterPrise",
        component: () => import("../views/EnterPrise.vue"),
        redirect: "/HomeView/EnterPrise/MegacorPor",
        children: [
          {
            path: "/HomeView/EnterPrise/MegacorPor",
            name: "MegacorPor",
            component: () => import("../views/MegacorPor.vue"),
          },
          {
            path: "/HomeView/EnterPrise/SonSubida",
            name: "SonSubida",
            component: () => import("../views/SonSubida.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/loginView.vue"),
  },
];

import { MessageBox } from "element-ui";
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    next();
  } else if (localStorage.getItem("res") == 0) {
    next();
  } else {
    MessageBox.alert("请先登录", "提示", {
      confirmButtonText: "确定",
      callback: (action) => {
        console.log(action);
        MessageBox({
          type: "info",
         
        });
        next("/"); // 点击确定后跳转到登录页面
      },
    });
  }
});

export default router;
