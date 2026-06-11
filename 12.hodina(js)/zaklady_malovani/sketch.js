let x = 200;
let y = 60;
let speed = 2;
let speedx = -5;
circle_color = (0, 255, 255);

let x2 = 50;
let y2 = 200;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    fill(circle_color);
    stroke(255, 255, 0);
    circle(x, y, 50);
    fill(1, 300, 300, 50); // čtvrtá hodnota je alfa - průhlednost 0 - 255
    noStroke();
    circle(x2, y2, 50);

    // x += 1;

    if (y >= height - 25) {
        speed *= -1;
    } else if (y <= 0 + 25) {
        speed *= -1;
    }
    if (x >= width - 25) {
        speedx *= -1;
    } else if (x <= 25) {
        speedx *= -1;
    }
    y += speed;
    x += speedx;
}
function mousePressed() {
    let distance = dist(mouseX, mouseY, x, y);
    if (distance <= 25) {
        setTimeout(function () {
            circle_color = color(
                random(0, 255),
                random(0, 255),
                random(0, 255),
                random(0, 255),
            );
        }, 500);
        circle_color = color(random(0, 255), random(0, 255), random(0, 255));
    }
}
