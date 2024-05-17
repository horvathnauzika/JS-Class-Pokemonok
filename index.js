import Pokemon from "./Pokemon.js";
/** az osztálypéldány kisbetűs */

let pok1= new Pokemon("Ditto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", "Jó esős reggelt!", $(".pokemonok"))
let pok2= new Pokemon("Charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "Rawr", $(".pokemonok"))

//pok1.nev="DIIITTOOO" ezt már nem tudom megváltoztatni a getter miatt
//pok1.szin="lila"
delete pok1.mondat

// nevek lekérése getteren keresztül
console.log(pok1.nev)
console.log(pok2.nev)

pok1.mondat="Hurrá, elállt az eső!";
pok1.beszel()

/** másik mondatot adjunk a szájába */

console.log(pok1)
console.log(pok2)

/** szorgalmi az összes pokemont megjeleníteni */
