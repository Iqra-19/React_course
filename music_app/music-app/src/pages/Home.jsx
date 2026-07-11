import { useOutletContext } from "react-router-dom";

import SongList from "../components/SongList";

import { useState, useEffect } from "react";

export default function Home( {songs, loading, fetchError, favorites, toggleFavorite, playlist, togglePlaylist, }) {
  
  const { search } = useOutletContext();

    if (loading) {
    return (
      <div className="status-message">
        Loading songs...
      </div>
      );
    }

  if (fetchError) {
    return (
      <div className="status-message error-message">
        {fetchError}
      </div>
      );
    }

    if (songs.length === 0) {
    return (
      <div className="status-message">
        No songs found.
      </div>
      );
     }
  
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