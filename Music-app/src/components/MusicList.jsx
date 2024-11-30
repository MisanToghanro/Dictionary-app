import MusicPlayer from "./MusicPlayer.jsx";
const MusicList = ({ tracks ,addFav, removeFav, isFavorite }) =>{

    return(
        <div className="bg-yellow-400 p-4 rounded-md">
          <img src={tracks.album.cover}></img>
          <p className=" text-gray-900 font-semibold p-2">{tracks.title} by {tracks.artist.name}</p>
          <MusicPlayer preview={tracks.preview}/>

      <button onClick={() => (isFavorite ? removeFav(tracks) : addFav(tracks))}className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded">
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
        </div>
    )
}
export default MusicList;