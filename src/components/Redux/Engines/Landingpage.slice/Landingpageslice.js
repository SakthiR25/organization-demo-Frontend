import { createSlice } from '@reduxjs/toolkit';

const landingSlice = createSlice({
  name: 'landing',
  initialState: {
    searchText: '',
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = landingSlice.actions;
export default landingSlice.reducer;
