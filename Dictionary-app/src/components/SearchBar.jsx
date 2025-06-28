
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
      <form onSubmit={handleSearch} className="mx-4 sm:mx-10 my-10 flex flex-row justify-center gap-1 sm:gap-4 ">
       <input type="text" 
       value={wordInput}
       onChange={(e)=>{setWordInput (e.target.value)}}
       placeholder="search for a word!"
       className="placeholder:text-gray-medium bg-gray-light font-bold  text-black w-full max-w-lg px-4 py-2 sm:px-6 sm:py-2 rounded-md focus:outline-none focus:ring-2  focus:ring-purple transition duration-200 "
       />
       <button type="submit" className="bg-purple text-white p-3 flex items-center justify-center sm:px-6 sm:py-3 rounded-md hover:bg-purple-light hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
       </button>
    </form>

     {loading && (
      <div className=" flex justify-center items-center m-6">
        <div className="w-8 h-8 rounded-full border-4 border-purple border-t-transparent animate-spin"></div>
      </div>
     )}
    {error &&
    <p className="mx-auto max-w-md bg-red-100 text-red-600  text-center  px-4 py-2  rounded">{error}</p>}

    {wordDisplay.length >0 && (
      <div className=""> {wordDisplay.map((word, a) =>
        (<WordCard key={a} word={word}/>))}
      </div>
    )}
    </div>

    
  )
}
export default SearchBar;
