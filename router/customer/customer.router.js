import Router from "@koa/router";
import {
  createCustomer,
  getAllCustomers,
} from "../../api/customer/customer.api.js";

const customersRouter = new Router({
  prefix: "/customers",
});

// create customer profile
customersRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createCustomer(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

// get all customer profiles
customersRouter.get("/", (ctx) => {
  ctx.body = getAllCustomers();
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

export default customersRouter;
