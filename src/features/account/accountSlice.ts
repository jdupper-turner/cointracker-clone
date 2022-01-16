import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: IAccountState = {
   loading: false,
   userAccount: {
      balance: 100,
      percentChange: 0,
      performanceType: 'Total Performance'
   }
};

export const accountSlice = createSlice({
   name: 'account',
   initialState,
   reducers: {
      setLoadingStatus: (state: IAccountState, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
      setPerformanceType: (state: IAccountState, action: PayloadAction<AccountPerformanceType>) => {
         state.userAccount.performanceType = action.payload;
      }
   },
   extraReducers: (builder) => { }
});

export const { setLoadingStatus, setPerformanceType } = accountSlice.actions;
export default accountSlice.reducer;