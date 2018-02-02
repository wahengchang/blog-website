const Koa = require('koa');
const React = require('react');
const { renderToString } = require('react-dom');

const app = new Koa();

app.use(ctx => {
  let str = renderToString(<App />)

  ctx.body = str;
})

app.listen(3000);