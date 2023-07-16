import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (store) => {
      store.isOpen = true;
    },
    close: (store) => {
      store.isOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
