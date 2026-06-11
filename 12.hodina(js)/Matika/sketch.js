function setup() {
    createCanvas(800, 600, WEBGL);

    angleMode(DEGREES);
    imageMode(CENTER);

    stroke(90, 80, 120);
    strokeWeight(4);
}

function draw() {
    clear();
    orbitControl(4, 4);

    for (let i = 0; i < 180; i += 5) {
        for (let j = 0; j < 360; j += 5) {
            beginShape(POINTS);
            vertex(200 * sin(i) * cos(j), 200 * cos(i), 200 * sin(i) * sin(j));
            endShape();
        }
    }
}
