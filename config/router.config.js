export default [
  // error (必须放在路由 ‘/’前面，否则配置会被覆盖)
  {
    path: '/error',
    component: '../layouts/BlankLayout',
    routes: [
      // 404
      { path: '/error', redirect: '/error/404' },
      {
        path: '/error/404',
        name: 'error404',
        component: './Error/404'
      },
      {
        path: '/error/403',
        name: 'error403',
        component: './Error/403'
      },
      {
        path: '/error/500',
        name: 'error500',
        component: './Error/500'
      }
    ]
  },
  // old app
  {
    path: '/old',
    component: '../layouts/BlankLayout',
    routes: [
      // old dashboard
      { path: '/old', redirect: '/old/dashboard' },
      {
        path: '/old/dashboard',
        name: 'old-dashboard',
        component: './OldDashboard',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: './Dashboard',
      },
      {
        path: '/404',
        name: '404',
        component: './Error/404'
      }
    ],
  },

];
