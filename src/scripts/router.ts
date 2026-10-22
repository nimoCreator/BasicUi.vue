import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useVisitsStore } from '../stores/visits'

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string
    canFavorite?: boolean
    trackVisit?: boolean
    showInSitemap?: boolean
    showInNavbar?: boolean
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { icon: 'mdi:home', canFavorite: false, trackVisit: true, showInSitemap: true, showInNavbar: true },
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: () => import('../views/SiteMap.vue'),
    meta: { icon: 'mdi:sitemap', canFavorite: false, trackVisit: true, showInSitemap: true, showInNavbar: true },
  },
  {
    path: '/components/BasicIcon',
    name: 'component-BasicIcon',
    component: () => import('../views/BasicLibrary/BasicIcon.vue'),
    meta: { icon: 'mdi:emoticon-outline', canFavorite: true, trackVisit: true, showInSitemap: true, showInNavbar: true },
  },
  {
    path: '/components/BasicPanel',
    name: 'component-BasicPanel',
    component: () => import('../views/BasicLibrary/BasicPanel.vue'),
    meta: { icon: 'mdi:view-dashboard-outline', canFavorite: true, trackVisit: true, showInSitemap: true, showInNavbar: true },
  },
  {
    path: '/author',
    name: 'author',
    component: () => import('../views/Author.vue'),
    meta: { icon: 'mdi:account', canFavorite: false, trackVisit: true, showInSitemap: true, showInNavbar: true },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (to.meta.trackVisit) {
    useVisitsStore().recordVisit(to.fullPath)
  }
})

export default router
