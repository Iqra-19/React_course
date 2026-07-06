import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SongList from "../components/SongList";

export default function Home() {
  return (
    <div className="home">

      <Sidebar />

      <div className="content">

        <Navbar />

        <h2>Trending Songs</h2>

        <SongList />

      </div>

    </div>
  );
}