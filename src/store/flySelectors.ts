import {AppRootStateType} from './store';

export const getTickets = (state: AppRootStateType) => {
    return state.fly.tickets;
};

export const getError = (state: AppRootStateType) => {
    return state.fly.error;
};
