import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import StyletronVue from 'styletron-vue'

import Store from './Store'
import styletron from './StyletronInstance'
import App from './components/App.vue'
import ItemsRoute from './routes/items/components/MainView'
import * as modules from './modules'

Vue.config.productionTip = false

const generateView = () => {
  Vue.use(Vuex)
  Vue.use(StyletronVue)
  Vue.use(VueRouter)

  const store = new Store(modules)
  const routes = [
    {
      path: '/items',
      component: ItemsRoute,
    },
    {
      path: '/',
      redirect: '/items',
    },
  ]
  const router = new VueRouter({
    mode: 'history',
    routes,
  })

  return new Vue({
    store,
    styletron,
    router,
    render: h => h(App),
  })
}

const renderWebView = (args = {}) => {
  const {
    rootId = 'root',
  } = args

  const appInstance = generateView(args)

  appInstance.$mount(window.document.getElementById(rootId))
}

const start = (args = {}) => {
  if (typeof window !== 'object') {
    // server
    return
  }
  // browser-like
  if (typeof window.AppShell !== 'object') {
    renderWebView(args)
  }
}

start({
  rootId: 'root',
})
