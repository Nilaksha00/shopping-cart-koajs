import Router from "@koa/router";
import { addItem, editItems, purchase, viewItems } from "../api/items.api.js";

const itemsRouter = new Router({
  prefix: "/items",
});

// add item to store
itemsRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = addItem(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// view all items in the store
itemsRouter.get("/", (ctx) => {
  ctx.body = viewItems();
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// edit items in the store
itemsRouter.patch("/:id", (ctx) => {
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = editItems(id, data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// view all items in the store
itemsRouter.get("/purchase", (ctx) => {
  const data = ctx.request.body;
  ctx.body = purchase(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

export default itemsRouter;
