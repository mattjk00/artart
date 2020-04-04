/**
 * Matthew Kleitz, 2020
 * April...
 */
function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
    bg();
    center();
}

function bg() {
    noStroke();
    background("#381D2A");
    
    fill(0, 0, 0, 20);
    ellipse(0, 0, 450, 450);
    fill(0, 0, 0, 20);
    ellipse(0, 0, 400, 400);
}

let rs = [0, 0, 0, 0];
let colors = ["#fffb85", "#FFA552", "#FCDE9C", "#BA5624"];

function center() {

    for (let i = 0; i < rs.length; i++) {
        rs[i] = incrementRot(rs[i], (i + 1) / 1000.0);
        drawBox(rs[i], colors[i], 70 - 10 * i);
    }
}

function incrementRot(r, x) {
    r += x * deltaTime;
    if (r >= 360) { r = 0; }
    return r;
}

function drawBox(r, c, s) {
    stroke(c);
    noFill();
    push();
    rotateX(r);
    rotateY(r/2);
    box(s);
    pop();
}