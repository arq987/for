function impares() {

    let numerosImpares = [];
    for (let i = 1; i <= 50; i += 2) {
        console.log(i);
        numerosImpares.push(i);
    }
    let impares = numerosImpares.join(",");
    alert("Los números imapares del 1 al 50 son: " + impares);
};

function pokemon() {

    let pokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb']

    let numero = document.getElementById('numero').value;

    for (let i = 1; i <= numero; i++) {
        if (i % 5 === 0) {
            console.log(pokemons[i - 1]);
            pokemonMultiplo.push([i - 1]);
        }
    }
};

function numeros () {

    let array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
    
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
          console.log(array[i]);
        }
      }
}