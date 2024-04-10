
function append(char) {
    document.getElementById("display").value += char;
}


function clear() {
    document.getElementById("display").value = "";
}

function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression); 
    document.getElementById("display").value = result;
}
