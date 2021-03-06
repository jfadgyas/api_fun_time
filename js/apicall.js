// Get pokemon
const getPokemon = async (which) => {
    try{
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${which}/`)
            .then(response => response.json());
        return pokemon;
    }
    catch(error){
        console.log(error);
    };
};

// Get details
const getDetails = async (detail, which) => {
    const url = `https://pokeapi.co/api/v2/${detail}/${which}/`;
    try{
        const explain = await fetch(url)
            .then(response => response.json());
        return explain.effect_entries.filter(item => item.language.name == 'en');
    }
    catch(error){
        console.log(error);
    };
};