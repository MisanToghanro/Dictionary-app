
 import DictionaryApi from "../apiComponent/DictionaryApi"
import { useState } from "react"
import WordCard from "./WordCard";


const SearchBar = ()=>{

const [wordInput, setWordInput] = useState("");
const [wordDisplay, setWordDisplay] = useState([]);
const [error, setError] = useState(null);
const [loading , setLoading] = useState(false);


const handleSearch = async (e)=>{
    e.preventDefault();
     setLoading(true);
     setWordDisplay([]);
     setError("");
     

     if(!wordInput.trim()){
      setError("please type in a word");
      setLoading(false);
      return;
     }

      try {
        const response =  await DictionaryApi(wordInput);
         setWordDisplay(response);
      } catch (error) {
        setError("Sorry, we couldn't find definitions for the word you were looking for");
      }finally{
        setLoading(false)
      }
     
}
  return(
    <div>
      <form onSubmit={handleSearch}>
       <input type="text" 
       value={wordInput}
       onChange={(e)=>{setWordInput (e.target.value)}}
       placeholder="search for a word!"
       className="bg-lighgrey focus:outline-none focus:ring focus:ring-purple duration-200"
       />
       <button type="submit">search</button>
    </form>

     {loading && (
      <div className=" fles justify-center place-items-center">
        <div className="w-8 h-8 rounded-full border border-blue-500 border-t-transparent animate-spin"></div>
      </div>
     )}
    {error && <p className="text-red-600">{error}</p> }

    {wordDisplay.length >0 && (
      <div> {wordDisplay.map((word, a) =>
        (<WordCard key={a} word={word}/>))}
      </div>
    )}
    </div>

    
  )
}
export default SearchBar;
