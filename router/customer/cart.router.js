import Router from "@koa/router";
import { addToCart, viewCart } from "../../api/customer/cart.api.js";

const cartRouter = new Router({
  prefix: "/cart",
});

// add item to cart
cartRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = addToCart(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// view cart item
cartRouter.get("/", (ctx) => {
  ctx.body = viewCart();
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

export default cartRouter;
