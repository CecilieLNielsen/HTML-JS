/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("Hello World, i Know how to count");

[1,2,3,4].forEach(n=>console.log(n));


// OPGAVE A
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
 
 
 // OPGAVE B
let all = new Array();
all = all.concat(boys, girls);
console.log("Opgave B:" + " " + all);

//OPGAVE C1
let list = all.join(', ');
console.log("Opgave C:" + " " + list);

//OPGAVE C2
let list1 = all.join(' - ');
console.log("Opgave C2:" + " " + list1);

//OPGAVE D
all.push("Lone", "Gitte");
console.log("Opgave D:" + " " + all);

//OPGAVE E
all.unshift("Hans", "Kurt");
console.log("Opgave E:" + " " + all);

//OPGAVE F
all.shift();
console.log("Opgave F:" + " " + all);

//OPGAVE G
all.pop();
console.log("Opgave G:" + " " + all);

//OPGAVE H
all.splice(3,4);
console.log("Opgave H:" + " " + all);

//OPGAVE I
all.reverse();
console.log("Opgave I:" + " " + all);

//OPGAVE J
all.sort();
console.log("Opgave J:" + " " + all);

//OPGAVE K  MANGLER
// all.sort(function(a,b) {return item.})

//OPGAVE L
let allInUpperCase = all.map(function(item) {return item.toUpperCase();});
console.log("Opgave L:" + " " + allInUpperCase);

//OPGAVE M
let a1 = all.filter(function(item) {return item.charAt(0) === 'L' || item.charAt(0) === 'I';});
console.log("Opgave M:" + " " + a1); 




