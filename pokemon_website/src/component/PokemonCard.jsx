import React from "react";
import pikachu from "../assets/pokemon.jpg";

const PokemonCard = ({data}) => {
  return (
    <div className="h-auto w-72 p-4 rounded-lg border-2 border-amber-600 mt-6 flex flex-col items-center gap-4 bg-gray-800 shadow-lg">
      {/* Image */}
      <div className="w-full h-40 overflow-hidden rounded-md">
        <img
          src={data.sprites.other.dream_world.front_default}
          alt="Bulbasaur"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Name */}
      <h2 className="text-amber-400 font-bold text-2xl">{data.name}</h2>

      {/* Type */}
      <div className="w-40 px-2 py-1 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-md">
     {data.types.map((elle) => elle.type.name).join(", ")}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 w-full gap-3 mt-2 text-sm">
        <h5 className="font-semibold text-amber-400">
          Height: <span className="text-gray-300">{data.height}</span>
        </h5>
        <h5 className="font-semibold text-amber-400">
          Weight: <span className="text-gray-300">{data.weight}</span>
        </h5>
        <h5 className="font-semibold text-amber-400">
          Speed: <span className="text-gray-300">{data.stats[5].base_stat}</span>
        </h5>
        <h5 className="font-semibold text-amber-400">
          Exp: <span className="text-gray-300">{data.base_experience}</span>
          
        </h5>
        <h5 className="font-semibold text-amber-400">
          Attack: <span className="text-gray-300">{data.stats[1].base_stat
}</span>
        </h5>
        <h5 className="font-semibold text-amber-400">
          Abilities: <span className="text-gray-300">{data.abilities
  .map((eless) => eless.ability.name).slice(0,1).join(",")
  }</span>
        </h5>
      </div>
    </div>
  );
};

export default PokemonCard;
