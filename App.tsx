import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {AppNavigation} from './src/nav/appNavigation';


export default function App() {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}


