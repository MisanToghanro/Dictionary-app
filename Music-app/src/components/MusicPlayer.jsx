
const MusicPlayer =({preview}) =>{
    
      return(
        <div>
        {/* The HTML audio tag */}
      <audio controls>
        <source src={preview} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        </div>
      )
}
export default MusicPlayer;