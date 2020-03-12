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


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path="/posts" component={About_me}/>
                <Route path='/posts' component={Posts}/>
                <Route path="/posts" component={Last_photos}/>
                <Route path="/messages" component={About_me}/>
                <Route path='/messages' component={Messages}/>
                <Route path="/videos" component={Videos}/>
                <Route path="/photos" component={Photos}/>
                <Route path="/profile" component={Profile}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};


export default App;
