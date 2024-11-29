import MusicPlayer from "./MusicPlayer";
const MusicList = ({ item}) =>{

    return(
        <div className="bg-yellow-400 p-4 rounded-md">
          <p className=" text-gray-900 font-semibold p-2">{item.title} by {item.artist.name}</p>
          <MusicPlayer preview={item.preview}/>
        </div>
    )
}
export default MusicList;