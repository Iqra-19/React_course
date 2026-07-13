import SongCard from "./SongCard";

export default function SongList({ songs, search, favorites, toggleFavorite, showFavorites = false, playlist, togglePlaylist, showPlaylist = false }) {


  // searching
  const query = search?.toLowerCase() ?? "";
  const filteredSongs = songs.filter((song) =>
    [song.title, song.artist]
      .some((field) => field?.toLowerCase().includes(query)) // later search for album and genre
  );

  // Favorite songs || chaining Favorite with Searching 
  let displaySongs;

  if (showFavorites) {
    displaySongs = favorites.filter((song) => {
      return (
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
      );
    });
  } else {
    displaySongs = filteredSongs;
  }

  // console.log(playlist);

  // Playlist songs || chaining playlist Favorite + Searching 
  let finalSongs;
  if (showPlaylist) {
    finalSongs = playlist.filter((song) => {
      const titleMatch = song.title.toLowerCase().includes(query);
      const artistMatch = song.artist.toLowerCase().includes(query);

      return titleMatch || artistMatch;
    });
  } else {
    finalSongs = displaySongs;
  }

  return (
    <div className="song-list">
      {finalSongs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          playlist={playlist}
          togglePlaylist={togglePlaylist}
        />
      ))}

    </div>
  );
}