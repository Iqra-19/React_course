import React from 'react'
import SongList from "../components/SongList";

export default function Favorites( {favorites, toggleFavorite, playlist, togglePlaylist} ) {
  return (
    <div>
        <SongList
            search=""
            favorites={favorites}
            toggleFavorite={toggleFavorite}
             playlist={playlist}
            togglePlaylist={togglePlaylist}
            showFavorites={true}
        />
    </div>
  )
}
