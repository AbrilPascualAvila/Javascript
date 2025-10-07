document.addEventListener("DOMContentLoaded", () => {
  const selectorContainer = document.getElementById("selectorContainer");
  const pokemonSelect = document.getElementById("pokemonSelect");
  const pokemonSearch = document.getElementById("pokemonSearch");
  const startGameBtn = document.getElementById("startGame");

  const gameContainer = document.getElementById("gameContainer");
  const pokemonImg = document.getElementById("pokemonImg");
  const pokemonName = document.getElementById("pokemonName");
  const eatBar = document.getElementById("eatBar");
  const playBar = document.getElementById("playBar");
  const fightBar = document.getElementById("fightBar");
  const sleepBar = document.getElementById("sleepBar");
  const lifeBar = document.getElementById("life");

  let allPokemon = [];

  async function loadPokemonList() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
      const data = await res.json();
      allPokemon = data.sort((a,b) => a.name.english.localeCompare(b.name.english));
      populateSelect(allPokemon);
    } catch (err) {
      console.error("Error cargando Pokémon:", err);
      alert("No se pudieron cargar los Pokémon.");
    }
  }

  function populateSelect(pokemonArray) {
    pokemonSelect.innerHTML = "";
    pokemonArray.forEach(poke => {
      const option = document.createElement("option");
      option.value = poke.id;
      option.textContent = poke.name.english.toUpperCase();
      pokemonSelect.appendChild(option);
    });
  }

  pokemonSearch.addEventListener("input", () => {
    const query = pokemonSearch.value.toLowerCase();
    const filtered = allPokemon.filter(p => p.name.english.toLowerCase().includes(query));
    populateSelect(filtered);
  });

  startGameBtn.addEventListener("click", () => {
    const selectedPokemonId = pokemonSelect.value;
    const selectedPokemon = allPokemon.find(p => p.id == selectedPokemonId);

    if (!selectedPokemon) {
      alert("Por favor, selecciona un Pokémon");
      return;
    }

    pokemonImg.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${String(selectedPokemon.id).padStart(3,'0')}.png`;
    pokemonImg.alt = selectedPokemon.name.english;
    pokemonName.textContent = selectedPokemon.name.english;

    // Ocultar selector
    selectorContainer.style.display = "none";

    // Mostrar juego con animación
    gameContainer.style.display = "grid";
    setTimeout(() => gameContainer.classList.add("show"), 10);

    eatBar.style.width = "24%";
    playBar.style.width = "48%";
    fightBar.style.width = "20%";
    sleepBar.style.width = "49%";
    lifeBar.style.width = "30%";
  });

  loadPokemonList();
});

const comidasBtn = document.querySelector(".comidas");
const berryContainer = document.getElementById("berryContainer");
const berryGrid = document.getElementById("berryGrid");

// Abrir selector de bayas
comidasBtn.addEventListener("click", async () => {
  berryContainer.style.display = "flex";
  berryGrid.innerHTML = "Cargando bayas...";

  try {
    const res = await fetch("https://pokeapi.co/api/v2/berry?limit=64");
    const data = await res.json();
    const berries = data.results;

    // Limpiar grid
    berryGrid.innerHTML = "";

    berries.forEach(async (berry) => {
      // Traer información de cada baya
      const berryRes = await fetch(berry.url);
      const berryData = await berryRes.json();

      // Crear tarjeta
      const card = document.createElement("div");
      card.classList.add("berry-card");

      // Imagen de ejemplo (no todas las bayas tienen imagen oficial, así que se usará la imagen de PokeAPI de íconos de items)
      const berryId = berryData.id;
      const img = document.createElement("img");
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berryData.name}-berry.png`;
      img.alt = berryData.name;

      const name = document.createElement("div");
      name.textContent = berryData.name.replace("-", " ").toUpperCase();

      card.appendChild(img);
      card.appendChild(name);

      // Al hacer clic en la baya
      card.addEventListener("click", () => {
        // Incrementar barra de comida
        let current = parseInt(eatBar.style.width) || 0;
        current += 15; // por ejemplo +15%
        if(current > 100) current = 100;
        eatBar.style.width = current + "%";

        // Cerrar contenedor de bayas
        berryContainer.style.display = "none";
      });

      berryGrid.appendChild(card);
    });

  } catch (err) {
    berryGrid.innerHTML = "Error cargando bayas";
    console.error(err);
  }
});

// Cerrar contenedor si clic fuera del grid
berryContainer.addEventListener("click", (e) => {
  if(e.target === berryContainer){
    berryContainer.style.display = "none";
  }
});



