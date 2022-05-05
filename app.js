import Koa from "koa";
import bodyParser from "koa-bodyparser";
import postsRouter from "./router/posts.router.js";
import customersRouter from "./router/customer/customer.router.js";
import tradersRouter from "./router/trader/trader.router.js";
import itemsRouter from "./router/items.router.js";
import promotionsRouter from "./router/trader/promotions.router.js";
import cartRouter from "./router/customer/cart.router.js";
import wishListRouter from "./router/customer/wishlist.router.js";

const app = new Koa();
app.use(bodyParser());

app.use(postsRouter.routes()).use(postsRouter.allowedMethods());
app.use(customersRouter.routes()).use(customersRouter.allowedMethods());
app.use(tradersRouter.routes()).use(tradersRouter.allowedMethods());
app.use(itemsRouter.routes(), itemsRouter.allowedMethods());
app.use(promotionsRouter.routes(), promotionsRouter.allowedMethods());
app.use(cartRouter.routes(), cartRouter.allowedMethods());
app.use(wishListRouter.routes(), wishListRouter.allowedMethods());

app.use((ctx) => {
  ctx.set("Content-Type", "text/html");
  ctx.body = "<h1>Not found<h1>";
  ctx.status = 404;
});

app.listen(3002, () => {
  console.log("Application is running on port 3002");
});
