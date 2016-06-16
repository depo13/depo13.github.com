/**
 * spirit.js
 *
 * Mars Exploration Rover Spirit Pancam 360-degree
 *
 */
var alfa = null, bravo = null;
var img=new Image();
function display()
{
    document.getElementById('flicker').style.display = 'block';
    document.getElementById('info').style.display = 'block';
    document.getElementById('alfa').style.display = 'block';
    document.getElementById('bravo').style.display = 'block';
    document.getElementById('container').style.color = 'black';
}
(function()
{
    img.onload = display;
    img.src = 'img/PIA16440_McMurdo_Merged_Cyl_L456atc.jpg';
})();
(function()
{
    document.getElementById('alfasrc').src = 'img/PIA16440_McMurdo_Merged_Cyl_L456atc.jpg';
    document.getElementById('bravosrc').src = 'img/PIA16440_McMurdo_Merged_Cyl_L456atc.jpg';
})();

function init(){
    alfa = document.getElementById('alfa');
    bravo = document.getElementById('bravo');
    alfa.style.left = '0px';
    bravo.style.left = img.width + 'px';
    alfa.style.top = '0px';
    bravo.style.top = '0px';
    document.getElementById("status").innerHTML = "STATUS: OK";
}



function setStatus(){
    var lim = (window.innerHeight - img.height);
    var az = parseInt(parseInt(alfa.style.left)*(-1)/img.width*360);
    var alt = parseInt(parseInt(alfa.style.top)*(-1)/lim*90);
    document.getElementById("status").innerHTML = "STATUS: OK" + "<br>"
    + "AZ: " + az + "&deg;" + "<br>"
    + "ALT: " + alt + "&deg;";
}
function moveHor(dx) {
    alfa.style.left = -(img.width - parseInt(alfa.style.left) + dx) % img.width + 'px';
    bravo.style.left = parseInt(alfa.style.left) + img.width + 'px';
    setStatus();
}
function moveVert(dy) {
    var lim = (window.innerHeight - img.height);
    if (parseInt(alfa.style.top) +dy >= lim && parseInt(alfa.style.top) +dy <= 0) {
        alfa.style.top = (parseInt(alfa.style.top) + dy) + 'px';
        bravo.style.top = (parseInt(bravo.style.top) + dy) + 'px';
        setStatus();
    }
}

window.onload = init;

document.onkeydown = function(e) {
    e = e || event
    switch(e.keyCode) {
        case 37: // left
        moveHor(-5);
        return false
        case 38: // up
        moveVert(5);
        return false
        case 39: // right
        moveHor(5);
        return false
        case 40: // down
        moveVert(-5);
        return false
    }
} 