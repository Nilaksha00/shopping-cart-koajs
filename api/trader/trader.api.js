import { randomBytes } from "crypto";
import { traders } from "../../store.js";

// create trader profile
export const createTrader = ({ name, email, phone, address }) => {
  const user = {
    id: randomBytes(16).toString("hex"),
    name,
    email,
    phone,
    address,
    regDate: new Date(),
  };

  traders.set(user.id, user);
  return user;
};
