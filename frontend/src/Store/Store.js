import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cryptoSlice from "./crypto-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    crypto: cryptoSlice.reducer
  }
});

export default store;
