import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About_me from './Components/About_me/About_me';
import Posts from './Components/Posts/Posts';
import Last_photos from './Components/Last_photos/Last_photos';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.module.css';
import {Route , BrowserRouter} from "react-router-dom";
import Videos from "./Components/Videos/Videos";
import Photos from "./Components/Photos/Photos";
import Profile from "./Components/Profile/Profile";
import Messages_container from "./Components/Messages/Messages_container";
import Posts_container from "./Components/Posts/Posts_container";
import Users_search_container from "./Components/Users_search/Users_search_container";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path="/usersSearch" render={ () => <Users_search_container />}/>
                <Route path={["/posts", "/messages", "/usersSearch"]} render={ () => <About_me />}/>
                <Route path='/posts' render={ () => <Posts_container />}/>
                <Route path="/posts" render={ () => <Last_photos />}/>
                <Route path='/messages' render={ () => <Messages_container />}/>
              {/*  <Route path="/videos" render={ () => <Videos />}/>*/}
                <Route path="/photos" render={ () => <Photos />}/>
                <Route path="/profile" render={ () => <Profile />}/>
                <Footer/>
            </div>
        </BrowserRouter>


    );

};


export default App;