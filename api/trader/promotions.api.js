import { promotions, items } from "../../store.js";

// add a promotion to an item
export const addPromotion = ({ id, name, promo }) => {
  const promotion = {
    id,
    name,
    promo,
    date: new Date(),
  };

  promotions.set(promotion.id, promotion);

  const item = items.get(promotion.id);

  item.price -= promotion.promo;
  items.set(promotion.id, item);

  return item;
};

// view all promotions
export const viewPromotions = () => {
  return [...promotions.values()];
};

// view promotion of an item
export const viewPromotion = (id) => {
  if (!promotions.has(id)) {
    throw new Error(`No promotion found for item ${id}`);
  }
  return promotions.get(id);
};
