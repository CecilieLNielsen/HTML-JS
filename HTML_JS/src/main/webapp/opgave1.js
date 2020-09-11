/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//OPGAVE A
var x = document.getElementsByTagName("div");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
} 

//OPGAVE B
function changeColor() {
var x = document.getElementById("1");   
x.style.color = "white";     
var x = document.getElementById("2");   
x.style.color = "blue";     
var x = document.getElementById("3");   
x.style.color = "purple";     
}

