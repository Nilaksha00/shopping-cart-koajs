import Router from "@koa/router";
import { addToWishList, viewWishList } from "../../api/customer/wishlist.api.js";

const wishListRouter = new Router({
  prefix: "/wishlist",
});

// add item to cart
wishListRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = addToWishList(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// view wishlist items
wishListRouter.get("/", (ctx) => {
  ctx.body = viewWishList();
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

export default wishListRouter;