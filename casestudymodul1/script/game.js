// cài đặt canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 400;

let score = 0;
let gameFrame = 0;
ctx.font = '50px sans-serif';

// Tương tác chuột

let canvasPosition = canvas.getBoundingClientRect();
console.log(canvasPosition);
const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}
canvas.addEventListener('mousedown', function (event) {
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;


});
canvas.addEventListener('mouseup', function () {
    mouse.click = false;
})

//player

const playerLeft = new Image();
playerLeft.src = 'img/dragon_go_left.png';
const playerRight = new Image();
playerRight.src = 'img/dragon_go_right.png';

class Player {
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height / 2;
        this.radius = 50;
        this.angle = 0; //xoay nhân vật theo hướng chuột
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 498;
        this.spriteHeigth = 327;
    }

    update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        let theta = Math.atan2(dy, dx);
        this.angle = theta
        if (mouse.x != this.x) {
            this.x -= dx / 30; //speed 
        }
        if (mouse.y != this.y) {
            this.y -= dy / 30;
        }
    }
    draw() {
        if (mouse.click) {
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(this.x, this.y, this.radius, 10);


        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle)
        if (this.x >= mouse.x) {
            ctx.drawImage(playerLeft, 0 * this.spriteWidth, 0 * this.spriteHeigth, this.spriteWidth - 100, this.spriteHeigth + 183, 0 - 50, 0 - 50, this.spriteWidth / 5, this.spriteHeigth / 3);
        } else {
            ctx.drawImage(playerRight, 0 * this.spriteWidth, 0 * this.spriteHeigth, this.spriteWidth - 100, this.spriteHeigth + 183, 0 - 50, 0 - 50, this.spriteWidth / 5, this.spriteHeigth / 3);
        }
        ctx.restore();

    }
}
const player = new Player();

//thế lực bóng tối
const helicoptersArray = [];
class Helicopter {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 50;
        this.speed = Math.random() * 5 + 1;
        this.distance; // khoảng cách này sẽ theo dõi khoảng cách giữa mỗi heli
        this.counted = false;
        this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2';

    }
    update() {
        this.y -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

        const heliBoom1 = document.createElement('audio');
        heliBoom1.src = 'sound/explode.wav';
        const heliBoom2 = document.createElement('audio');
        heliBoom2.src = 'sound/rumble.flac'

function handleHelicoters() {
    if (gameFrame % 50 == 0) {
        helicoptersArray.push(new Helicopter());

    }
    for (let i = 0; i < helicoptersArray.length; i++) {
        helicoptersArray[i].update();
        helicoptersArray[i].draw();
    }
    for (let i = 0; i < helicoptersArray.length; i++) {
        if (helicoptersArray[i].y < 0 - this.radius * 2) {
            helicoptersArray.splice(i, 1);
        }
        if (helicoptersArray[i]) {
            if (helicoptersArray[i].distance < helicoptersArray[i].radius + player.radius) {

                if (!helicoptersArray[i].counted) {
                    if(helicoptersArray[i].sound === 'sound1'){
                        heliBoom1.play();
                    } else {
                        heliBoom2.play();
                    }
                    score++;
                    helicoptersArray[i].counted = true;
                    helicoptersArray.splice(i, 1);
                }

            }
        }

    }
}



//Vòng lặp animation
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleHelicoters();
    player.update();
    player.draw();
    ctx.fillText('score: ' + score, 10, 50);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate()