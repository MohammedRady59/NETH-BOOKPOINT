import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authapi } from "./features/Api/Authapi";
export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authapi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
