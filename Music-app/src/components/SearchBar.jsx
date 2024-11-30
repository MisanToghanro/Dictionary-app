import MusicApi from "../apiComponent/MusicApi.js";
import React, {useState , useEffect} from "react"
import MusicList from "./MusicList.jsx";
import AddFavMusic from "./AddFavMusic.jsx";

const SearchBar = () => {

const [musicInput, setMusicInput] = useState("")// user input
const [music, setMusic] = useState([])// display music fetched
const [error, setError] = useState("")// error handling
const [loading, setLoading] = useState(false)
const [favMusics, setFavMusics] = useState(
    JSON.parse(localStorage.getItem("favMusics")) || []
  );


//function for search bar
const searchMusic = async (e)=>{
    e.preventDefault();
    setError("");
    setLoading(true)
    setMusic([])//array for music intially empty

    if(!musicInput.trim()){
        setError("please type in the music name");// error if user searches without input
        setLoading(false)
        return;
    }

    try{
         const response = await MusicApi(musicInput);// set music api to get music based on userinput
         setMusic(response)//display the array of music obtained from the response
    }catch(error){
        setError(error.message)
    }finally{
        setLoading(false)
    }

}

  // Add to favorites function
  const addFav = (track) => {
    if (!favMusics.some((fav) => fav.id === track.id)) {
      setFavMusics([...favMusics, track]);
    }
  };

  // Remove from favorites function
  const removeFav = (track) => {
    setFavMusics(favMusics.filter((fav) => fav.id !== track.id));
  };

  // Store favorites in local storage
  useEffect(() => {
    localStorage.setItem("favMusics", JSON.stringify(favMusics));
  }, [favMusics]);

    return(
        <section  >
           
            <form onSubmit={searchMusic} className="flex justify-center">
                <div className="flex space-x-3 max-h-lg shadow-lg shadow-yellow-400 p-4 mb-6 rounded-md">
                <input
            type="text"
            value={musicInput}
            onChange={(e)=>setMusicInput(e.target.value)}
            placeholder="Search for your fav jam"
            className="p-2 rounded-md"
            />

            <button className="">search</button>
                </div>

        </form>
       
         {loading && <p className="text-yellow-400 text-2xl text-center mt-6 ">Loading...</p>}
         { error && <p className="text-red-600 text-2xl text-center mt-6">{error}</p>}

        <div className="grid gap-4  md:grid-cols-3 sm:grid-cols-1 p-5">
                {music.map((tracks, index) => (
                    <MusicList key={index} tracks={tracks} 
                    addFav={addFav}
                    removeFav={removeFav}
                    isFavorite={favMusics.some((fav) => fav.id === tracks.id)}/>
                    
                ))}
                <AddFavMusic favMusics={favMusics} />
        </div>
        </section>
    )
}
export default SearchBar