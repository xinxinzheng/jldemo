// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*import VueResource from 'vue-resource'*/

/*vuex store*/
import store from '../vuex/index'


/**element-ui**/
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(element)

/*lodash**/
import _ from 'lodash'
Vue.prototype.$_ = _;
/**css**/
require('./assets/css/normalize.css')
require('./assets/css/basic.css')

/*icon*/
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    data: {
        eventHub: new Vue()
    },
    components: { App }
})