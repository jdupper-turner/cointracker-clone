import { Card, CardContent, Chip, Grid, Paper, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import { SimpleDialog } from './PriceDetail';


type ChipColor = 'success' | 'error';

export interface IPriceProps {
   price: ICurrentPrice
}

export const Price = (props: IPriceProps) => {
   const { percentChangeHour, percentChangeDay } = props.price.quote;

   const hourChipColor: ChipColor = percentChangeHour > 0 ? 'success' : 'error';
   const dayChipColor: ChipColor = percentChangeDay > 0 ? 'success' : 'error';

   const PriceChipOneHour = () => (
      <div>
         <Chip label={percentChangeHour.toFixed(3) + '%'} color={hourChipColor} />
         <span style={{ fontSize: 12 }}><b>Past Hour</b></span>
      </div>
   );

   const PriceChipOneDay = () => (
      <div>
         <Chip label={percentChangeDay.toFixed(3) + '%'} color={dayChipColor} />
         <span style={{ fontSize: 12 }}><b>Past Day</b></span>
      </div>
   );

   // modal
   const [openDialogue, setOpenDialogue] = useState<boolean>(false);
   const onDialogueOpen = () => setOpenDialogue(true);
   const onDialogueClose = () => setOpenDialogue(false);

   const PriceGridItem = () => (
      <Grid item xs={1}>
         <Paper elevation={2}>
            <Card sx={{ background: 'grey' }} onClick={onDialogueOpen}>
               <Paper elevation={3} sx={{ background: 'grey' }}>
                  <CardContent>
                     <Typography variant='h4'>{props.price.symbol}</Typography>
                     <Typography sx={{ fontSize: 25 }}>${props.price.quote.price.toFixed(2)}</Typography>
                  </CardContent>
                  <PriceChipOneHour />
                  <PriceChipOneDay />
               </Paper>
            </Card>
         </Paper>
      </Grid>
   );

   const PriceDialogue = () => (
      <SimpleDialog
         open={openDialogue}
         selectedValue={props.price.symbol}
         onClose={onDialogueClose} />
   )

   return (
      <Fragment>
         <PriceGridItem />
         <PriceDialogue />
      </Fragment>
   );
};