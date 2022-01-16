type AccountPerformanceType = 'Total Performance' | 'Unrealized Performance';

// state
interface IAccountState {
   loading: boolean
   userAccount: IAccount
}

interface IPricesState {
   loading: boolean
   currentPrices: ICurrentPrice[]
   currentPricesMap: { [key: string]: ICurrentPrice }
}


// objects
interface IAccount {
   balance: number
   percentChange: number
   performanceType: AccountPerformanceType
}

interface ICurrentPrice {
   id: number
   name: string
   symbol: string
   quote: ICurrentPriceQuote
   lastUpdated: string
}

interface ICurrentPriceQuote {
   price: number
   percentChangeHour: number
   percentChangeDay: number
}