import { useState } from "react";

function SearchItem(){

    const technologies = [
    "React",
    "DSA",
    "Node",
    "Spring Boot",
    "MongoDB",
    "TypeScript",
  ];

    const [search, setSearch] = useState<string>("");

    const filteredTechnologies = technologies.filter((tech)=>{
        return tech.toLowerCase().includes(search.toLowerCase());
    })

    return(
        <>
            <input 
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            {filteredTechnologies.map((tech)=>(
                <p>{tech}</p>
            ))}
        
        </>
    )
}

export default SearchItem;