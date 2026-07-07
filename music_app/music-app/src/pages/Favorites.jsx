import SongList from "../components/SongList";
import { useOutletContext } from "react-router-dom";

export default function Favorites({
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