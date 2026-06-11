
let video
let ruka
let ruce = []

function nactiRuce(vysledky){
    ruce = vysledky
    
    
    
}

async function setup() {
    createCanvas(800, 600);
    ruka = await ml5.handPose({flipped:true})
    video = createCapture(VIDEO, {flipped:true})
    video.hide()
    ruka.detectStart(video, nactiRuce)
}


function draw() {
   
    image(video, 0,0)
    if(ruce.length > 0){
        let novaRuka = ruce[0]
        
        
        for(let i = 0; i < novaRuka.keypoints.length; i++){
            let keypoint = novaRuka.keypoints[i]
            fill(255,0,0)
            noStroke()
            // circle(keypoint.x, keypoint.y, 16)
            document.getElementById("text").style.color = "red";
            let palec_1_x = novaRuka.thumb_tip.x
            let palec_1_y = novaRuka.thumb_tip.y
            let palec_2_x = novaRuka.thumb_ip.x
            let palec_2_y= novaRuka.thumb_ip.y
            let palec_3_x = novaRuka.thumb_mcp.x
            let palec_3_y= novaRuka.thumb_mcp.y

            let ukazovacek_x = novaRuka.index_finger_dip.x
            let ukazovacek_x_2 = novaRuka.index_finger_pip.x
            let prostrednicek_x = novaRuka.middle_finger_dip.x
            let prostrednicek_x_2 = novaRuka.middle_finger_pip.x
            let prstenicek_x = novaRuka.ring_finger_dip.x
            let prstenicek_x_2 = novaRuka.ring_finger_pip.x
            let malicek = novaRuka.pinky_finger_dip.x
            let malicek2 = novaRuka.pinky_finger_pip.x
            
            if(palec_3_x < ukazovacek_x){
                  if(palec_1_y < palec_2_y &&
                ukazovacek_x < ukazovacek_x_2&& prostrednicek_x < prostrednicek_x_2&& prstenicek_x < prstenicek_x_2&& malicek< malicek2

            ){
                 console.log("facha")
                 circle(palec_3_x, palec_3_y, 106)
            }
                
            }
            else{
                 if(palec_1_y < palec_2_y &&
                ukazovacek_x > ukazovacek_x_2&& prostrednicek_x > prostrednicek_x_2&& prstenicek_x > prstenicek_x_2&& malicek> malicek2

            ){
                 console.log("facha")
                 fill(50,38,91)
                 circle(palec_3_x, palec_3_y, 106)
            }

            }
          
               
            
            
              
        }
        if(ruce.length >1){
                   let novaRuka = ruce[0]
        let novaRuka_2 = ruce[1]
        
        
        for(let i = 0; i < novaRuka.keypoints.length; i++){
            let keypoint = novaRuka.keypoints[i]
            fill(255,0,0)
            noStroke()
            // circle(keypoint.x, keypoint.y, 16)
            
            let palec_1_x = novaRuka.thumb_tip.x
            let palec_1_y = novaRuka.thumb_tip.y
            let palec_2_x = novaRuka.thumb_ip.x
            let palec_2_y= novaRuka.thumb_ip.y
            let palec_3_x = novaRuka.thumb_mcp.x
            let palec_3_y= novaRuka.thumb_mcp.y

            let ukazovacek_x = novaRuka.index_finger_dip.x
            let ukazovacek_x_2 = novaRuka.index_finger_pip.x
            let prostrednicek_x = novaRuka.middle_finger_dip.x
            let prostrednicek_x_2 = novaRuka.middle_finger_pip.x
            let prstenicek_x = novaRuka.ring_finger_dip.x
            let prstenicek_x_2 = novaRuka.ring_finger_pip.x
            let malicek = novaRuka.pinky_finger_dip.x
            let malicek2 = novaRuka.pinky_finger_pip.x
            
            if(palec_3_x < ukazovacek_x){
                  if(palec_1_y < palec_2_y &&
                ukazovacek_x < ukazovacek_x_2&& prostrednicek_x < prostrednicek_x_2&& prstenicek_x < prstenicek_x_2&& malicek< malicek2

            ){
                 console.log("facha")
                 circle(palec_3_x, palec_3_y, 106)
            }
                
            }
            else{
                 if(palec_1_y < palec_2_y &&
                ukazovacek_x > ukazovacek_x_2&& prostrednicek_x > prostrednicek_x_2&& prstenicek_x > prstenicek_x_2&& malicek> malicek2

            ){
                 console.log("facha")
                 fill(50,38,91)
                 circle(palec_3_x, palec_3_y, 106)
            }

            }
          
               
            
            
            for (let u = 0; u < novaRuka_2.keypoints.length; u++) {
                let keypoint = novaRuka_2.keypoints[i]
            fill(255,0,0)
            noStroke()
            // circle(keypoint.x, keypoint.y, 16)
            
            let palec_1_x = novaRuka_2.thumb_tip.x
            let palec_1_y = novaRuka_2.thumb_tip.y
            let palec_2_x = novaRuka_2.thumb_ip.x
            let palec_2_y= novaRuka_2.thumb_ip.y
            let palec_3_x = novaRuka_2.thumb_mcp.x
            let palec_3_y= novaRuka_2.thumb_mcp.y

            let ukazovacek_x = novaRuka_2.index_finger_dip.x
            let ukazovacek_x_2 = novaRuka_2.index_finger_pip.x
            let prostrednicek_x = novaRuka_2.middle_finger_dip.x
            let prostrednicek_x_2 = novaRuka_2.middle_finger_pip.x
            let prstenicek_x = novaRuka_2.ring_finger_dip.x
            let prstenicek_x_2 = novaRuka_2.ring_finger_pip.x
            let malicek = novaRuka_2.pinky_finger_dip.x
            let malicek2 = novaRuka_2.pinky_finger_pip.x
            
            if(palec_3_x < ukazovacek_x){
                  if(palec_1_y < palec_2_y &&
                ukazovacek_x < ukazovacek_x_2&& prostrednicek_x < prostrednicek_x_2&& prstenicek_x < prstenicek_x_2&& malicek< malicek2

            ){
                 console.log("facha")
                 circle(palec_3_x, palec_3_y, 106)
            }
                
            }
            else{
                 if(palec_1_y < palec_2_y &&
                ukazovacek_x > ukazovacek_x_2&& prostrednicek_x > prostrednicek_x_2&& prstenicek_x > prstenicek_x_2&& malicek> malicek2

            ){
                 console.log("facha")
                 fill(50,38,91)
                 circle(palec_3_x, palec_3_y, 106)
            }

            }
          
               
            
            
}
        }
        



            
        
    }
    
}
if(ruce.length >2){
        let novaRuka = ruce[0]
        let novaRuka_2 = ruce[1]
        let novaruka_3 = ruce[2]
        
        
        for(let i = 0; i < novaRuka.keypoints.length; i++){
            let keypoint = novaRuka.keypoints[i]
            fill(255,0,0)
            noStroke()
            // circle(keypoint.x, keypoint.y, 16)
            
            let palec_1_x = novaRuka.thumb_tip.x
            let palec_1_y = novaRuka.thumb_tip.y
            let palec_2_x = novaRuka.thumb_ip.x
            let palec_2_y= novaRuka.thumb_ip.y
            let palec_3_x = novaRuka.thumb_mcp.x
            let palec_3_y= novaRuka.thumb_mcp.y

            let ukazovacek_x = novaRuka.index_finger_dip.x
            let ukazovacek_x_2 = novaRuka.index_finger_pip.x
            let prostrednicek_x = novaRuka.middle_finger_dip.x
            let prostrednicek_x_2 = novaRuka.middle_finger_pip.x
            let prstenicek_x = novaRuka.ring_finger_dip.x
            let prstenicek_x_2 = novaRuka.ring_finger_pip.x
            let malicek = novaRuka.pinky_finger_dip.x
            let malicek2 = novaRuka.pinky_finger_pip.x
            
            if(palec_3_x < ukazovacek_x){
                  if(palec_1_y < palec_2_y &&
                ukazovacek_x < ukazovacek_x_2&& prostrednicek_x < prostrednicek_x_2&& prstenicek_x < prstenicek_x_2&& malicek< malicek2

            ){
                 console.log("facha")
                 circle(palec_3_x, palec_3_y, 106)
            }
                
            }
            else{
                 if(palec_1_y < palec_2_y &&
                ukazovacek_x > ukazovacek_x_2&& prostrednicek_x > prostrednicek_x_2&& prstenicek_x > prstenicek_x_2&& malicek> malicek2

            ){
                 console.log("facha")
                 fill(50,38,91)
                 circle(palec_3_x, palec_3_y, 106)
            }

            }
          
               
            
            
            for (let u = 0; u < novaRuka_2.keypoints.length; u++) {
                let keypoint = novaRuka_2.keypoints[i]
            fill(255,0,0)
            noStroke()
            // circle(keypoint.x, keypoint.y, 16)
            
            let palec_1_x = novaRuka_2.thumb_tip.x
            let palec_1_y = novaRuka_2.thumb_tip.y
            let palec_2_x = novaRuka_2.thumb_ip.x
            let palec_2_y= novaRuka_2.thumb_ip.y
            let palec_3_x = novaRuka_2.thumb_mcp.x
            let palec_3_y= novaRuka_2.thumb_mcp.y

            let ukazovacek_x = novaRuka_2.index_finger_dip.x
            let ukazovacek_x_2 = novaRuka_2.index_finger_pip.x
            let prostrednicek_x = novaRuka_2.middle_finger_dip.x
            let prostrednicek_x_2 = novaRuka_2.middle_finger_pip.x
            let prstenicek_x = novaRuka_2.ring_finger_dip.x
            let prstenicek_x_2 = novaRuka_2.ring_finger_pip.x
            let malicek = novaRuka_2.pinky_finger_dip.x
            let malicek2 = novaRuka_2.pinky_finger_pip.x
            
            if(palec_3_x < ukazovacek_x){
                  if(palec_1_y < palec_2_y &&
                ukazovacek_x < ukazovacek_x_2&& prostrednicek_x < prostrednicek_x_2&& prstenicek_x < prstenicek_x_2&& malicek< malicek2

            ){
                 console.log("facha")
                 circle(palec_3_x, palec_3_y, 106)
            }
                
            }
            else{
                 if(palec_1_y < palec_2_y &&
                ukazovacek_x > ukazovacek_x_2&& prostrednicek_x > prostrednicek_x_2&& prstenicek_x > prstenicek_x_2&& malicek> malicek2

            ){
                 console.log("facha")
                 fill(50,38,91)
                 circle(palec_3_x, palec_3_y, 106)
            }

            }
          
               
            
            
}
        }
         for(let i = 0; i < novaRuka_3.keypoints.length; i++){
            let keypoint = novaRuka_3.keypoints[i]
            fill(255,0,0)
            noStroke()
            // circle(keypoint.x, keypoint.y, 16)
            
            let palec_1_x = novaRuka_3.thumb_tip.x
            let palec_1_y = novaRuka_3.thumb_tip.y
            let palec_2_x = novaRuka_3.thumb_ip.x
            let palec_2_y= novaRuka_3.thumb_ip.y
            let palec_3_x = novaRuka_3.thumb_mcp.x
            let palec_3_y= novaRuka_3.thumb_mcp.y

            let ukazovacek_x = novaRuka_3.index_finger_dip.x
            let ukazovacek_x_2 = novaRuka_3.index_finger_pip.x
            let prostrednicek_x = novaRuka_3.middle_finger_dip.x
            let prostrednicek_x_2 = novaRuka_3.middle_finger_pip.x
            let prstenicek_x = novaRuka_3.ring_finger_dip.x
            let prstenicek_x_2 = novaRuka_3.ring_finger_pip.x
            let malicek = novaRuka_3.pinky_finger_dip.x
            let malicek2 = novaRuka_3.pinky_finger_pip.x
            
            if(palec_3_x < ukazovacek_x){
                  if(palec_1_y < palec_2_y &&
                ukazovacek_x < ukazovacek_x_2&& prostrednicek_x < prostrednicek_x_2&& prstenicek_x < prstenicek_x_2&& malicek< malicek2

            ){
                 console.log("facha")
                 circle(palec_3_x, palec_3_y, 106)
            }
                
            }
            else{
                 if(palec_1_y < palec_2_y &&
                ukazovacek_x > ukazovacek_x_2&& prostrednicek_x > prostrednicek_x_2&& prstenicek_x > prstenicek_x_2&& malicek> malicek2

            ){
                 console.log("facha")
                 fill(50,38,91)
                 circle(palec_3_x, palec_3_y, 106)
            }

            }
          
               

        



            
        
    }
    
}
    
}
