import SongCard from "./SongCard";

export default function SongList() {
  const songs = [
    {
      id: 1,
      title: "Believer",
      artist: "Imagine Dragons",
      image: "https://picsum.photos/200?1",
    },
    {
      id: 2,
      title: "Perfect",
      artist: "Ed Sheeran",
      image: "https://picsum.photos/200?2",
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "https://picsum.photos/200?3",
    },
  ];

  return (
    <div className="song-list">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
        />
      ))}
    </div>
  );
}