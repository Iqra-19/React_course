import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect } from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  const clientId = import.meta.env.VITE_JAMENDO_CLIENT_ID;

  const searchTerm = search.trim() || "music";
  
  useEffect( () => {
      fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&limit=2&search=${encodeURIComponent(searchTerm)}`)
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
    }, [search] );

  // This part cut from Home.jsx
  const currentUser = JSON.parse( sessionStorage.getItem("currentUser") );
  const users = JSON.parse( sessionStorage.getItem("users") ) || [];
  const loggedInUser  = users.find( (user) => user.id === currentUser?.id );
  const [favorites, setFavorites] = useState( loggedInUser?.favorites || [] );
    
  // Favorite
  const toggleFavorite = (songId) => {

      let updatedFavorites;

      if (favorites.includes(songId)) {

          updatedFavorites = favorites.filter(
              (id) => id !== songId
          );

      } else {

          updatedFavorites = [
              ...favorites,
              songId
          ];

      }

      setFavorites(updatedFavorites);


      const updatedUsers = users.map((user) => {

          if (user.id === currentUser.id) {

              return {
                  ...user,
                  favorites: updatedFavorites
              };

          }

          return user;

      });


      localStorage.setItem(
          "users",
          JSON.stringify(updatedUsers)
      );
  }

    // Playlist
    const [playlist, setPlaylist] = useState(loggedInUser?.playlist || []);

    const togglePlaylist = (songId) => {

        let updatedPlaylist;

        if (playlist.includes(songId)) {

            updatedPlaylist = playlist.filter(
                (id) => id !== songId
            );

        } else {

            updatedPlaylist = [
                ...playlist,
                songId
            ];

        }

        setPlaylist(updatedPlaylist);


        const updatedUsers = users.map((user) => {

            if (user.id === currentUser.id) {

                return {
                    ...user,
                    playlist: updatedPlaylist
                };

            }

            return user;

        });


        localStorage.setItem(
            "users",
            JSON.stringify(updatedUsers)
        );
    }
    
  return (
    <BrowserRouter>
      <Routes>

        {/* Routes with layout */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Routes with layout */}
        <Route
            element={
                <ProtectedRoute>
                    <Layout
                        search={search}
                        setSearch={setSearch}
                    />
                </ProtectedRoute>
            }
        >
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