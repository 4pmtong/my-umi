/**
 * 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。
 * https://umijs.org/zh/guide/runtime-config.html#%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
 */

// 运行时提示错误信息
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

// 运行时修改路由 A example
/**
export const patchRoutes = (routes) => {}
*/

// 用于改写把整个应用 render 到 dom 树里的方法 (可做权限校验，延迟渲染等等)
/**
export function render(oldRender) { oldRender(); }
*/

// 用于在初始加载和路由切换时做一些事情（埋点统计等等）
/**
export function onRouteChange({ location, routes, action }) {}
*/

// 用于封装 root container，可以取一部分，或者外面套一层，等等(dva、intl 等需要在外层有个 Provider 的场景)
/**
export function rootContainer(container) {}
*/

// 修改传给路由组件的 props
/**
export function modifyRouteProps(props, { route }) {}
*/
