let text = document.querySelector("#text")/* tady za tím let nemusí být stejný název jako je to ID v HTML*/
text.innerText = "webovky" 
let = text2 = document.getElementById("text")
text.style.color = "orange"

let novydiv = document.createElement("div")
novydiv.innerText = "Kuchařík je GOAT"
novydiv.style.color = "pink"
text.append(novydiv)