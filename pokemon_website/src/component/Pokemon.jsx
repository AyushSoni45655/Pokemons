import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"


const Pokemon = () => {

   const [pokemon,setPokemon] = useState([]);
   const [allPokemon,setAllPokemon] = useState([]);
   const [loading,setloading]= useState(true);
   const[error,seterror] = useState(null);
    const [search,setSearch] = useState("");
    const api = "https://pokeapi.co/api/v2/pokemon?limit=50";
    const fetchApi = async()=>{
     
      try{
         const responce = await fetch(api);
         const data = await responce.json();
        console.log(data);
        const urldata = data.results.map(async(urls)=>{
          const fetchNextedPokes = await fetch(urls.url);
          const data =  await fetchNextedPokes.json();
         return data;
          
        });

        const promisesed = await Promise.all(urldata);
        console.log(promisesed);
        
        setPokemon(promisesed);
        setAllPokemon(promisesed);
        setloading(false);
         
      }catch(e){
       
        setloading(false);
        seterror(e);
      }
    }
    useEffect(()=>{
      fetchApi();
    },[])

  useEffect(()=>{
    if(search.trim() === ""){
      setPokemon(allPokemon);
    }
    else{
      const filtered = allPokemon.filter((eles)=>
         eles.name.toLowerCase().includes(search.toLowerCase())
      )
       setPokemon(filtered);
    }
   
  },[search,allPokemon])


  console.log(search);
  if(loading){
    return <div className="w-full h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  }
   if(error){
    return <div className="w-full h-screen flex items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">{error.message}</h2>
    </div>
  }
  
  return <div className='w-full h-full bg-gray-900 px-10 py-6 flex flex-col items-center justify-center gap-4'>
<h2 className="text-amber-300 font-bold text-4xl uppercase">Let's Catch Pokemon</h2>
<div className="w-80 h-10  p-2 bg-white border-b-2 border-b-amber-500 rounded-md">
  <input type="text" placeholder="Search Pokemon here" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full h-full  outline-none text-black" />
</div>
<div className="flex flex-wrap gap-6 items-center justify-center">
  {
pokemon.map((pokee,index)=>{
  return <PokemonCard key={pokee.id} data={pokee}/>
})
}
</div>

  </div>
}

export default Pokemon
