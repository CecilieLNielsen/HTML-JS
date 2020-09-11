
//OPGAVE A
var outer = document.getElementById("buttons");
outer.onclick = function (e) {
    var target = e.target;
    document.getElementById("display").innerHTML += target.innerText;

};

//OPGAVE B

document.getElementById("calculate").addEventListener("click", function (event) {
    event.stopPropagation();

    var symbols = document.getElementById("display").innerHTML;
    var splitted;
    var operators;
    if (symbols.includes('+')) {
        splitted = symbols.split('+');
        result = Number(splitted[0]) + Number(splitted[1]);

    } else if (symbols.includes('-')) {
        splitted = symbols.split('-');
        result = Number(splitted[0]) - Number(splitted[1]);

    } else if (symbols.includes('/')) {
        splitted = symbols.split('/');
        result = Number(splitted[0]) / Number(splitted[1]);

    } else if (symbols.includes('*')) {
        splitted = symbols.split('*');
        result = Number(splitted[0]) * Number(splitted[1]);

    }
    document.getElementById("display").innerHTML = result;

});
