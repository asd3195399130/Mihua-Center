import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// element组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
//封装的axios
import { apiGet, apiPost } from "./api/api";
Vue.prototype.$apiGet = apiGet;
Vue.prototype.$apiPost = apiPost;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
