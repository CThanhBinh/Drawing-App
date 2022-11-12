const currentSize = document.querySelector('.current-size');
const color = document.querySelector('.color');
const btnPlus = document.querySelector('.btn-plus');
const btnMinus = document.querySelector('.btn-minus');
const btnClear = document.querySelector('.clear');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 5;
let currentColor = 'black';
let isPressed = false;
let x, y;

canvas.addEventListener('mouseleave', () => {
    isPressed =false
})
canvas.addEventListener('mousedown',(e)=>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener('mouseup',()=>{
    isPressed = false;
})
canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2, size/2, 0, Math.PI*2)
        drawLine(x2,y2);
        x= x2;
        y= y2;      
    }
})


function drawLine(x2, y2){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.lineWidth = size;
    ctx.strokeStyle = currentColor;
    ctx.stroke();
}
function drawCircle(x2, y2, r, start, end){
    ctx.beginPath();
    ctx.arc(x2, y2, r, start, end);
    ctx.fillStyle = currentColor;
    ctx.fill();
}


btnPlus.addEventListener('click',()=>{
    size += 5
    currentSize.innerText = size
})
btnMinus.addEventListener('click',()=>{
    if(size > 5) size -= 5
    currentSize.innerText = size

})
color.addEventListener('input',(e)=>{
    currentColor = e.target.value;
})
btnClear.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    currentColor = 'black';
    size= 5;
    currentSize.innerText = size
})