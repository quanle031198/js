// class Controll{
//     constructor(left, right,up,down){
//         this.left = left;
//         this.right = right;
//         this.up = up;
//         this.down = down;
//     }
//     upArrowPressed(){

//     }
// }
function upArrowPressed() {
    let element = document.getElementById("myCanvas");
    element.style.top = parseInt(element.style.top) - 5 + 'px'
}
function downArrowPressed() {
    let element = document.getElementById("myCanvas");
    element.style.top = parseInt(element.style.top) + 5 + 'px'
}
function leftArrowPressed() {
    let element = document.getElementById("myCanvas");
    element.style.left = parseInt(element.style.left) - 5 + 'px'
}
function rightArrowPressed() {
    let element = document.getElementById("myCanvas");
    element.style.left = parseInt(element.style.left) + 5 + 'px'
}

function moveSelection(evt)
{
    switch (evt.keyCode)
    {
        case 65:
            leftArrowPressed();
            break;
            case 68:
            rightArrowPressed();
            break;
            case 87:
            upArrowPressed();
            break;
            case 83:
            downArrowPressed();
            break;    
    }
}
function docReady()
{
    window.addEventListener('keydown', moveSelection);
}
