import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
};

interface CartSliceItem {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceItem = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items = [...state.items, action.payload];
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
    },

    // addItem(state, action) {
    //   const findItem = state.items.find((obj) => obj.id == action.payload.id);
    //   if (findItem) {
    //     findItem.count++;
    //   } else {
    //     state.items.push({
    //       ...action.payload,
    //       count: 1,
    //     });
    //   }
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return sum + obj.price;
    //   }, 0);
    // },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const cartSelect = (state: RootState) => state.cart;

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
