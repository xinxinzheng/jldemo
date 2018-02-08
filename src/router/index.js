import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



/* redirect Page
------------------------------------------------ */
const IndexRoute = [{
    path: '/',
    name: 'index',
    redirect: '/app'
}];

/* 1. AppPage
------------------------------------------------ */

const App = resolve => {
    require.ensure(['@/App'], () => {
        resolve(require('@/App'));
    })
};

const AppRoute = [{
    path: '/app',
    name: 'app',
    component: App
}];


// ==================================  //

export default new Router({
    // mode: 'history',
    routes: [
        ...AppRoute
    ]
})