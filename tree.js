let angle = Math.PI / 4;
let max;

let angleSlider;
let maxSlider;

let sideTreesCheck;
let sideTreesToggle = true;
function setup() {
    createCanvas(windowWidth-15, windowHeight-100);
    angleSlider = createSlider(0, 0.61, angle/3, 0.01);
    maxSlider = createSlider(1, 12, 11, 1)

    sideTreesCheck = createCheckbox('Toggle side trees', true);
    sideTreesCheck.changed(toggleSideTrees);
}

function toggleSideTrees() {
    sideTreesToggle = !sideTreesToggle;
}

function draw() {
    background('#b3faff');
    stroke("#ebd981");
    fill("#ebd981");
    rect(0, height-20, width, 20);

    angle = angleSlider.value();
    max = maxSlider.value();
    translate(width/2, height);
    branch(height/3, 75, 12, 1);
    translate(0, 0);
    if (sideTreesToggle) {
        translate(width/4, height/2);
        branch(height/3.5, 75, 12, 1);
        translate(0, 0);
        translate(width/4 - width/1.33, height/3);
        branch(height/3.5, 75, 12, 1);
    }
}

function branch(len, green, size, iteration) {
    if (size > 2) {
        size = size - 2;
    }
    stroke(99, green, 0);
    strokeWeight(size)
    line(0, 0, 0, -len);
    translate(0, -len);
   
    if (iteration < max) {
        push();
        rotate(angle);
        branch(len*(2/3), green+10, size, iteration+1);
        pop();

        push();
        rotate(-angle);
        branch(len*(2/3), green+10, size, iteration+1);
        pop();
    }

}