const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const particules = new Particules();

canvas.style.backgroundColor="black";

canvas.width = 200;
canvas.height = 200;



// class Particules {
//     constructor() {
//         this.x = 100;
//         thix.y = 200;
//         thix.vX = 2;
//         this.vY = 2;
//         this.gravity = 0.8;
//     }

//     draw() {
//         ctx.fillStyle("red");
//         ctx.fillRect(this.x, this.y, 50, 50);
//     }
// }

// particules.draw();