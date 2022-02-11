// grab dom element
const poke_container = document.querySelector('.poke-container');

// make api call 
function getPokeData() {
    let count = 150;
    for (let i = 0; i <= count; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(data => createPokemonCard(data))
    }
}

function createPokemonCard(data) {
    // getting the type for the pokemon
    const newType = data.types.map(function (pokemon) {
        const upper = pokemon.type.name[0].toUpperCase() + pokemon.type.name.slice(1);
       return upper + ' ';
}) 
    
//   getting the abilities for the pokemon
    const abilities = data.abilities.map(function (pokemon) {
        const upper = pokemon.ability.name[0].toUpperCase() + pokemon.ability.name.slice(1);
            return  upper + ' ';
        })
    const makeUpper = data.name[0].toUpperCase() + data.name.slice(1); 
    const createPokeDiv = document.createElement('div');
    // displaying the information in the card
    createPokeDiv.innerHTML = `
    <div class="poke-container">
    <div class="pokemon">
    <div class="pokemon-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="data.pokemon">
    </div>
    <div class="pokemon-details">
            <h1>Name: ${makeUpper}</h1>
            <div class="together">
            <p>Order: ${data.id}</p>
            <p>Base Experience: ${data.base_experience} </p>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
             <p>Abilties: ${abilities}
             <p>Type: ${newType}</p>
            </div>
    </div>
            </div>
    </div>
  `
 
    
    
    poke_container.appendChild(createPokeDiv);


}
getPokeData();