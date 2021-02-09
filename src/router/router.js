import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/pages/MainPage';
import IntercomMain from '../views/pages/intercom/IntercomMain';
import cctvMain from '../views/pages/cctv/cctvMain';
import PortfolioMain from '../views/pages/portfolio/PortfolioMain';
import ServicePage from '../views/pages/ServicePage';
import ServiceMain from '../views/pages/service/ServiceMain';


Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: MainPage
    },
     {
        name: 'IntercomMain',
        path: '/main/intercom',
        component: IntercomMain
    },
    {
        name: 'cctvMain',
        path: '/main/cctv',
        component: cctvMain
    },
    {
        name: 'PortfolioMain',
        path: '/main/portfolio',
        component: PortfolioMain
    },
    {
        name: 'Service',
        path: '/service',
        component: ServicePage
    },
    {
        name: 'ServiceMain',
        path: '/main/service',
        component: ServiceMain,

    },
];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    base: '/',
    routes
});

export default router;