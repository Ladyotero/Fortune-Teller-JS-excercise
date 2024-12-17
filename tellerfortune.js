'use strict'



//Fortune Teller 
function fortuneTeller(name, age)
{
    let fortune = ""; // Initialize the fortune string

//Fortune based on name and age
if (name.length > 7) {
    fortune += `${name} will be marry late in life.`;
} else if (name.length < 5) {
    fortune += `${name} will be a successful bussines partner.`;
} else if (name.length >= 5 && name.length <= 7) {
    fortune += `${name} will be a successful artist`;

}

if (name[0] === 'R') {
    fortune += `${name} will be rich`;
}
if (name.includes('i') || name.includes('I')) {
    fortune += `${name}  will be a loyal friend.`;

}

//Fortune based on ages
if (age < 18) {
    fortune += `At age ${age}, you will discover a hidden talent that will shape your future.`;
} else if (age <= 30) {
    fortune += `At age ${age}, you will embark on a life-changing adventure that will define your path.`;
} else if (age <= 40) {
    fortune += `At age ${age}, you will build strong relationships that will support your growth.`;
} else if (age % 2 === 0) {
    fortune += `At age ${age}, you will reflect on your past decisions and feel at peace with your journey.`;
}
return fortune; 
}
console.log("Welcome to the Teller Fortune!");

//Prompt user for their name and age
let name = prompt("What is your name?");
let age = prompt("What is your age?")

age = Number(age);

console.log(fortuneTeller(name, age));

