import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaBody from "koa-body";
import * as services from "./services";

const app = new Koa();

// global error handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error('Error detected', err);

    ctx.status = err.status || 500;
    ctx.body = {
      error: err.message,
    };
  }
});

const router = new Router();

router.post('/github/hook', koaBody(), (ctx) => {
  console.log("push detected: ", ctx.request.body);
  ctx.body = JSON.stringify(ctx.request.body);
});

app.use(router.routes());

export default app;
