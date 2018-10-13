import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'; 

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root