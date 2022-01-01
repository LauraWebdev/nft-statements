import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewIndex from '../views/Index.vue';
import ViewDetail from '../views/Detail.vue';
import ViewAbout from '../views/About.vue';

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
        path: '/about',
        name: 'About',
        component: ViewAbout,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
