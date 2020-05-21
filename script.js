    const output = document.querySelector(".output");
    const messageOut = document.querySelectorAll(".message span");
    output.addEventListener("mouseenter",function(){
        output.style.backgroundColor = "rgb(127, 190, 63)";
        document.getElementsByClassName("box")[0].style.display = "block";
    })
    output.addEventListener("mouseleave",function(){
        output.style.backgroundColor = "rgb(156, 197, 116)";
        document.getElementsByClassName("box")[0].style.display = "none";
    })
    output.addEventListener("mousemove", function(e){
        messageOut[0].innerText=e.x;
        messageOut[1].innerText=e.y;
    })

document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement("div");
    div.classList.add("box");
    output.appendChild(div);
    div.x = div.offsetLeft;
    div.y = div.offsetTop;
    div.steps = Math.random() * 20;
    div.direction = Math.floor(Math.random() * 4);
    window.requestAnimationFrame(move);
})
    
function move() {
    let speed = Math.random() * 10;
    const box = document.querySelector(".box");
    let bounds = output.getBoundingClientRect();
    console.log(bounds);
    box.steps--;
    if (box.steps < 0) {
        box.direction = Math.floor(Math.random() * 4);
        box.steps = Math.random() * 20;
    }
    if (box.direction == 0 && box.x < bounds.right - 480) {
        box.x += speed;
    }
    if (box.direction == 1 && box.x > bounds.left) {
        box.x -= speed;
    }
    if (box.direction == 2 && box.y < bounds.bottom - 480) {
        box.y += speed;
    }
    if (box.direction == 3 && box.y > bounds.top) {
        box.y -= speed;
    }
    box.style.top = box.y + "px";
    box.style.left = box.x + "px";
    window.requestAnimationFrame(move);
}