/**
 * 此文件会在入口文件的最前面被自动引入，可以在这里加载补丁，做一些初始化的操作等。
 */

/* ====================  START 初始化页面html font-size  ==================== */

let deviceWidth;

/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
const throttle = (fn, delay, atleast) => {
  let timer = null;
  let previous = null;

  return () => {
      let now = +new Date();

      if ( !previous ) previous = now;

      if ( now - previous > atleast ) {
          fn();
          // 重置上一次开始时间为本次结束时间
          previous = now;
      } else {
          clearTimeout(timer);
          timer = setTimeout(function() {
              fn();
          }, delay);
      }
  }
};

if (window.addEventListener) {
  window.addEventListener('resize', throttle(() => {
    setHtmlFontSize();
    console.log('resize=======');
  }, 200), false);
}

// TODO: CT 这里还是希望能把font-size换成以px为单位的，否则受用户浏览器最小px影响（正常100%为12px）
const setHtmlFontSize = () => {
  // 1600是设计稿的宽度，当大于1600时采用1600宽度，比例也是除以16
  deviceWidth = document.documentElement.clientWidth > 1600 ? 1600 : document.documentElement.clientWidth;
  // 最小宽度设为1200px;
  deviceWidth = deviceWidth < 1200 ? 1200 : deviceWidth;
  document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 16 + '% !important';
}

// 初始化执行一次
setHtmlFontSize();

/* ====================  END 初始化页面html font-size  ==================== */
