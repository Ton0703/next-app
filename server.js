const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("/a/:id", async (ctx) => {
    const id = ctx.params.id
    await handler(ctx.req, ctx.res,{
      pathname: '/a',
      query: {
          id
      }
    });
    ctx.response = false;
  });
  server.use(router.routes());

  server.use(async (ctx, next) => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
    await next();
  });

  server.listen(3000, () => {
    console.log("server listen on 3000");
  });
});
