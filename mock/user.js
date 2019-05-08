import mockjs from 'mockjs';

export default {
  // 支持值为 Object 和 Array
  'GET /api2/users': { users: ['a', 'b'] },

  // GET POST 可省略
  '/api2/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api2/users/create': (req, res) => { res.end('OK'); },

  // 使用 mockjs 等三方库
  'GET /api2/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
}
