const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const btns = document.querySelectorAll(".option");
const body = canvas.querySelector('container');

// ctx.fillStyle = 'aliceblue';
// ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.width = canvas.width;
ctx.height = canvas.height;
canvas.style.background = "aliceblue";

let drawing = false;
var prevMouseX , prevMouseY, stopDrag;
selectedTool = "";


var rect = (e) => {
    ctx.beginPath();
    ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}
const circle = (e) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX),2) + 
    Math.pow((prevMouseY - e.offsetY),2))
    ctx.arc(e.offsetX, e.offsetY, radius, 0, 2 * Math.PI,false);
    ctx.stroke();
}

const triangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    ctx.stroke();
}
const line = (e) => {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX,prevMouseY);
    ctx.stroke();
}



const draw = (e) => {
    if(!drawing) return;
    ctx.lineWidth = "7";
    ctx.putImageData(stopDrag, 0, 0);
    if (selectedTool === "brush"){
        //ctx.beginPath();
        ctx.lineTo(e.offsetX , e.offsetY);
        ctx.stroke();
    }

    else if (selectedTool === "rect"){
        rect(e);
    }

    else if (selectedTool === "line"){
        line(e);
    }

    else if (selectedTool === "circle") {
        circle(e);
    }

    else {
        triangle(e);
    }

}
const start = (e) => {
    drawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    stopDrag = ctx.getImageData(0, 0, canvas.width, canvas.height)
}

btns.forEach(btn => {
    btn.addEventListener('click' ,() => {
        document.querySelector('.options .active').classList.remove('active');
        btn.classList.add("active");
        selectedTool = btn.id;
        console.log(selectedTool)
        //document.write(btn);
    })
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', () => drawing = false);
