export default [
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
      // 404
      {
        path: '/404',
        component: './404',
      },
    ],
  },
];
