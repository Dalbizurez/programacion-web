function getPokeInfo(pokeIndex){
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`;
    return fetch(pokemonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return {
                sprite: data.sprites.front_default,
                name: data.name,
                height: data.height,
                weight: data.weight,
                types: data.types
            };
        });
}

export default getPokeInfo;
