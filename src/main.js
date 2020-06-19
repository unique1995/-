// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/permission.js'
//import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import './css/reset.css'
import './css/publick.css'
import 'swiper/dist/css/swiper.css';

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
