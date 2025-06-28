
const WordCard = ({word ,a}) =>{

    return(
        <div className="p-4 max-w-3xl mx-auto">
          <div key={a}>

         <h2 className="text-black text-2xl font-bold">{word.word}</h2>

          {word.phonetic && (<p className="text-purple text-lg italic">{word.phonetic}</p>)}

            {word.phonetics.map((phonetic, d)=>
              (<div key={d}>
                {phonetic.audio &&
                (<audio controls className="mt-1 w-full sm:w-72">
                  <source src={`https:${phonetic.audio}`} type="audio/mpeg"/>
                  Your browser does not support the audio element.
                </audio>)}

              </div>))}
             
          
          {word.meanings.map((meanings , b)=>
          (<div className="mt-8"key={b}>

            <div className="flex items-center gap-2">
               <p className="font-bold ">{meanings.partOfSpeech}</p>
               <hr className="w-full border-gray-light"></hr>
            </div>
         
           <div className="mt-4">
            <p  className="text-gray-medium mb-3">Meaning</p>

          <ul className="list-disc list-inside space-y-3  marker:text-purple">
         {meanings.definitions.map((definitions, c)=>
          (<li key={c}>
            <p className="">{definitions.definition}</p>
            <p className="text-gray-medium text-sm mt-1"><span>examples:</span>"{definitions.example}"</p>
          </li>))}
          </ul>
   
         </div>

           

       </div>))}
      </div>
        </div>
    )
}
export default WordCard