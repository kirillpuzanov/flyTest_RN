import axios from 'axios';

const DATE = '2021-04'
const settings = {
    params: {},
    headers: {
        'x-rapidapi-key': '5d1f279840msh2a52f30f8dcab2ap1c114ajsn9577e4e517c2',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
};
const instance = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/RU/SVO-sky/JFK-sky/',
    ...settings
});

export const flyAPI = {
    getTickets() {
        return instance.get<TicketsDataType>(DATE).then(res => {
            return res.data;
        });
    }
};


export type TicketsDataType = {
    Quotes: QuoteType[]
    Carriers: CarrierType[]
    Places: PlaceType[]
    Currencies:CurrenciesType[]
}

export type CarrierType = {
    CarrierId: number
    Name: string
}
export type PlaceType = {
    CityId: string
    CityName: string
    CountryName: string
    IataCode: string
    Name: string
    PlaceId: number
    SkyscannerCode: string
    Type: string
}
export type QuoteType = {
    QuoteId: number,
    MinPrice: number,
    Direct: boolean,
    OutboundLeg: OutboundLegType,
    QuoteDateTime: string
}
export type CurrenciesType = {
    Code: string,
    Symbol: string,
    ThousandsSeparator: string,
    DecimalSeparator: string,
    SymbolOnLeft: boolean,
    SpaceBetweenAmountAndSymbol: boolean,
    RoundingCoefficient: number,
    DecimalDigits: number
}

type OutboundLegType = {
    DepartureDate: string
    DestinationId: number
    OriginId: number
    CarrierIds: Array<number>
}
