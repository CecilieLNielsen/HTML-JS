/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//OPGAVE 2
//OPGAVE A
function writeMessage(element) {
    document.getElementById("123").innerHTML="Hi from " + element.id;
}

//OPGAVE B OG C
  var outer = document.getElementById("outer");
  outer.onclick = function(e){
      console.log("Clicked");
      var mee = this;
      var target = e.target;
      console.log(mee.id);
      console.log(target.id);
      document.getElementById("123").innerHTML=mee.id + ": Hi from " + target.id;
      
};




