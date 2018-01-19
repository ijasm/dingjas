import * as KoaRouter from "koa-router";
import * as Koa from "koa";

import { RegisterRoutes } from "./routes";

// import all the controllers for tsoa to generate routes
import "./controller.ts";

const PORT = "1002";

const app = new Koa();
const router = new KoaRouter();
// RegisterRoutes(router);

router.get("/helloworld", (ctx, next) => {
    ctx.body = "hello world";
});

app.use(router.routes());
app.use(router.allowedMethods());

async function start() {
    await app.listen(PORT, async () => {
        console.log(`MOL Intranet started on port ${PORT}`);
    });
}

start();
