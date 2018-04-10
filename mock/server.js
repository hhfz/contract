// const db = require('./db.js');
const routes = require('./routes.js');
const jsonServer = require('json-server');
const port = 3000;

const server = jsonServer.create();
// 创建路由
const router = jsonServer.router(require('./db.json'));
// 重写路由
const rewriter = jsonServer.rewriter(routes);
const middlewares = jsonServer.defaults();
// 可以控制访问权限，对请求进行处理
server.use(middlewares)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // 继续json-server路由
  next()
})

server.use(rewriter);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port: ${port}`);
});
