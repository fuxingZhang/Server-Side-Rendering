import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0cf6f717 = () => import('..\\pages\\404.vue' /* webpackChunkName: "pages_404" */).then(m => m.default || m)
const _06a2fe86 = () => import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */).then(m => m.default || m)
const _a3e31300 = () => import('..\\pages\\user\\zfx.vue' /* webpackChunkName: "pages_user_zfx" */).then(m => m.default || m)
const _1dcaea6e = () => import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages_user__id" */).then(m => m.default || m)
const _6269781e = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _685135ab = () => import('..\\pages\\404.vue' /* webpackChunkName: "" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/404",
			component: _0cf6f717,
			name: "404"
		},
		{
			path: "/user",
			component: _06a2fe86,
			name: "user"
		},
		{
			path: "/user/zfx",
			component: _a3e31300,
			name: "user-zfx"
		},
		{
			path: "/user/:id",
			component: _1dcaea6e,
			name: "user-id"
		},
		{
			path: "/",
			component: _6269781e,
			name: "index"
		},
		{
			path: "*",
			component: _685135ab,
			name: "custom"
		}
    ],
    
    
    fallback: false
  })
}
