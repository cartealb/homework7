// Variables!
var radius = 15;
var canvas = document.querySelector('#canvas');
var color_pik = document.querySelector('#clr');
var ctx = canvas.getContext("2d");
ctx.fillStyle = color_pik.value;
var radius = 10;




//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function(e) {
        canvas.width = window.screen.width * .75;
        canvas.height = window.screen.height * .75;

    })
    //Add a listener for the mouse movement
window.addEventListener('mousemove', function(e) {
        console.log(e)
        draw(e.pageX, e.pageY);
        ctx.fill();
    })
    //Add a listener for the touch move

//Add a listener for the keydown
window.addEventListener('keydown', function(e) {
    if (e.key == 'b') ctx.fillStyle = 'rgb(0, 0, 255)';
    if (e.key == 'r') ctx.fillStyle = 'rgb(255, 0, 0)';
    if (e.key == 'y') ctx.fillStyle = 'rgb(255, 255, 0)';
    if (e.key == 'g') ctx.fillStyle = 'rgb(0, 128, 0)';
    if (e.key == '=') radius += 5;
    if (e.key == '-') radius -= 5;
    if (e.key == ' ') ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (e.key == 'ArrowUp' && radius != 0) {
        prev_rad = radius;
        radius = 0;
    }
    if (e.key == 'ArrowDown') {
        radius = prev_rad;
    }
})

clr.addEventListener('input', function() {

    ctx.fillStyle = this.value;

})


// Functions!
// I would add a function for draw
function draw(x, y) {
    console.log('Drawing now')
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();


}