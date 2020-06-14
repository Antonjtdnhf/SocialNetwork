import {combineReducers, createStore} from "redux";
import messagesPageReducer from "./messgaesPageReducer";
import timelinePageReducer from "./timelinePageReducer";


let reducers = combineReducers({
    messagesPage : messagesPageReducer,
    timelinePage : timelinePageReducer
})

const store = createStore(reducers);

export default store;