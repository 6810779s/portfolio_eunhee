import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface categoryProps {
  currentMenuName: string;
  currentSubMenuName: string;
}

const initialState: categoryProps = {
  currentMenuName: 'My Info',
  currentSubMenuName: 'PUT/히스토리',
};
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeMenuName: (state, action: PayloadAction<string>) => {
      state.currentMenuName = action.payload;
    },
    changeSubMenuName: (state, action: PayloadAction<string>) => {
      state.currentSubMenuName = action.payload;
    },
  },
});

export const { changeMenuName, changeSubMenuName } = categorySlice.actions;
export default categorySlice.reducer;
