import {combineReducers, createStore} from "redux";
import messagesPageReducer from "./messgaesPageReducer";
import timelinePageReducer from "./timelinePageReducer";
import usersSearchReducer from "./usersSearchReducer";


let reducers = combineReducers({
    messagesPage : messagesPageReducer,
    timelinePage : timelinePageReducer,
    usersSearch : usersSearchReducer
})

const store = createStore(reducers);

export default store;