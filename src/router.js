import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'transaction-management',
          path: '',
          component: () => import('@/modules/transaction/TransactionPage.vue'),
        },
        {
          name: 'transaction-history',
          path: 'transaction-history/:id',
          component: () => import('@/modules/transaction/TransactionHistory.vue'),
          props: true,
        },
        // Pages
        {
          name: 'customer-management',
          path: 'customer',
          component: () => import('@/modules/customer/CustomerPage.vue'),
        },
        {
          name: 'product-management',
          path: 'product',
          component: () => import('@/modules/product/ProductPage.vue'),
        },
        {
          name: 'product-detail',
          path: 'product/:id',
          component: () => import('@/modules/product/ProductDetail.vue'),
          props: true,
        },
        {
          name: 'user-management',
          path: 'user',
          component: () => import('@/modules/user/UserPage.vue'),
        },
        {
          name: 'overview',
          path: 'overview',
          component: () => import('@/modules/overview/OverviewPage.vue'),
        },
        // // Tables
        // {
        //   name: 'Regular Tables',
        //   path: 'tables/regular-tables',
        //   component: () => import('@/views/dashboard/tables/RegularTables'),
        // },
        // // Maps
        // {
        //   name: 'Google Maps',
        //   path: 'maps/google-maps',
        //   component: () => import('@/views/dashboard/maps/GoogleMaps'),
        // },
        // // Upgrade
        // {
        //   name: 'Upgrade',
        //   path: 'upgrade',
        //   component: () => import('@/views/dashboard/Upgrade'),
        // },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/dashboard/Login.vue'),
      name: 'login',
    },
    {
      path: '/forgot-password',
      component: () => import('@/views/dashboard/ForgotPassword.vue'),
      name: 'forgot-password',
    },
    {
      path: '/register-account',
      component: () => import('@/views/dashboard/RegisterAccount.vue'),
      name: 'register-account',
    },
  ],
})
