import Router from "@koa/router";
import {
  addPromotion,
  viewPromotions,
} from "../../api/trader/promotions.api.js";

const promotionsRouter = new Router({
  prefix: "/promotions",
});

// add promotions to an item
promotionsRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = addPromotion(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// view promotions of an item
promotionsRouter.get("/", (ctx) => {
  ctx.body = viewPromotions();
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

export default promotionsRouter;
