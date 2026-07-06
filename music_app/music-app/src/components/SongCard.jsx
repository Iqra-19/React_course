export default function SongCard({ song }) {
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
        <button>❤️</button>
        <button>➕</button>
      </div>

    </div>
  );
}