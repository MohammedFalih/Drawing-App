let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
canvas.style.background = "aliceblue";

// let painting = false;

// function startPosition(e) {
//     painting = true;   
//     draw(e);
// }

// function finishedPosition() {
//     painting = false;
//     ctx.beginPath();
// }
// function draw(e) {
//     if(!painting)return;
//     ctx.lineWidth = 10;
//     ctx.lineCap = 'round';

//     ctx.lineTo(e.clientX, e.clientY);
//     ctx.stroke();
//     // ctx.beginPath();
//     // ctx.moveTo(e.clientX,e.clientY);
// }

// canvas.addEventListener('mousedown', startPosition);
// canvas.addEventListener('mouseup', finishedPosition);
// canvas.addEventListener('mousemove', draw);

let drawing = false;

function startPosition(e) {
    drawing = true;
    draw(e);
}

function finishedPosition() {
    drawing = false;
    ctx.beginPath();
}

function draw(e) {
    if(!drawing) return;

    ctx.lineWidth =15;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw)