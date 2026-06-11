let vtip = document.querySelector(".textvtip")
let button = document.querySelector(".button1")
button.addEventListener("click", funkce)
function funkce(){
    vtip.innerText = ("")
    vtip.style.display = "block";
    setTimeout(function(){
        vtip.innerText = (".")
    }, 1000)
    setTimeout(function(){
        vtip.innerText = ("..")
    }, 2000)
    setTimeout(function(){
        vtip.innerText = ("...")
    }, 3000)
    setTimeout(function(){
        vtip.innerText = ("....")
    }, 4000)
    setTimeout(function(){
        vtip.innerText = (".....")
    }, 5000)
     
    
    setTimeout(function(){
        let ftip = ["Brno není město, ale křižovatka", "Brno, město velkých černých ******", "Brno, město, kde se nic neděje", "Víte, co znamená Brno pozpátku? No, taky nic  " , "Divadlo se dá hrát třemi různými způsoby: dobře, špatně a v Brně.","Jaká je definice Brna podle Pražáka? Hustě osídlená pravotočivá zatáčka mezi Prahou a Vídní"
            
]
        let promenna = Math.floor(Math.random() * ftip.length) 
        
        vtip.style.display = "list-item";
        vtip.innerText = ftip[promenna]
    }, 6000)
   
    
}