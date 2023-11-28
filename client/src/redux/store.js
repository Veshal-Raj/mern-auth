import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}, // root reducer  --> combines multiple reducers into a single reducer function
  middleware: (
    getDefaultMiddleware // this is a function that allows you to customize the middleware applied to the Redux store.
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
