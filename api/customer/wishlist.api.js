import { wishlist } from "../../store.js";

export const addToWishList = ({ id, name, price, quantity, promoAmount }) => {
  const wishListItem = {
    id,
    name,
    price,
    quantity,
    promoAmount,
  };
  wishlist.set(wishListItem.id, cartItem);

  return wishListItem;
};

// view all cart
export const viewWishList = () => {
  return [...wishlist.values()];
};
