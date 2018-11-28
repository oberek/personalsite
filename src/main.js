import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate';
import VueCarousel from 'vue-carousel';
import { VueElevator } from 'vue-elevator'

Vue.use(VeeValidate);
Vue.use(VueCarousel);
Vue.component('VueElevator', VueElevator);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
