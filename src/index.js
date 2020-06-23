import React from 'react';
import './index.css';
import store from "./Redux/reduxStore";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App store={store}/>
    </Provider>, document.getElementById('root'))


serviceWorker.unregister();
