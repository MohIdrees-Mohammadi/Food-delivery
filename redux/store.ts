import { configureStore } from "@reduxjs/toolkit";
import { cart } from "./cart";

const makeStore = () => {
  return configureStore({
    reducer: {
      carddata: cart.reducer,
    },
  });
};
