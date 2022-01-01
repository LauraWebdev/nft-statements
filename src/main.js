import Vue from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';

import StyleReset from '@/assets/reset.scss';
import StyleIcons from '@mdi/font/scss/materialdesignicons.scss';
import StyleApp from '@/assets/app.scss';

Vue.use(StyleReset);
Vue.use(StyleIcons);
Vue.use(StyleApp);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
