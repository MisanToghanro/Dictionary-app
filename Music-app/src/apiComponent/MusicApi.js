import axios from "axios"

const MusicApi = async (query) => {

    const url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${encodeURIComponent(query)}`;


    try{
        const response =  await axios.get(url)
        
        if (response.data.data?.length > 0){
            return response.data.data
        }else{
            throw new Error ("No music found")
        }
    }
    catch(error){
        if(error.response){
        throw new Error("Failed to fetch data from the music API")}
        else{
            throw new Error("An error occurred, check your internet connection");
        }
    }
}

export default MusicApi;