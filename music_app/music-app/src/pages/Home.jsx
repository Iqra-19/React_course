import { useOutletContext } from "react-router-dom";

import SongList from "../components/SongList";

import { useState, useEffect } from "react";

export default function Home( {songs, favorites, toggleFavorite, playlist, togglePlaylist, }) {
  
  const { search } = useOutletContext();
  
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