function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL);
    background("#2a3142");
}

let rx = 0.03;
let ry = 0.04;
let bxs = 20;
let bxv = 0.005;

function draw() {
    fill(16, 19, 26, 3);
    rect(-width, -height, width * 2, height * 2);
    noStroke();
    rotateX(frameCount * rx);
    rotateY(frameCount * ry);

    fill("#EAC462");
    box(bxs);
    translate(40, 0);
    fill("#EDB950");
    box(bxs);
    translate(0, 40);
    fill("#DB4930");
    box(bxs);
    translate(-40, 0);
    fill("#653030");
    box(bxs);

    bxs += deltaTime * bxv;
    if (bxs >= 40 || bxs <= 10) {
        bxv *= -1;
        bxs = bxs >= 40 ? 39 : 11;
    }
}