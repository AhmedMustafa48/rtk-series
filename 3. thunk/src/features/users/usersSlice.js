import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ahmed" },
  { id: "1", name: "Faisal" },
  { id: "2", name: "Atif" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
