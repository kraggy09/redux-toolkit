import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItem = createAsyncThunk("cart/getCartItem", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const initialState = {
  cartItems: [],
  total: 0,
  amount: 2,
  isLoading: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems = [];
      store.amount = 0;
    },
    removeItem: (store, action) => {
      const ItemId = action.payload;
      store.cartItems = store.cartItems.filter((item) => item.id !== ItemId);
    },
    increase: (store, action) => {
      const ItemId = action.payload;
      const item = store.cartItems.find((item) => {
        return item.id === ItemId;
      });
      item.amount = item.amount + 1;
    },
    decrease: (store, action) => {
      const ItemId = action.payload;
      const item = store.cartItems.find((item) => {
        return item.id === ItemId;
      });
      item.amount = item.amount - 1;
    },
    calculateTotals: (store) => {
      let amount = 0;
      let total = 0;
      store.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      store.amount = amount;
      store.total = total;
    },
  },
  extraReducers: {
    [getCartItem.pending]: (store) => {
      store.isLoading = true;
    },
    [getCartItem.fulfilled]: (store, action) => {
      console.log(action);
      store.isLoading = false;

      store.cartItems = action.payload;
    },
    [getCartItem.rejected]: (store) => {
      store.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
