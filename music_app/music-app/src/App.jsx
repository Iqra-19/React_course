import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState } from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";

import Layout from "./components/Layout";

function App() {
  
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