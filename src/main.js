import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './dist/assets/styles/demo.css';
import './dist/assets/styles/iconfont.css';

import './dist/assets/styles/common.css';
import './dist/assets/styles/zc.css';
import './dist/assets/images/sprite.png';
import { FactChart,NetChart,PieChart,GeoChart } from "./dist/assets/js/zoomcharts"; 
// import { FactChart,NetChart,PieChart,GeoChart } from "@dvsl/zoomcharts/zoomcharts"; 


Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
