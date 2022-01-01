import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewIndex from '../views/Index.vue';
import ViewDetail from '../views/Detail.vue';
import ViewFAQ from '../views/FAQ.vue';
import ViewAPI from '../views/API.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: ViewIndex,
    },
    {
        path: '/detail/:slug',
        name: 'Detail',
        component: ViewDetail,
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: ViewFAQ,
    },
    {
        path: '/api',
        name: 'API',
        component: ViewAPI,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
