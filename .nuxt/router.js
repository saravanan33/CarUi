import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64687f1e = () => interopDefault(import('../pages/create.vue' /* webpackChunkName: "pages/create" */))
const _c5f98d96 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _727da9f8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4460ad88 = () => interopDefault(import('../pages/productList.vue' /* webpackChunkName: "pages/productList" */))
const _156c7f86 = () => interopDefault(import('../pages/storeedit.vue' /* webpackChunkName: "pages/storeedit" */))
const _05ccf026 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create",
    component: _64687f1e,
    name: "create"
  }, {
    path: "/inspire",
    component: _c5f98d96,
    name: "inspire"
  }, {
    path: "/login",
    component: _727da9f8,
    name: "login"
  }, {
    path: "/productList",
    component: _4460ad88,
    name: "productList"
  }, {
    path: "/storeedit",
    component: _156c7f86,
    name: "storeedit"
  }, {
    path: "/",
    component: _05ccf026,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
