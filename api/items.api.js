import { randomBytes } from "crypto";
import { items } from "../store.js";

// add item to store
export const addItem = ({ name, price, quantity, promoAmount }) => {
  const item = {
    id: randomBytes(16).toString("hex"),
    name,
    price,
    quantity,
    promoAmount,
    date: new Date(),
  };

  items.set(item.id, item);
  return item;
};

// view all items
export const viewItems = () => {
  return [...items.values()];
};

// edit items
export const editItems = (id, { name, quantity, price, promoAmount }) => {
  if (!items.has(id)) {
    throw new Error(`Not found for item ${id}`);
  }
  const item = { id, name, price, quantity, promoAmount, date: new Date() };
  items.set(item.id, item);

  return item;
};

// purchase item
export const purchase = ({ id, quantity }) => {
  const data = {
    id,
    quantity,
  };
  const item = items.get(id);

  item.quantity -= data.quantity;
  items.set(data.id, item);

  return item;
};
