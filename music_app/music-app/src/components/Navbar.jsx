export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎵 Music App
      </div>

      <input
        type="text"
        placeholder="Search songs..."
        className="search"
      />

      <div className="user">
        Welcome, Iqra
      </div>
    </nav>
  );
}