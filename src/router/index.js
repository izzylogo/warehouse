import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import MobileView from '../views/MobileView.vue'

const test = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
]

const mobileView = {
  path: '/mobile',
  name: 'Mobile',
  component: MobileView,
  redirect: 'mobile/main',

  children: [
    {
      path: '/mobile/main',
      name: 'mobileMain',
      component: () =>
        import(/* webpackChunkName: "home" */ '../views/MobileMainView.vue'),
      meta: { title: 'MobileMain', requiresAuth: true },
    },
  ],
}

let dashboardView = {
  path: '/',
  component: DashboardView,
  name: 'Dashboard',
  redirect: '/dashboard/supply',

  children: [
    {
      path: '/dashboard/supply',
      name: 'supply',
      component: () =>
        import(/* webpackChunkName: "home" */ '../views/SupplyView.vue'),
      meta: { title: 'Supply', requiresAuth: true },
    },
  ],
}

const routes = [dashboardView, test, mobileView]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
