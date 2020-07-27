import {combineReducers, createStore} from "redux";
import messagesPageReducer from "./messgaesPageReducer";
import timelinePageReducer from "./timelinePageReducer";
import usersSearchReducer from "./usersSearchReducer";
import profilePageReducer from "./profilePageReducer";


let reducers = combineReducers({
    messagesPage : messagesPageReducer,
    timelinePage : timelinePageReducer,
    usersSearch : usersSearchReducer,
    profilePage : profilePageReducer
})


const store = createStore(reducers);

window.store = store;

export default store;