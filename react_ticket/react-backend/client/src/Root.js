import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

export default Root