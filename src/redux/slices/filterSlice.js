import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue:'',
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

    setSearchValue(state,action){
      state.searchValue=action.payload
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSort(state,action){
      state.sort=action.payload
    }
  },
});

export const { setCategoryId,setSort,setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
