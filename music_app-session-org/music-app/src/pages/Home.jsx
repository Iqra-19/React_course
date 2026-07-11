import { useOutletContext, useLocation } from "react-router-dom";

import SongList from "../components/SongList";

import { useState, useEffect } from "react";

export default function Home( {songs, favorites, toggleFavorite, playlist, togglePlaylist, }) {
  
  const { search } = useOutletContext();

  const location = useLocation();

  console.log("User", location)
  
  return (
    <div className="page">

        <h2>Trending Songs</h2>

        <SongList 
          songs = {songs}
          search = {search}
          favorites = {favorites}
          toggleFavorite = {toggleFavorite}
          playlist = {playlist}
          togglePlaylist = {togglePlaylist}
        />

      </div>
  );
}