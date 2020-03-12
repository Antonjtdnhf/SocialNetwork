import React from "react";
import './App.css';
import Header from './Header/Header';
import './Header/Header.module.css';
import About_me from './About_me/About_me';
import './About_me/About_me.module.css';
import Posts from "./Posts/Posts";
import './Posts/Posts.module.css';
import Last_photos from './Last_photos/Last_photos';
import './Last_photos/Last_photos.module.css';
import Footer from './Footer/Footer';
import './Footer/Footer.module.css';
import Messages from "./Messages/Messages";
import {Route , BrowserRouter} from "react-router-dom";
import Videos from "./Videos/Videos";
import Photos from "./Photos/Photos";
import Profile from "./Profile/Profile";


const App = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path="/posts" render={ () => <About_me />}/>
                <Route path='/posts' render={ () => <Posts postsData={props.postsData} />}/>
                <Route path="/posts" render={ () => <Last_photos />}/>
                <Route path="/messages" render={ () => <About_me />}/>
                <Route path='/messages' render={ () => <Messages dialogsUsersData={props.dialogsUsersData} messagesData={props.messagesData}/>}/>
                <Route path="/videos" render={ () => <Videos />}/>
                <Route path="/photos" render={ () => <Photos />}/>
                <Route path="/profile" render={ () => <Profile />}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};


export default App;
