import React,{ useState } from "react"

function Dictionary(){
    const dictionary = 
    [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ];
    const [searchTerm, setSearchTerm] = useState(""); 
    const [result, setResult] = useState(null);

    const handleSearch=()=>{
        const foundWord = dictionary.find((entry)=>
            entry.word.toLowerCase() === searchTerm.toLowerCase()
        );
        setResult(foundWord || { word: "Not found", meaning: "Word not found in the dictionary." });
    }
    return (
        <div>
            <h1>Dictionary App</h1>
            <div>
                <input type="text" 
                placeholder="Search for a word..." 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h3>Defination: 
                
            </h3>
            {result && (
                <p>{result.meaning}</p>        
            )}
        </div>
    )
}

export default Dictionary

