import MusicApi from "../apiComponent/musicApi";
import React, {useState} from "react"
import MusicList from "./musicList";

const SearchBar = () => {

const [musicInput, setMusicInput] = useState("")// user input
const [music, setMusic] = useState([])// display music fetched
const [error, setError] = useState("")// error handling
const [loading, setLoading] = useState(false)

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
    return(
        <section  >
           
            <form onSubmit={searchMusic} className="flex justify-center">
                <div className="flex space-x-2 max-w-sm shadow-lg shadow-yellow-400 p-4 mb-6 rounded-md">
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

        <div className=" mx-auto  grid gap-4  md:grid-cols-3 sm:grid-cols-2 p-5 sm:p-4">
                {music.map((item, index) => (
                    <MusicList key={index} item={item} />
                ))}
            </div>
        </section>
    )
}
export default SearchBar