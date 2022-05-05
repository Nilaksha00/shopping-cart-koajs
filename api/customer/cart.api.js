import { cart } from "../../store.js";

export const addToCart = ({ id, name, price, quantity, promoAmount }) => {
  const cartItem = {
    id,
    name,
    price,
    quantity,
    promoAmount,
  };
  cart.set(cartItem.id, cartItem);

  return cartItem;
};

// view all cart
export const viewCart = () => {
  return [...cart.values()];
};
