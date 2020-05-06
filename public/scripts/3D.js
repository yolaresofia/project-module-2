let cat,plant,sofa, table;

function preload() {
  
  // Load model with normalise parameter set to true
  cat = loadModel('/resources/cat.obj', true);
    plant = loadModel('/resources/plant2.obj', true);
  sofa = loadModel('/resources/sofa.obj', true);
  table = loadModel('/resources/table.obj', true);

}

function setup() {
 let cv =  createCanvas(windowWidth, windowHeight, WEBGL);
 cv.position(0,0)
 cv.style('z-index','20')
}

function draw() {
  background(30);
  translate(-20, -100, mouseX/6)
  scale(0.9); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(cat);
  translate(120, 200, 83)
   scale(1.4); // Scaled to make model fit into canvas
   rotateZ(frameCount * 0.01)
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  model(plant)
  
  
    translate(110, 400, 113)
   scale(0.6); // Scaled to make model fit into canvas
   rotateZ(frameCount * -0.02)
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  model(sofa)
  
    translate(410, 100, 713)
   scale(0.6); // Scaled to make model fit into canvas
   rotateZ(frameCount * 0.002)
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.002);
  model(table)
}

function mousePressed() {
  window.location.href = "/main";
 }