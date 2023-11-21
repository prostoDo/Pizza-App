import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItem } from './cartSlice';

type Pizza = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  pizzas: Pizza[];
  status: Status;
}

// type FetchPizzaArgs = Record<string, string>;

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params: Record<string, string>) => {
    const { categoryId, search, sorted } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://6437d071894c9029e8c6b2d1.mockapi.io/pizzas?${categoryId}${search}&sortBy=${sorted}&order=desc `,
    );
    return data;
  },
);

const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.SUCCESS,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<Pizza[]>) {
      state.pizzas = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.pizzas = [];
    });
  },

  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.pizzas = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.status = 'succes';
  //     state.pizzas = action.payload;
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = 'error';
  //     state.pizzas = [];
  //   },
  // },
});

export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
