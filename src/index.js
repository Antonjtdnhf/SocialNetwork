import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let postsData = [
    { message : "You didn't see anything", likesCount : "15"},
    { message : "react top", likesCount : "13"},
    { message : "i'm impressive", likesCount : "8"},
    { message : "go next", likesCount : "80"},
]

let dialogsUsersData = [
    {name: "Sasha", id: "1"},
    {name: "John", id: "2"},
    {name: "Kate", id: "3"},
    {name: "Tom", id: "4"}
]

let messagesData = [
    {id: 1, message: "Hi Sasha!"},
    {id: 2, message: "Hi John!"},
    {id: 3, message: "Hi Kate!"},
    {id: 4, message: "Hi Tom!"},
]


ReactDOM.render(<App  postsData={postsData} dialogsUsersData={dialogsUsersData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
