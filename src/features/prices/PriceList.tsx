import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPricesAsync } from './pricesSlice';
import { RootState } from '../../app/store';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Price } from './Price';


export const PriceList = () => {
   const dispatch = useDispatch();
   const currentPrices = useSelector((state: RootState) => state.prices.currentPrices);
   const isLoading: boolean = useSelector((state: RootState) => state.prices.loading);

   useEffect(() => {
      dispatch(getCurrentPricesAsync());
   }, [dispatch]);

   const PriceListItem = (price: ICurrentPrice, index: number) => (
      <Price key={index} price={price} />
   );

   return (
      <Grid container>
         {
            isLoading ? <CircularProgress /> : currentPrices.map((p, i) => PriceListItem(p, i))
         }
      </Grid>
   );
};