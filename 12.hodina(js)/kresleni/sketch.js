function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    background(0);
}

function draw() {
    // fill(0, 0, 0, 10);
    // rect(0, 0, width, height);
    noStroke();

    let hue = frameCount % 360;
    let velikost = random(1, 1000);
    fill(hue, 80, 100, 80);
    ellipse(mouseX, mouseY, velikost);
}

function mousePressed() {
    background(0);
}
