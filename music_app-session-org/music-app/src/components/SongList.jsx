import SongCard from "./SongCard";

export default function SongList( {songs, search, favorites, toggleFavorite, showFavorites=false, playlist, togglePlaylist, showPlaylist=false } ) {
  

  // searching
  const query = search?.toLowerCase() ?? "";
  const filteredSongs = songs.filter((song) =>
    [song.title, song.artist]
      .some((field) => field?.toLowerCase().includes(query)) // later search for album and genre
  ); 
  
  // Favorite songs || chaining Favorite with Searching 
  const displaySongs = showFavorites 
    ? filteredSongs.filter( (song) => favorites.includes(song.id))
    : filteredSongs;

    // console.log(playlist);

    // Playlist songs || chaining playlist Favorite + Searching 
    const finalSongs = showPlaylist
    ? displaySongs.filter((song) => playlist?.includes(song.id))
    : displaySongs;

  return (
    <div className="song-list">
      {finalSongs.map((song) => (
        <SongCard
          key = {song.id}
          song = {song}
          favorites = {favorites}
          toggleFavorite  = {toggleFavorite }
          playlist={playlist}
          togglePlaylist={togglePlaylist}
        />
      ))}

    </div>
  );
}