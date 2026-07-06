export default function Navbar( {search, setSearch} ) {
  
    return (
    
    <nav className="navbar">
      <div className="logo">
        🎵 Music App
      </div>

      <input
        type="text"
        placeholder="Search songs..."
        className="search"
        value={search}
        onChange={ (e) => setSearch(e.target.value) }
      />

      <div className="user">
        Welcome, Iqra
      </div>
    </nav>
  );
}