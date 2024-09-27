// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if (!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


async function fetchData() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonspirte")


        imgElement.style.width = "200px";
        imgElement.style.height = "200px";

        imgElement.setAttribute("src", pokemonSprite);
        imgElement.style.display = "block"


    }
    catch (error) {
        console.error(error)
    }
}

// Fetch data from the PokeAPI for Ditto
async function getPokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();

    // Extract and log the desired text data
    const name = data.name; // Get the Pokémon name
    const baseExperience = data.base_experience; // Get the base experience
    const abilities = data.abilities.map(ability => ability.ability.name); // Get abilities

    // Display the data in the console
    console.log(`Name: ${name}`);
    console.log(`Base Experience: ${baseExperience}`);
    console.log(`Abilities: ${abilities.join(", ")}`);

    // Optionally, display this in HTML
    document.getElementById("pokemonName").textContent = `Name: ${name}`;
    document.getElementById("pokemonExperience").textContent = `Base Experience: ${baseExperience}`;
    document.getElementById("pokemonAbilities").textContent = `Abilities: ${abilities.join(", ")}`;
}

// Call the function to fetch the data


const submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", () => {
    fetchData()
    getPokemonData()
});
