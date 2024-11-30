// AddFavMusic.jsx
import MusicPlayer from "./MusicPlayer";
const AddFavMusic = ({ favMusics }) => {
    return (
      <div>
        <h1>Your Favorites</h1>
        <div>
          {favMusics.map((track) => (
            <div key={track.id}>
              <h2>{track.title}</h2>
              <p>{track.artist.name}</p>
            </div>
          ))}
        </div>

      </div>
    );
  };
  
  export default AddFavMusic;
  