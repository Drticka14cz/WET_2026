let img;
let pozadi;
let fire;
let score = 0;
let mouchy = [];
let speed = 2;
let clickX = null;
let clickY = null;
let click_time = null;

async function setup() {
    createCanvas(windowWidth, windowHeight);
    img = await loadImage("assets/moucha.png"); // cesta k obrázku
    pozadi = await loadImage("assets/pozadi_2.jpg");
    fire = await loadImage("assets/fire.png");

    setInterval(function () {
        let newMoucha = {
            x: random(200, window.innerWidth + 200),
            y: random(200, window.innerHeight + 200),
        };
        mouchy.push(newMoucha);
    }, 1000);
}

function draw() {
    background(pozadi);
    if (clickX !== null && clickY !== null) {
        if (click_time !== null && millis() - click_time < 2000) {
            image(
                fire,
                clickX - fire.width / 100,
                clickY - fire.height / 100,
                50,
                50,
            );
        }
    }

    // image(img, 100, 100, 0, 0);
    textSize(120);
    textAlign(RIGHT, TOP);
    text("score:" + score, width - 550, 50);
    for (let moucha of mouchy) {
        if (score <= -10000) {
            textSize(500);
            textAlign(RIGHT, TOP);
            text("Game Over:", windowWidth / 2 + 1400, windowHeight / 2);
        } else {
            image(img, moucha.x, moucha.y);
            moucha.x -= speed;
            if (moucha.x < 0) {
                score -= 1;
                mouchy.splice(mouchy.indexOf(moucha), 1);
            }
        }
    }
}
function mousePressed() {
    clickX = mouseX;
    clickY = mouseY;
    click_time = millis();
    mouchy.forEach((moucha, index) => {
        if (
            mouseX >= moucha.x &&
            mouseX <= moucha.x + img.width &&
            mouseY >= moucha.y &&
            mouseY <= moucha.y + img.height
        ) {
            mouchy.splice(index, 1);
            score++;
        }
    });
}

                                                                     
