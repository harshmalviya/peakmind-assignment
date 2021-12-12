import { createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    userChoices: []
  },
  reducers: {
    addUserChoice: (state, action) => {
      const temp = state.userChoices.find((el) => el.id === action.payload.id);
      if (!temp) {
        state.userChoices.push(action.payload);
      }
      return;
    },
    resetUserChoices: (state) => {
      state.userChoices = [];
    }
  }
});

export const cryptoActions = cryptoSlice.actions;

export default cryptoSlice;
