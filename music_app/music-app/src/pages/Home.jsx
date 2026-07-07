import { useOutletContext } from "react-router-dom";

import SongList from "../components/SongList";

export default function Home( { favorites, toggleFavorite, playlist, togglePlaylist, }) {
  
    const { search } = useOutletContext();
  
  return (
    <div className="page">

        <h2>Trending Songs</h2>

        <SongList 
          search = {search}
          favorites = {favorites}
          toggleFavorite = {toggleFavorite}
          playlist = {playlist}
          togglePlaylist = {togglePlaylist}
        />

      </div>
  );
}