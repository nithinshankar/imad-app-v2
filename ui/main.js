console.log('Loaded!');

var ele = document.getElementById('mtext');

ele.innerHTML = 'MASS DAW';

var ml=0;
var img = document.getElementById('img');
function moveRight(){
    ml=ml+2;
    img.style.marginLeft=ml+'px';
}

function moveLeft(){
    ml=ml+2;
    img.style.marginLeft=ml+'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,50);
    img.onclick = function() {
    var interval = setInterval(moveLeft,50);
};

};

