import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params) => {
  const { categoryId, search, sorted } = params;

  const { data } = await axios.get(
    `https://6437d071894c9029e8c6b2d1.mockapi.io/pizzas?${categoryId}${search}&sortBy=${sorted}&order=desc `,
  );
  return data;
});

const initialState = {
  pizzas: [],
  status: '',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.pizzas = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'succes';
      state.pizzas = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.pizzas = [];
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
