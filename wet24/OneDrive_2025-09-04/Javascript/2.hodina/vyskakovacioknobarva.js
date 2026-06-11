let text = document.querySelector("#text")

let odpoved = window.prompt("zadej jestli chceš modrou nebo zelenou")

if (odpoved === "modrou"){
    text.style.color = "blue"
}
else if (odpoved === "zelenou"){
    text.style.color = "green"
}