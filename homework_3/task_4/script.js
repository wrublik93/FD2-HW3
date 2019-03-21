function toCapitalCase() {
    var myStr = document.getElementById('inputStr').value;
    console.log(myStr.split(/\s+/).map(tempResult => tempResult[0].toUpperCase() + tempResult.substring(1)).join(' '));
}

document.getElementById('showResult').addEventListener('click', toCapitalCase);
