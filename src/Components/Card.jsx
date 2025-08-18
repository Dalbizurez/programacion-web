import { useEffect, useState } from "react";
import getPokeInfo from "./apiController";

function Card({ index }){
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        setPokemon(null);
        getPokeInfo(index).then(data => {
            setPokemon(data);
        });
    }, [index]);

     if (!pokemon) {
        return <div className="card">Loading...</div>;
    }

    return (
        <div className="card">
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
    );
}
export default Card;
