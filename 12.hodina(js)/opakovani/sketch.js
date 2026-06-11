let speed = 1
let barva = "brown"

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    fill("white")
    circle(100, 100, 50)
    circle(100, 58, 35)
    circle(100, 175, 100)
    fill("orange")
    circle(100,68,8)
    fill("black")
    circle(100,68,1)
    circle(90,55,4)
    circle(110,55,4)
    circle(100,100,10)
    circle(100,175,10)
    
    fill(barva)
    square(500, 175,100)
    fill("yellow")
    triangle(500, 175, 600,175, 550, 100)

    fill("white")
    circle(400 ,speed, 25)
    speed += 1
    if (speed > 650){
        speed = -5
    }
    

}
function mousePressed(){
    if (mouseX >=500 && mouseX <=600 && mouseY >=175 && mouseY <=275){
        barva = "red"
    }
    else{
        barva = "green"
    }
}

























