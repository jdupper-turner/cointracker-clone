import { ResponsiveContainer, LineChart, Line, CartesianGrid, Tooltip, Legend, XAxis, YAxis } from 'recharts';
import { Box } from  '@mui/material';


export const AccountBalanceChart = () => {
   const data = [
      { balance: 10 }, { balance: 25 }, { balance: 50 }, { balance: 30 }, { balance: 25 },
      { balance: 10 }, { balance: 25 }, { balance: 50 }, { balance: 30 }, { balance: 25 },
      { balance: 10 }, { balance: 25 }, { balance: 50 }, { balance: 30 }, { balance: 25 },
      { balance: 10 }, { balance: 25 }, { balance: 50 }, { balance: 30 }, { balance: 25 }
   ];

   return (
      <Box sx={{ width: '100vw' }}>
         <ResponsiveContainer width='100%' height={500}>
            <LineChart width='100%' height={400} data={data}>
               <CartesianGrid strokeDasharray='3 3' />
               <XAxis dataKey='Time' />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type='monotone' dataKey='balance' stroke='#8884d8' />
            </LineChart>
         </ResponsiveContainer>
      </Box>
   );
};
