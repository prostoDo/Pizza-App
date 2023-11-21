import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Sort = {
  name: string;
  sortProperty: 'rating' | 'title' | 'price';
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;
}

const initialState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
