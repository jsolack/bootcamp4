import Vue from 'vue'
import Router from 'vue-router'
import aboutcomp from './components/About.vue'
import homecomp from './components/Home.vue'
import reportingcomp from './components/Reporting.vue'

Vue.use(Router)

const PageNotFound = {
  template: "<h1>404: Page Not Found!</h1>"
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homecomp
    },
    {
      path: '/about',
      name: 'about',
      component: aboutcomp
    },
    {
      path: '/reporting',
      name: 'reporting',
      component: reportingcomp
    },
    {
        path: '*',
        name: '404',
        component: PageNotFound
    }
  ]
})
