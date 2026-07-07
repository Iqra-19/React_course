import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🎵 Music App</h2>

      <Link to="/home">🏠 Home</Link>

      <Link to="/favorites">❤️ Favorites</Link>

      <Link to="/playlist">📂 Playlist</Link>

      <Link to="/recent">🕒 Recently Played</Link>

      <button>Logout</button>
    </aside>
  );
}