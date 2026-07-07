import SongList from "../components/SongList";

export default function Playlist({
    favorites,
    toggleFavorite,
    playlist,
    togglePlaylist,
}) {
    return (
        <>
            <h2>My Playlist</h2>

            <SongList
                search=""
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                playlist={playlist}
                togglePlaylist={togglePlaylist}
                showFavorites={false}
                showPlaylist={true}
            />
        </>
    );
}