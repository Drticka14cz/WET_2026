function porovnani(a, b){
   
    if(a>b){
    alert(a);
    }
    else if(b>a){
        alert(b);
    }
    else{
        alert("čísla jsou stejná");
    }

}

let x = window.prompt("zadej první hodnotu");
let y = window.prompt("zadej druhé číslo");

x = x*1;
y = y*1;

porovnani(x, y)
console.log(x, y)
function vek(alt){
if(alt<15){
    alert("Dítě" + alt)
}
else if (alt<18){
    alert("dospívající" + alt)/* tady pro spojení fce se dá použít && -> if(alt>0 && alt<=15) */
}
else if (alt>=18){
    alert("dospělý" + alt)
}
else{
    alert("divnočlověk")
}

}

let alt = window.prompt("zadej svůj věk")

function abs(hod){
    if(hod>0){
        alert(hod)
    }
    else  /*(hod<0)*/{
        alert(hod*(-1))
    }
}
let hod = window.prompt("Zadej hodnotu")
abs(hod)


let ab = window.prompt("zadej rok")
prestupny(ab)
function prestupny(rok){
    if(rok % 4 === 0 && rok % 100 !== 0){
alert( "je prestupný") 
    }
    else{
        alert(neni)
    }

}
let rok = window.prompt("zadej rok")
prestupny(rok)