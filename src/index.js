import React from 'react';
import './index.css';
import store from "./Redux/state";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';




export const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={store.getState()}
                         addPost={store.addPost.bind(store)}
                         changeTextArea={store.changeTextArea.bind(store)}  />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
