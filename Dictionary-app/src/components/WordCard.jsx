
const WordCard = ({word ,a}) =>{

    return(
        <div className="p-4 border rounded">
          <div key={a}>
         <h2 className="text-blue-600 capitalize underline font-bold">{word.word}</h2>

          
            {word.phonetic && (<p className="text-purple"><span ></span>{word.phonetic}</p>)}

          
          {word.meanings.map((meanings , b)=>
          (<div key={b}>
           <p><span className="text-blue-600">Part of speech: </span>{meanings.partOfSpeech}</p>

          
            {meanings.definitions.map((definitions, c)=>
          (<li key={c}>
            <p><span className="text-blue-600">Definition: </span>{definitions.definition}</p>
            <p><span>examples:</span>{definitions.example}</p>

          </li>))}
           

       </div>))}
      </div>
        </div>
    )
}
export default WordCard