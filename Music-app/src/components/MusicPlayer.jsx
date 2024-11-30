
const MusicPlayer =({preview}) =>{
    
      return(
        <div >
        {/* The HTML audio tag */}
      <audio controls className="custom-audio-player" >
        <source src={preview} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={() => toggleFavorite(track)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
        </div>
      )
}
export default MusicPlayer;