// ref: https://umijs.org/config/
import pageRoutes from './router.config';
// import webpackPlugin from './plugin.config';

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    // antd: true,
    dva: true,
    dynamicImport: {
      webpackChunkName: true,
      // loadingComponent: './components/PageLoading/index',
    },
    title: 'umi-project-app',
    dll: true,
    locale: {
      enable: true,
      default: 'en-US',
    },
    routes: {
      exclude: [
        /models\//,
        /services\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,
        /components\//,
      ],
    },
  }],
];

export default {
  treeShaking: true,
  plugins,
  cssLoaderOptions:{
    localIdentName:'[local]'
  },
  // 路由配置
  routes: pageRoutes,
  proxy: {
    '/api': 'http://localhost:9090',
  },
  // chainWebpack: webpackPlugin,
}
