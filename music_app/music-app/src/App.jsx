import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect } from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";

import Layout from "./components/Layout";


function App() {
  
  const [songs, setSongs] = useState([]);

  const clientId = import.meta.env.VITE_JAMENDO_CLIENT_ID;

  useEffect( () => {
      fetch( `https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&limit=30&search=music`)
      .then( (response) => response.json() )
      .then ( (data) => {
        //console.log(data.results[0]);
        // console.log(Object.keys(data.results[0]));

        const formattedSong = data.results.map( (song) => ( {
          id : song.id,
          title : song.name,
          artist : song.artist_name,
          image: song.image,
        } ) );

        setSongs(formattedSong);
      } );
    }, [] );

  // This part cut from Home.jsx
  const [favorites, setFavorites] = useState(
      JSON.parse(localStorage.getItem("favorites")) || []
    );
  
    const toggleFavorite = (songId) => {
      let updatedFavorites;
  
      if(favorites.includes(songId)){               // return true of false  
        updatedFavorites = favorites.filter( (id) => id !== songId );  // if already favorite remove it 
      }
      else{
        updatedFavorites = [...favorites, songId];
      }
  
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }

    // Playlist
    const [playlist, setPlaylist] = useState(
      JSON.parse( localStorage.getItem("playlist") ) || []
    );

    const togglePlaylist = (songId) => {
      let updatedPlaylist;

      if(playlist.includes(songId)) {
        updatedPlaylist = playlist.filter( (id) => id !== songId );
      }
      else{
        updatedPlaylist = [ ...playlist, songId ];
      }

      setPlaylist(updatedPlaylist);
      localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
    }
    
  return (
    <BrowserRouter>
      <Routes>

        {/* Routes with layout */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Routes with layout */}
        <Route element ={ <Layout/> }>
          <Route 
            path="/home" 
            element={<Home  
              songs = {songs}
              favorites={favorites} 
              toggleFavorite={toggleFavorite}
              playlist={playlist}
              togglePlaylist={togglePlaylist}
            />} 
        />

        <Route 
            path="/favorites" 
            element={ 
              <Favorites 
                  songs = {songs}
                  favorites={favorites} 
                  toggleFavorite={toggleFavorite}
                  playlist={playlist}
                  togglePlaylist={togglePlaylist}
            /> 
          }  
        />

        <Route
          path="/playlist"
          element={
              <Playlist
                  songs = {songs}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  playlist={playlist}
                  togglePlaylist={togglePlaylist}
              />
          }
      />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;