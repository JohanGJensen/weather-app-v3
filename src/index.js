import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "./Context";
import * as serviceWorker from './serviceWorker';

import './index.css';
import './bgs.css';
import App from './App';


ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
