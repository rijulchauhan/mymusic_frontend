import React from 'react'
import Navbar from './components/navbar'
import Songs from './components/songs'
import Albums from './components/albums'
import Artists from './components/artists'
import Home from './components/home.js'
import Audio from './components/audio.js'
import Artist from './components/Artist'
import Album from './components/Album'
import AddSong from './components/AddSong'
import Admin from './components/admin' 
import Player from './components/player'
import Login from './components/Auth/Login'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Songs" component={Songs}/>
        <Route path="/Albums" component={Albums}/>
        <Route path="/Artists" component={Artists}/>
        <Route exact path="/Play/:get_id" component={Audio}/>
        <Route exact path="/Artist/:get_id" component={Artist}/>
        <Route exact path="/Album/:get_id" component={Album}/>
        <Route exact path="/Admin/AddSong" component={AddSong}/>
        <Route exact path="/Admin" component={Admin}/>
        <Route exact path="/Login" component={Login} />
    </BrowserRouter>
    <Player/>
    </div>
  );
}

export default App;
