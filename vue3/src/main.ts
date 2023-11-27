import { createApp, DirectiveBinding, Directive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

import * as echarts from 'echarts';
import Antd from 'ant-design-vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const stripedDirective: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        const { value } = binding;
        const items = el.querySelectorAll<HTMLElement>(value);

        items.forEach((item, index) => {
            if (index % 2 === 0) {
                item.style.backgroundColor = '#f1f1f1';
            } else {
                item.style.backgroundColor = 'blue';
            }
        });
    },
};
app.use(Antd)
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus)
app.directive('stripe', stripedDirective);
app.use(store).use(router).mount('#app')
