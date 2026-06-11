let film


function setup() {
    createCanvas(800, 600);
    film = createCapture(VIDEO)
    film.hide()

    
}

function draw() {
    background(220);
    image(film,0,0,width, height)
}
