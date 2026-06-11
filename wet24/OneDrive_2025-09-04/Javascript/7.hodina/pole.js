let pole = ["škoda", "BMW", "Audi"]/* inicializace pole */
console.log(pole)// vypsání pole
console.log(pole[0])
pole[2] = "mercedes"
console.log(pole)
let pole2 = [1, "text", true]//může být více datových typu v jednom poli
pole.push("ford")//prida na posledni pozici
console.log(pole)
pole.unshift("peugeot")//přidá na začátek
console.log(pole)
pole.pop()//smaže poslední položku

pole.shift()//smaže posledí položku
// pole.splice(z jakého indexu, kolik věcí nahrazujem, čím nahrazujem)
pole.splice(1,0,"lotus")
console.log(pole)
pole.splice(1,2,"lotus")
console.log(pole)
//lze využít aj na mazání
pole.splice(1,1)

//pole.sort()//seřazení prvků
//console.log(pole)
pole.reverse()//otočení
console.log(pole)
pole.sort()
pole.reverse