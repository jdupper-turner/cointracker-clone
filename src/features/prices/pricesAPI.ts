const axios = require('axios').default;
const API_URL = 'http://localhost:3001';


interface IGetCurrentPricesResponse {
   data: ICurrentPrice[]
}

export const GetCurrentPrices = async () => {
   return axios.get(API_URL).then((response: IGetCurrentPricesResponse) => {
      return response.data;
   });
};