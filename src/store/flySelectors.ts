import {AppRootStateType} from './store';

export const getTickets = (state: AppRootStateType) => {
    return state.fly.tickets;
};
export const getIsLoading = (state:AppRootStateType) => {
    return state.fly.isLoading
}
export const getError = (state: AppRootStateType) => {
    return state.fly.error;
};
