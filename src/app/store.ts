import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import accountReducer from '../features/account/accountSlice';
import pricesReducer from '../features/prices/pricesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer,
    prices: pricesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
