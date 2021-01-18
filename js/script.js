// Variables
const pokemonButton = document.querySelector('#getpokemon');

// Event listeners
pokemonButton.addEventListener('click', async () => {
    // get random pokemon
    const pokemon = await getPokemon(Math.floor(Math.random()*20)+1);
    showPokemon(pokemon);
    });

// Show Pokemon
const showPokemon = (pokemon) => {
    // Picture and name
    const photo = document.querySelector('#photo');
    photo.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    const name = document.querySelector('#name');
    name.innerHTML = pokemon.name;
    
    // Details
    const details = Array.from(document.querySelectorAll('p'));
    details.map(item => item.innerHTML = `${item.id}: ${pokemon[item.id]}`);
    
    // Special properties
    const addDetails = (detail, fieldName) => {
        const detailArea = document.querySelector(`#${detail}`);
        detailArea.innerHTML = '';
        const powerDetail = document.querySelector('#specialdetail');
        powerDetail.innerHTML = 'Click on an avability or move to see what it means!';
        pokemon[detail].map(item => {
            const power = document.createElement('p');
            power.classList.add('pointer');
            power.innerHTML = item[fieldName].name;
            detailArea.appendChild(power);
            power.addEventListener('click', async () => {
                const specialDetail = await getDetails(fieldName, item[fieldName].name);
                powerDetail.innerHTML = specialDetail[0].effect;
            });
        });
    };
        
    // Create abilities, held items, moves subdetails
    addDetails('abilities', 'ability');
    addDetails('held_items', 'item');
    addDetails('moves', 'move');
};