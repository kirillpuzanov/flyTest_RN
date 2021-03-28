import {InferActionsTypes} from './store';

const initialState = {
    tickets: [] as TicketsDataDomainType,
    error: '',
    isLoading: true
};
export const flyReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FLY/SET_FLY_DATA':
            return {...state, tickets: action.payload}
        case 'FLY/LOADING':
            return {...state, isLoading: action.payload}
        case 'FLY/SET_ERROR':
            return {...state, error: action.payload}
        case 'FLY/TOGGLE_FAVOURITES':
            return {
                ...state,
                tickets: state.tickets.map(el => (el.id === action.payload ? {...el, favourites: !el.favourites} : el))
            };
        default:
            return state;
    }
};
export const flyActions = {
    setFlyData: (flyData: TicketsDataDomainType) => ({
        type: 'FLY/SET_FLY_DATA', payload: flyData
    } as const),

    toggleFavorite: (ticketId: string) => ({
        type: 'FLY/TOGGLE_FAVOURITES', payload: ticketId
    } as const),
    // unfollowFavorite: (ticketId: string) => ({
    //     type: 'FLY/UNFOLLOW_FAVORITE', payload: ticketId
    // } as const),
    setError: (error: string) => ({
        type: 'FLY/SET_ERROR', payload: error
    } as const),
    setLoading: (isLoading: boolean) => ({
        type: 'FLY/LOADING', payload: isLoading
    } as const)
};


type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof flyActions>

export type TicketsDataDomainType = TicketDomainType[]
export type TicketDomainType = {
    id: string
    minPrice:number
    departurePoint: string
    departurePointName: string
    arrivalPoint: string
    arrivalPointName: string
    departureDate: string
    carriers: string | undefined
    favourites: boolean
}

