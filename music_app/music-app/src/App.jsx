import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Playlist from "./pages/Playlist";

import Layout from "./components/Layout";


function App() {

  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const clientId = import.meta.env.VITE_JAMENDO_CLIENT_ID;

  const searchTerm = debouncedSearch.trim() || "music";

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {

    setLoading(true);
    setFetchError("");

    fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&limit=20&search=${encodeURIComponent(searchTerm)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        //console.log(data.results[0]);
        // console.log(Object.keys(data.results[0]));

        /* console.log("Search term:", searchTerm);
        console.log("Jamendo response:", data);
        console.log("Songs returned:", data.results); */

        if (!data.results) {
          setFetchError("Unable to load songs. Please check your internet connection.");
          return;
        }

        if (data.results.length === 0) {
          console.warn("Jamendo returned an empty result");
          return;
        }

        const formattedSongs = data.results.map((song) => ({
          id: song.id,
          title: song.name,
          artist: song.artist_name,
          image: song.image,
        }));

        setSongs(formattedSongs);
      })
      .catch((error) => {
        console.error("Failed to fetch songs: ", error);
        setFetchError("Unable to load songs. Please check your internet connection.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);


  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // This part cut from Home.jsx
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const toggleFavorite = (song) => {

    const exists = favorites.some((fav) => fav.id === song.id);

    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((fav) => fav.id !== song.id);
    } else {
      updatedFavorites = [...favorites, song];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  // Playlist
  const [playlist, setPlaylist] = useState(
    JSON.parse(localStorage.getItem("playlist")) || []
  );

  const togglePlaylist = (song) => {

    const exists = playlist.some((s) => s.id === song.id);

    let updatedPlaylist;

    if (exists) {
      updatedPlaylist = playlist.filter((s) => s.id !== song.id);
    }
    else {
      updatedPlaylist = [...playlist, song];
    }

    setPlaylist(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
  }

  return (
    <div className={theme} >
      <BrowserRouter>
        <Routes>

          {/* Routes with layout */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />} >

            {/* Routes with layout */}
            <Route element={<Layout search={search} setSearch={setSearch} theme={theme} toggleTheme={toggleTheme} />}>
              <Route
                path="/home"
                element={<Home
                  songs={songs}
                  loading={loading}
                  fetchError={fetchError}
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
                    songs={songs}
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
                    songs={songs}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    playlist={playlist}
                    togglePlaylist={togglePlaylist}
                  />
                }
              />
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



{/* 
  
==> for searching we used debouncing 

debouncing means: Wait until the user stops typing for a short time, then make only one API request.


  
  
  
  
  
  
  
  */}