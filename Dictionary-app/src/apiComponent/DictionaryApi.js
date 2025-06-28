
import axios from "axios"



const DictionaryApi = async (word) =>{
     
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return response.data;
    } catch (error) {
        console.log(error);

        throw new Error("there was an error!");
        
    }
}

export default DictionaryApi;