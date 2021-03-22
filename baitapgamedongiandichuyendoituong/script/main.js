function Hero(image, right, top, size, left) {
    this.image = image;
    this.right = right;
    this.top = top;
    this.size = size;
    this.left =left;

    this.getIronManElement = function () {
        return '<img width="' + this.size + '"'
            + ' height="' + this.size + '"'
            + 'src="' + this.image + '"'
            + ' style="top: ' + this.top + 'px; right:' + this.right + 'px; position:absolute;" />';
    }

    this.getCaptainElement = function () {
        return '<img width="' + this.size + '"'
            + ' height="' + this.size + '"'
            + 'src="' + this.image + '"'
            + ' style="top: ' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    }

    this.moveleft = function () {
        this.right += 20;
        console.log('ok: ' + this.right);
    }
}
let ironman = new Hero('../img/ironman.png', 10, 20, 400);
let bullet = new Hero('../img/bullet.png',230,30,100);
let captain = new Hero('../img/captan.png',230,30,310,0);

function displayIronMan() {
    document.getElementById('ironman').innerHTML = ironman.getIronManElement();
}
function displayCaptain() {
    document.getElementById('captain').innerHTML = captain.getCaptainElement();
}

function start() {
    if (bullet.right < window.innerWidth - bullet.size) {
        bullet.moveleft();
    }
    document.getElementById('bullet').innerHTML = bullet.getIronManElement();
    setTimeout(start, 50);
}
displayIronMan();
displayCaptain();
start();
