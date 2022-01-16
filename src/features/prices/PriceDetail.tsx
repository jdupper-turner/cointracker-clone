import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Box, Chip, Grid, Typography } from '@mui/material';


export interface SimpleDialogProps {
   open: boolean;
   selectedValue: string;
   onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
   const { onClose, selectedValue, open } = props;
   const price = useSelector((state: RootState) => state.prices.currentPricesMap[selectedValue]);
   
   const hourlyIncrease = price.quote.percentChangeHour > 0;
   const dailyIncrease = price.quote.percentChangeDay > 0;

   const hourLabel = `${hourlyIncrease ? '+' : '-'}${price.quote.percentChangeHour.toFixed(3)}%`;
   const dailyLabel = `${dailyIncrease ? '+' : '-'}${price.quote.percentChangeDay.toFixed(3)} %`;

   const hourColor = hourlyIncrease ? 'success' : 'error';
   const dailyColor = dailyIncrease ? 'success' : 'error';

   const handleClose = () => { onClose(selectedValue); };

   return (
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>

         <DialogTitle sx={{ m: '0 auto' }}>
            <Typography variant='h4'>{selectedValue}</Typography>
         </DialogTitle>

         <Box sx={{ m: '25px auto' }}>
            <Typography variant='h3'>${price.quote.price.toFixed(3)}</Typography>
            <Grid container>
               <Chip label={hourLabel} color={hourColor} />
               <Chip label={dailyLabel} color={dailyColor} />
            </Grid>
         </Box>

      </Dialog>
   );
};