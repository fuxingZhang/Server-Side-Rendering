import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ItemView = () => import('../views/ItemView.vue')
const Index = () => import('../views/Index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/item', component: ItemView },
      { path: '/', component: Index }
    ]
  })
}
