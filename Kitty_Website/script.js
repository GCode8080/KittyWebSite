/*This code is copy righted under Kibblez inc.© and if you steel the contents of it, kneecaps will be broken!*/

/*The color changing buttons machines*/
document.getElementById("bt1").onclick = function() {
    document.getElementById("heading 1").style.color = "red";
}
document.getElementById("bt2").onclick = function() {
    document.getElementById("heading 1").style.color = "lime";
}
document.getElementById("bt3").onclick = function() {
    document.getElementById("heading 1").style.color = "blue";
}
document.getElementById("bt4").onclick = function() {
    document.getElementById("heading 1").style.color = "black";
}
/*The photo changing machines*/
function changeImage() {
    var image = document.getElementById('photo');
    if (image.src.match("https://image.shutterstock.com/image-photo/cute-cat-lying-on-his-600w-572338033.jpg")) {
        image.src = "https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg";
    }
    else {
        image.src = "https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg";
    }
}

function changeImageBack() {
    var image = document.getElementById('photo');
    if (image.src.match("https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg")) {
        image.src = "https://image.shutterstock.com/image-photo/cute-cat-lying-on-his-600w-572338033.jpg";
    }
    else {
        image.src = "https://image.shutterstock.com/image-photo/cute-cat-lying-on-his-600w-572338033.jpg";
    }
}

function changeImageAgain() {
    var image = document.getElementById('photo');
    if (image.src.match("https://image.shutterstock.com/image-photo/cute-cat-lying-on-his-600w-572338033.jpg")) {
        image.src = "https://image.shutterstock.com/image-photo/beautiful-cat-outer-space-elements-600w-309881792.jpg";
    }
    else {
        image.src = "https://image.shutterstock.com/image-photo/beautiful-cat-outer-space-elements-600w-309881792.jpg";
    }
}

/*Time display*/
document.getElementById("timeBt").onclick = function() {
    document.getElementById("time").innerHTML = Date();
}
/*you are a very sneaky kitty ;)*/
console.log("hello sneaky kitty");