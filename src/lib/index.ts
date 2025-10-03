import { configureStore } from '@reduxjs/toolkit'
import wishlist from "./features/savedSlice";

export const store = configureStore({
  reducer: {
    fake: () => "hello redux",
    wishlist,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch