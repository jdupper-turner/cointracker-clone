import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetCurrentPrices } from './pricesAPI';


const initialState: IPricesState = {
   loading: false,
   currentPrices: [],
   currentPricesMap: {}
};

export const accountSlice = createSlice({
   name: 'prices',
   initialState,
   reducers: {
      setLoadingStatus: (state: IPricesState, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getCurrentPricesAsync.pending, (state: IPricesState): void => {
            state.loading = true;
         })
         .addCase(getCurrentPricesAsync.fulfilled, (state: IPricesState, action): void => {
            const currentPrices = action.payload.data.map((price: any) => ({
               id: price.id,
               name: price.name,
               symbol: price.symbol,
               lastUpdated: price.last_updated,
               quote: {
                  price: price.quote['USD'].price,
                  percentChangeHour: price.quote['USD'].percent_change_1h,
                  percentChangeDay: price.quote['USD'].percent_change_24h
               }
            }));

            state.currentPrices = alphabetizePrices(currentPrices);
            state.currentPrices.forEach((price: ICurrentPrice) => {
               state.currentPricesMap[price.symbol] = price;
            });

            state.loading = false;
         });
   }
});

export const getCurrentPricesAsync = createAsyncThunk(
   'account/getCurrentPrice',
   async () => {
      const response = await GetCurrentPrices();
      return response;
   }
);


const alphabetizePrices = (prices: ICurrentPrice[]): ICurrentPrice[] => {
   return prices.sort((p1, p2) => {
      const p1Caps = p1.symbol.toUpperCase();
      const p2Caps = p2.symbol.toUpperCase();

      if (p1Caps[0] < p2Caps[0]) return -1;
      if (p1Caps[0] > p2Caps[0]) return 1;
      return 0;
   });
};


export const getPriceList = (state: IPricesState) => state.currentPrices;
export const { setLoadingStatus } = accountSlice.actions;
export default accountSlice.reducer;