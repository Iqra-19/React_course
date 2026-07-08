import SongList from "../components/SongList";
import { useOutletContext } from "react-router-dom";

export default function Favorites({
  songs,
  favorites,
  toggleFavorite,
  playlist,
  togglePlaylist,
}) {

  const { search } = useOutletContext();

  return (
    <div className="page">
      <h2>My Favorites</h2>

      <SongList
        songs = {songs}
        search={search}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        playlist={playlist}
        togglePlaylist={togglePlaylist}
        showFavorites
      />
    </div>
  );
}