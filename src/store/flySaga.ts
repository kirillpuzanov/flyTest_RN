import {call, put, takeEvery} from 'redux-saga/effects';
import {flyAPI, TicketsDataType} from '../api/flyAPI';
import {flyActions, TicketsDataDomainType} from './flyReducer';



export function* fetchFlyData() {
    yield put(flyActions.setLoading(true));
    try {
        const res: TicketsDataType = yield call(flyAPI.getTickets);
        yield put(flyActions.setFlyData(transformDataHelper(res)));

    } catch (e) {
        yield put(flyActions.setError('Server error. Try to repeat the request ...'));
    }
    yield put(flyActions.setLoading(false));
}
//  активатор - WatcherSaga  с UI
export const fetchData = () => ({type: 'FLY_DATA/SAGA'});


export function* flyWatcherSaga() {
    yield takeEvery('FLY_DATA/SAGA', fetchFlyData);
}

// DTO, преобразуем серверные данные для удобства работы на фронте
// возвращаем 1 [] => со всеми билетами и необходимыми данными для отрисовки
export function transformDataHelper(data: TicketsDataType):TicketsDataDomainType {
    return data.Quotes.map(el => {
        return {
            id: String(Math.random()*0.33),
            minPrice: el.MinPrice,
            departurePoint: data.Places[1].IataCode,
            departurePointName: data.Places[1].CityName, // отправление
            arrivalPoint: data.Places[0].IataCode,
            arrivalPointName: data.Places[0].CityName, // прибытие
            departureDate: el.QuoteDateTime,
            carriers: data.Carriers.find(c => c.CarrierId === el.OutboundLeg.CarrierIds[0])?.Name,
            favourites: false
        }
    })
}
