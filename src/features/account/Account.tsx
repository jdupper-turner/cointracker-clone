import { Box, Chip, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPerformanceType } from './accountSlice';
import { RootState } from '../../app/store';
import { FC } from 'react';


export const Account: FC = () => {
   const userAccount = useSelector((state: RootState): IAccount => state.account.userAccount);

   return (
      <div>
         <PerformanceType />
         <CurrentBalance balance={userAccount.balance} />
      </div>
   );
};


const PerformanceType = () => {
   const options: AccountPerformanceType[] = ['Total Performance', 'Unrealized Performance'];
   const chosenOption = useSelector((state: RootState) => state.account.userAccount.performanceType);

   const dispatch = useDispatch();
   const onChange = (event: SelectChangeEvent) => {
      dispatch(setPerformanceType(event.target.value as AccountPerformanceType));
   };

   return (
      <Box>
         <FormControl>
            <Select defaultValue={chosenOption} onChange={onChange}>
               {
                  options.map((type: AccountPerformanceType, index: number) => (
                     <MenuItem key={index} value={type}>{type}</MenuItem>
                  ))
               }
            </Select>
         </FormControl>
      </Box>
   );
};


interface ICurrentBalance {
   balance: number
}

const CurrentBalance: FC<ICurrentBalance> = (props: ICurrentBalance) => {
   return (
      <Box sx={{width: '100vw' }}>
         <FormControl>
            <Typography variant='h4'>${props.balance}</Typography>
            <Grid container>
               <Grid item xs={6}>
                  <Chip label='15%' color='success' />
                  <br />
                  ${props.balance / 5}
               </Grid>

               <Grid item xs={6}>
                  <Chip label='-1.23%' color='error' />
                  Past Day
               </Grid>
            </Grid>
         </FormControl>
      </Box>
   );
};