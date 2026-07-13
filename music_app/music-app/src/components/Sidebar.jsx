import { Link,  useNavigate } from "react-router-dom";

export default function Sidebar() {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login", { replace: true})
  }

  return (
    <aside className="sidebar">
      <h2>🎵 Music App</h2>

      <Link to="/home">🏠 Home</Link>

      <Link to="/favorites">❤️ Favorites</Link>

      <Link to="/playlist">📂 Playlist</Link>

      <Link to="/recent">🕒 Recently Played</Link>

      <button onClick={handleLogout} >Logout</button>
    </aside>
  );
}