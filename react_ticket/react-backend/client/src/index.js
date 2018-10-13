import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/font1.css'
import './css/font2.css'
import './css/font-awesome.min.css'
import './css/et_line.css'
import './css/animate.css'
import './css/bootstrap.min.css'
import './css/venobox.css'
import './css/style.css'
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
