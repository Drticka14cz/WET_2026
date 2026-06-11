let classifier
let imageModelURL = "https://teachablemachine.withgoogle.com/models/6UCUpNqyi/"
let video
let label = ""

function preload() {
    classifier = ml5.imageClassifier(imageModelURL + "model.json")
}

function setup() {
    createCanvas(320, 260)
    video = createCapture(VIDEO)
    video.size(320, 240)
    video.hide()
    // Wait for video to be ready before classifying
    video.elt.addEventListener("loadeddata", classifyVideo)
    classifier = ml5.imageClassifier(imageModelURL + "model.json", modelReady); } function modelReady() { console.log("Model loaded!"); classifyVideo();  }


function draw() {
    background(0)

    // Mirror the video using canvas transform instead of ml5.flipImage
    push()
    translate(width, 0)
    scale(-1, 1)
    image(video, 0, 0, 320, 240)
    pop()

    // Draw label
    fill(255)
    textSize(16)
    textAlign(CENTER)
    if (label === "SCP"){
        text("SCPPPPPPPPPPPP", width/2, height-4)
    }
    else{
        text(label, width / 2, height - 4)

    }
    
}

function classifyVideo() {
    let flipped = ml5.flipImage(video) // temporary flip just for the model
    classifier.classify(flipped, (error, results) => {
        flipped.remove() // safe to remove now — not used for drawing
        if (error) {
            console.error(error)
            return
        }
        label = results[0].label
        console.log(label)
        classifyVideo() // loop
    })
}
