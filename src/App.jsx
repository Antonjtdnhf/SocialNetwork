import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About_me from './Components/About_me/About_me';
import Posts from './Components/Posts/Posts';
import Last_photos from './Components/Last_photos/Last_photos';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.module.css';
import Messages from "./Components/Messages/Messages";
import {Route , BrowserRouter} from "react-router-dom";
import Videos from "./Components/Videos/Videos";
import Photos from "./Components/Photos/Photos";
import Profile from "./Components/Profile/Profile";
import Messages_container from "./Components/Messages/Messages_container";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path="/posts" render={ () => <About_me />}/>
                <Route path='/posts' render={ () => <Posts store={props.store} />}/>
                <Route path="/posts" render={ () => <Last_photos />}/>
                <Route path="/messages" render={ () => <About_me />}/>
                <Route path='/messages' render={ () => <Messages_container store={props.store}
                                                                 store={props.store}/>}/>
                <Route path="/videos" render={ () => <Videos />}/>
                <Route path="/photos" render={ () => <Photos />}/>
                <Route path="/profile" render={ () => <Profile />}/>
                <Footer/>
            </div>
        </BrowserRouter>


    );

};


export default App;