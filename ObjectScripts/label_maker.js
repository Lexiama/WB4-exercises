"use strict";

let myInfo = {
    Fullname: "Alexia McKoy",
    address: "1234 Main St",
    city: "Brooklyn",
    state: "NY",
    zip: "11201"
 };

function printContactInfo(contact) {

console.log (contact.Fullname);
console.log (contact.address);
console.log (contact.city + ","+  myInfo.state + " " + myInfo.zip); }

printContactInfo(myInfo);
