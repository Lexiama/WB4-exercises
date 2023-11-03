"use strict ";

let lunch = [ 
                {item:"steak fajitas", price: 9.95},
                {item:"chips and guacamole", price: 5.25},
                {item:"sweet tea", price: 2.79},

            ];  


function calculateTotal() { 

for (let i = 0; i < lunch.length; i++) {
    total += lunch[i].price;
 }

}

console.log("Your total is " + total);