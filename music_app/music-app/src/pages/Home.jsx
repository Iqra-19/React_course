import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SongList from "../components/SongList";
import { useState } from "react";

export default function Home() {
  
  const [search, setSearch] = useState("");
  
  return (
    <div className="home">

      <Sidebar />

      <div className="content">

        <Navbar 
          search={search}
          setSearch={setSearch}
        />

        <h2>Trending Songs</h2>

        <SongList search={search}/>

      </div>

    </div>
  );
}