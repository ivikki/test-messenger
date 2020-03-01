import React from 'react';
import ReactDOM from 'react-dom';
import StoreContext from 'storeon/react/context';

import { App } from './Component/App';
import { store } from './store';

import './style/main.scss';

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
    document.getElementById('root')
);
