import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Posts from './Components/Posts/Posts';
import LastPhotos from './Components/LastPhotos/LastPhotos';
import Footer from './Components/Footer/Footer';
import './Components/Footer/Footer.module.css';
import {Route , BrowserRouter} from "react-router-dom";
import Videos from "./Components/Videos/Videos";
import Photos from "./Components/Photos/Photos";
import Profile from "./Components/Profile/Profile";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import PostsContainer from "./Components/Posts/PostsContainer";
import Users_search_container from "./Components/UsersSearch/UsersSearchContainer";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path="/usersSearch" render={ () => <Users_search_container />}/>
                <Route path={["/posts", "/messages", "/usersSearch"]} render={ () => <AboutMe />}/>
                <Route path='/posts' render={ () => <PostsContainer />}/>
                <Route path="/posts" render={ () => <LastPhotos />}/>
                <Route path='/messages' render={ () => <MessagesContainer />}/>
              {/*  <Route path="/videos" render={ () => <Videos />}/>*/}
                <Route path="/photos" render={ () => <Photos />}/>
                <Route path="/profile" render={ () => <Profile />}/>
                <Footer/>
            </div>
        </BrowserRouter>


    );

};


export default App;