import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

export default function SongCard({ song, favorites, toggleFavorite, playlist, togglePlaylist }) {

  const isFavorite = favorites.some((fav) => fav.id === song.id);
  const isInPlaylist = playlist.some((p) => p.id === song.id);

  return (
    <div className="song-card">

      <img
        src={song.image}
        alt={song.title}
      />

      <h3>{song.title}</h3>

      <p>{song.artist}</p>

      <div className="song-actions">
        <button>▶</button>

        <button onClick={() => toggleFavorite(song)}  >
          <FontAwesomeIcon
            className={isFavorite ? "heart active" : "heart"}
            icon={isFavorite ? solidHeart : regularHeart}
          />
        </button>

        <button onClick={() => togglePlaylist(song)}>
          {isInPlaylist ? "✔️" : "➕"}
        </button>

      </div>

    </div>
  );
}