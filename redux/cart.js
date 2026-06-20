import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

export const cart = createSlice({
  name: "savedcarts",
  initialState,
  reducers: {
    addtocard: (state, action) => {
      const item = state.card.find(
        (item) =>
          item.card.id === action.payload.id &&
          item.card.size === action.payload.size,
      );
      if (item !== -1) {
        state.card.quantity += 1;
      } else {
        state.card.push({ ...action.payload, quantity: 1 });
      }
    },
    removefromcard: (state, action) => {
      const item = state.card.find(
        (item) =>
          item.card.id === action.payload.id &&
          item.card.size === action.payload.size,
      );
      if (item !== -1) {
        if (state.card[item].quantity > 1) {
          item.quantity -= 1;
        }
      } else {
        state.card.splice(item, 1);
      }
    },
  },
});

export const {removefromcard,addtocard} = cart.actions