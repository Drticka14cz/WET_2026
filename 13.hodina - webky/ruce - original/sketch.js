
let video
let poza
let pozy = []

function mousePressed(){

}

function nactiPozy(vysledky){
    console.log(vysledky)
    pozy = vysledky
    
}

async function setup() {
    createCanvas(800, 600);
    poza = await ml5.bodyPose("MoveNet", {flipped:true})
    video = createCapture(VIDEO, {flipped:true})
    video.hide()
    poza.detectStart(video, nactiPozy)
}


function draw() {
    background(220);
    image(video, 0,0)
    if(pozy.length > 0){
        let nova_poza = pozy[0]
        let x = nova_poza.nose.x
        let y = nova_poza.nose.y
        fill(255,0,0)
        circle(x, y, 50)
        let x_lu = nova_poza.left_ear.x
        let y_lu = nova_poza.left_ear.y
        let x_pu = nova_poza.right_ear.x
        let y_pu = nova_poza.right_ear.y
        let pul_x = (x_lu+x_pu)/2
        let pul_y = (y_lu+y_pu)/2 - 250
        fill(255,255,255)
        triangle(x_lu, y_lu - 50, x_pu, y_pu- 50, pul_x, pul_y)
        
        let x_tyc = nova_poza.right_wrist.x
        let y_tyc = nova_poza.right_wrist.y
        fill(0,0,0)
        rect(x_tyc, y_tyc, 50, 200)
        rect(x_tyc, -y_tyc, 50, 200)
        let x_rameno_l = nova_poza.left_shoulder.x
        let y_rameno_l = nova_poza.left_shoulder.y
        let x_loket_l = nova_poza.left_elbow.x
        let y_loket_l = nova_poza.left_elbow.y
        let x_tyca = nova_poza.left_wrist.x
        let y_tyca = nova_poza.left_wrist.y
        if(y_loket_l < y_rameno_l && x_tyca > x_loket_l){
            fill(0,255,0)
            rect(50, 50, 50, 200)
            
        }



            
        
    }
    
}
