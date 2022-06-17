import { createSlice } from '@reduxjs/toolkit';

interface myInfoProps {}

const initialState: myInfoProps = {};

export const myInfoSlice = createSlice({
  name: 'myInfo',
  initialState,
  reducers: {},
});

export const {} = myInfoSlice.actions;
export default myInfoSlice.reducer;
