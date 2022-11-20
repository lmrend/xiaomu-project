import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    /* name: 'layout', */
    component: () => import('@/views/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/wenda',
        name: 'wenda',
        props:true,
        component: () => import('../views/wenda')
      },

      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/My'),
      },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/components/searchPage.vue')
  },
  {
    path: '/article/:article_id',
    name: 'article',
    props:true,
    component: () => import('../components/ArticlePage.vue')
  },
  {
    path: '/my/profile',
    name: 'user-profile',
    props:true,
    component: () => import('../components/userProfile.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
