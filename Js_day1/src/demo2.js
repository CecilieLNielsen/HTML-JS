/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// DEL 1
// 
//OPGAVE 1
// Function Declaration
// Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

// Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

// Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + " = " + callback(n1, n2);
};

//OPGAVE 2
console.log(add(1, 2));   //  Giver 3
console.log(add);        // Printer funktion (Får en reference med til funktionen)
console.log(add(1, 2, 3)); // Printer 3, da den kun tager de første to parametre
console.log(add(1));	  // Not a number. Da der kun er et parameter kan de forskellige typer ikke adderes	
console.log(cb(3, 3, add)); // 3+3=6 metode bliver kaldt inde i metode
console.log(cb(4, 3, sub)); // 4+3=1 metode bliver kaldt inde i metode
//console.log(cb(3,3,add())); // Smider exception, da metoden allerede er blevet kaldt, og bliver kaldt igen
console.log(cb(3, "hh", add));// 3+hh=3hh da der ikke skelnes mellem typer, og det hele sættes sammen som en tekststreng


//OPGAVE 3
var cbNy = function (n1, n2, callback) {
    if (typeof callback !== "function") {
        return "Fejl! Ikke en funktion";
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + " = " + callback(n1, n2);
};

console.log(cbNy(3, 3, add()));

//OPGAVE 4
var mul = function (n1, n2) {
    return n1 * n2;
};
console.log(cb(3, 4, mul));


//OPGAVE 5
console.log(cb(3, 4, function (n1, n2) {
    return n1 / n2;
} ));

// DEL 2
//
//Opgave 1

var names = ["Lars", "Peter", "Bo", "Frederik"];
let a = names.filter(name => name.length <= 3)
console.log("Navne under tre bogstaver: " + a)

//OPGAVE 2
let namesUpperCase = names.map(function (item) {
    return item.toUpperCase();
});
console.log("Del 2 - Opgave 2: " + namesUpperCase);

//OPGAVE 3
let list = "<ul>" + names.map(name => '<li>'+ name +'</li>').join('') + "<ul>";
console.log("Del 2 - Opgave 3: " + list);

//OPGAVE 4
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

let a1 = cars.filter(car => car.year > 1999);
console.log("Biler nyere end 1999:" + a1);

let a2 = cars.filter(car => car.make === "Volvo");
console.log("Alle Volvo biler:" + a2);

let a3 = cars.filter(car => car.price < 5000);
console.log("Alle biler med pris under 5000 kroner:" + a3);