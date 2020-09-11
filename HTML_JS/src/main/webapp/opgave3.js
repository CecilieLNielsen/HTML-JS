//OPGAVE A
var names =  ["Lisa", "Lilli", "Lasse", "Lars", "Lone"];
let list = "<ul>" + names.map(name => '<li>'+ name +'</li>').join('') + "<ul>";
document.getElementById("list1").innerHTML = list;

//OPGAVE B
document.getElementById("addName").addEventListener("click", function(event) {
event.preventDefault()
names.push(document.getElementById("fname").value);
let list = "<ul>" + names.map(name => '<li>'+ name +'</li>').join('') + "<ul>";
document.getElementById("list1").innerHTML = list;
    
});

//OPGAVE C
document.getElementById("removeFirstName").addEventListener("click", function(event) {
event.preventDefault()
names.shift();
let list = "<ul>" + names.map(name => '<li>'+ name +'</li>').join('') + "<ul>";
document.getElementById("list1").innerHTML = list;
    
});

document.getElementById("removeLastName").addEventListener("click", function(event) {
event.preventDefault()
names.pop();
let list = "<ul>" + names.map(name => '<li>'+ name +'</li>').join('') + "<ul>";
document.getElementById("list1").innerHTML = list;
    
});