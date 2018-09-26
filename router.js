import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import * as pages from './pages'

Vue.use(Router)
Vue.use(Meta)

export default ({ store }) => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/api-keys',
        component: pages.ApiKeysPage,
        children: [
          {
            path: '',
            redirect: 'welcom'
          },
          {
            path: 'welcom',
            component: pages.ApiKeysWelcomPage,
            meta: { title: 'Welcom to setup' }
          },
          {
            path: 'setup',
            component: pages.ApiKeysSetupPage,
            meta: { title: 'Welcom to setup' },
            children: [
              {
                path: '',
                redirect: 'first'
              },
              {
                path: 'first',
                component: pages.ApiKeysDepositPage,
                meta: { title: 'Welcom to setup' }
              },
              {
                path: 'second',
                component: pages.ApiKeysSecondPage,
                meta: { title: 'Welcom to setup' }
              },
              {
                path: 'last',
                component: pages.ApiKeysLastPage,
                meta: { title: 'Welcom to setup' }
              }
            ]
          }
        ]
      }
    ]
  })
  return router
}
