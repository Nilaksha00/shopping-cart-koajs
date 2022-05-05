import Router from "@koa/router";
import { createTrader } from "../../api/trader/trader.api.js";

const tradersRouter = new Router({
  prefix: "/traders",
});

// create trader profile
tradersRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createTrader(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

export default tradersRouter;
