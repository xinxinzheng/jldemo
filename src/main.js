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


/**axios**/
import axios from 'axios'
Vue.prototype.$http = axios;
axios.interceptors.response.use(function(res) {
    if (res.data.errorCode === 4006) {
        element.$message.error('用户未登录');
        //element.$router.push('/login');
        return [];
    } else {
        return res;
    }
});

/**echarts**/
Vue.prototype.$echarts = require('echarts4/echarts');
/* require('echarts-liquidfill'); */
import HighCharts from 'highcharts'
require('highcharts/highcharts-3d')(HighCharts)
Vue.prototype.$highcharts = HighCharts;

// import HighCharts3d from 'highcharts-3d'
// Vue.prototype.$highcharts3d = HighCharts3d;
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