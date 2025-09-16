const pokeList = document.getElementById('pokemUl');
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response => response.json())
.then(names => {
  names.results.forEach(pokemon =>{
    const li = document.createElement('li');
    li.textContent = pokemon.name;
    pokeList.appendChild(li);
  });
})
.catch(error => console.error('Error:', error))