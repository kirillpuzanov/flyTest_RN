import {applyMiddleware, combineReducers,compose, createStore, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {flyWatcherSaga} from './flySaga';
import {flyReducer} from './flyReducer';


const rootReducer = combineReducers({
    fly: flyReducer,
});
const sagaSagaMiddleware = createSagaMiddleware();

// @ts-ignore
// redux dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaSagaMiddleware)));
// export const store: Store = createStore(rootReducer, applyMiddleware(sagaSagaMiddleware));

sagaSagaMiddleware.run(rootWatcher);

function* rootWatcher() {
    yield all([flyWatcherSaga()]);
}

export type AppRootStateType = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never




