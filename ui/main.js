console.log('Loaded!');

var ele = document.getElementById('mtext');

ele.innerHTML = 'MASS DAW';

var ml=0;
var mr=0;
var img = document.getElementById('img');
function moveRight(){
    ml=ml+2;
    img.style.marginLeft=ml+'px';
}

function moveLeft(){
    mr=mr+2;
    ele.style.marginRight=mr+'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,50);

};

ele.onclick = function() {
    var interval = setInterval(moveLeft,25);
};


