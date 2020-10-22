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
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Songs" component={Songs}/>
        <Route path="/Albums" component={Albums}/>
        <Route path="/Artists" component={Artists}/>
        <Route exact path="/Play/:post_id" component={Audio}/>
        <Route exact path="/Artist/:post_id" component={Artist}/>
        <Route exact path="/Album/:post_id" component={Album}/>
        <Route exact path="/Admin/AddSong" component={AddSong}/>
        <Route exact path="/Admin" component={Admin}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
