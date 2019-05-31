
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import NavComponent from '@/components/Nav.vue'

import axios from 'axios'

Vue.prototype.$http = axios;

Vue.component('NavComponent' , NavComponent);
Vue.use(NavComponent)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
})
.$mount('#app')
