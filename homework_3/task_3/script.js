var i=0;
var str='';

function drawTriangel() {
    var yourSymbol = document.getElementById('inputSymbol').value;
    var yourHeight = document.getElementById('inputHeight').value;
    if (yourHeight>=3 && yourHeight<=15) {
        for (i=1; i<=yourHeight; i++) {
            str+=yourSymbol;
            console.log(str)
        }
    } else {
        for (i=0; i<3; i++) {
            str+=yourSymbol;
            console.log(str);
        }
    }
}

document.getElementById('showResult').addEventListener('click', drawTriangel);

