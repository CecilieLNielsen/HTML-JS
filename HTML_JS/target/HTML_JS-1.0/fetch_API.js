var baseUrl = "https://jsonplaceholder.typicode.com/users"


//Get user
var outer = document.getElementById("single");
outer.onclick = function () {
    event.preventDefault()
    let id = document.getElementById("number").value;
    
    fetch(baseUrl + "/" + id)
        .then(res => res.json())
        .then(person => {
            console.log("data", person);
            var result = "";
            result += "<p>Name: "+person.name+"</p>";
            result += "<p>Phone: "+person.phone+"</p>";
            result += "<p>Adresse</p>";
            result += "<p>Street: "+person.address.street+"</p>";
            result += "<p>City: "+person.address.city+"</p>";
            result += "<p>Zip: "+person.address.zipcode+"</p>";
            result += "<p>Geo: "+person.address.geo.lat+ ", " +person.address.geo.lng+"</p>";
            
            
            document.getElementById("ul1").innerHTML = result;
        })
}




//Get all users
var outer = document.getElementById("all");
outer.onclick = function () {
    event.preventDefault() 
    fetch(baseUrl)
        .then(res => res.json())
        .then(persons => {
            console.log("data", persons);
            var table = "<table><tr><th>Name</th><th>Phone</th></tr>";
            table += persons.map((p) => {
                return "<tr><td>"+p.name+"</td><td>"+p.phone+"</td></tr>";
            }).join("");
            table += "</table>";
            document.getElementById("ul1").innerHTML = table;
        })
}
