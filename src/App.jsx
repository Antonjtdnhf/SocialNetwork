import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About_me from './Components/About_me/About_me';
import Posts from './Components/Posts/Posts';
import Last_photos from './Components/Last_photos/Last_photos';
import Footer from './Components/Footer/Footer';
import Messages from './Components/Messages/Messages';
import {Route , BrowserRouter} from 'react-router-dom';
import Videos from './Components/Videos/Videos';
import Photos from './Components/Photos/Photos';
import Profile from './Components/Profile/Profile';



const App = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path="/posts" render={ () => <About_me />}/>
                <Route path='/posts' render={ () => <Posts postsData={props.state.timelinePage.postsData}
                                                           dispatch={props.dispatch}
                                                           dispatch={props.dispatch}
                                                           postTextArea={props.state.timelinePage.postTextArea}/>}/>
                <Route path="/posts" render={ () => <Last_photos />}/>
                <Route path="/messages" render={ () => <About_me />}/>
                <Route path='/messages' render={ () => <Messages dialogsUsersData={props.state.messagesPage.dialogsUsersData}
                                                                 messagesData={props.state.messagesPage.messagesData}/>}/>
                <Route path="/videos" render={ () => <Videos />}/>
                <Route path="/photos" render={ () => <Photos />}/>
                <Route path="/profile" render={ () => <Profile />}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};


export default App;
