import { randomBytes } from "crypto";
import { customers } from "../../store.js";

// create customer profile
export const createCustomer = ({ name, email, phone, address }) => {
  const user = {
    id: randomBytes(16).toString("hex"),
    name,
    email,
    phone,
    address,
    regDate: new Date(),
  };

  customers.set(user.id, user);
  return user;
};

// get all customer profiles
export const getAllCustomers = () => {
  return [...customers.values()];
};
