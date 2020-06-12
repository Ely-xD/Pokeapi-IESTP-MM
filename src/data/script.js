const pokes = POKEMON.pokemon;
const btn = document.getElementById('btn');
const txt = document.getElementById('txt');
console.log(pokes);

function poke(pok) {
      const cont = document.getElementById('cont-pokemones');
      cont.innerHTML = `${pok.map((pokemon)=>`
      <div class="cont-Pokes">
            <img src="${pokemon.img}">
                  <div class="datos">
                        <div class="data">
                              <p class"id">Id: ${pokemon.id}</p>
                              <p class"num">Numero: ${pokemon.num}</p>
                              <p class"name">Nombre: ${pokemon.name}</p>
                              <p class"type">Tipo: ${pokemon.type}</p>
                              <p class"condicion">Altura: ${pokemon.height}</p>
                              <p class"weight">Peso: ${pokemon.weight}</p>
                              <p class"cobra">Dulce: ${pokemon.candy}</p>
                              <p class"cobra">Contador de Dulce: ${pokemon.candy_count}</p>
                        </div>
                              
                        <div class="data">
                              <p class"cobra">Huevo: ${pokemon.egg}</p>
                              <p class"cobra">Opor. Engendrar${pokemon.spawn_chance}</p>
                              <p class"cobra">Engendra avh: ${pokemon.avg_spawns}</p>
                              <p class"cobra">Engendrar tiempo: ${pokemon.spawn_time}</p>
                              <p class"cobra">Multiplicadoras: ${pokemon.multipliers}</p>
                              <p class"cobra">Debilidades: ${pokemon.weaknesses}</p>
                        </div>
                  </div>
      </div>
      `)}
`;
}
poke(pokes);

function buscar(pok, key, name) {
      return pok.filter(e=>e[key].includes(name));
}

btn.addEventListener('click', (e)=>{
      poke(buscar(pokes,"name",txt.value.charAt(0).toUpperCase()+txt.value.slice(1)));
      txt.value="";
});