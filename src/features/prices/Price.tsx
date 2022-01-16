import { Card, CardContent, Chip, Grid, Paper, Typography } from '@mui/material';


type ChipColor = 'success' | 'error';

export interface IPriceProps {
   price: ICurrentPrice
}

export const Price = (props: IPriceProps) => {
   const { percentChangeHour, percentChangeDay } = props.price.quote;

   // ain't this the truth!
   const hourChipColor: ChipColor = percentChangeHour > 0 ? 'success' : 'error';
   const dayChipColor: ChipColor  = percentChangeDay  > 0 ? 'success' : 'error';

   const PriceChipOneHour = () => (
      <div>
         <Chip label={percentChangeHour.toFixed(3) + '%'} color={hourChipColor} />
         <span>Past Hour</span>
      </div>
   );

   const PriceChipOneDay = () => (
      <div>
         <Chip label={percentChangeDay.toFixed(3) + '%'} color={dayChipColor} />
         <span>Past Day</span>
      </div>
   );

   return (
      <Grid item xs={1}>
         <Paper elevation={3}>
            <Card sx={{ background: 'grey' }}>
               <CardContent>
                  <Typography variant='h6'>{props.price.symbol}</Typography>
                  <Typography sx={{ fontSize: 25 }}>${props.price.quote.price.toFixed(2)}</Typography>
               </CardContent>
               <PriceChipOneHour />
               <PriceChipOneDay />
            </Card>
         </Paper>
      </Grid>
   );
};