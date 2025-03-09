let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  playerOne.currentScore = prompt("What is your current score?");
  {playerOne.currentScore = 0};
  if (playerOne.currentScore < playerOne.hiScore) {
    alert("You have not beaten your hi score yet.");
  }
  else {
    alert("You have beaten your hi score!");
    playerOne.hiScore = playerOne.currentScore;
  }


  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let playerOne = {};
  playerOne.name = prompt("What is your name?");
playerOne.phone = prompt("What is your phone number?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object. 
  playerOne.phone = prompt("What is your phone number?");
  if (playerOne.phone.length < 10) {
    alert("Your phone number is too short.");
  }
  else {
    alert("Your phone number is long enough.");
  }
 
  
  

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Your current address is ${playerOne.address}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // Try it!
  // TODO: create a prompt to ask about a pet
  pet.name = prompt("What is your pet's name?");
  pet.species = prompt("What is your pet's species?");
  pet.age = prompt("What is your pet's age?");
  pet.color = prompt("What is your pet's color?");

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Your pet's name is ${pet.name}. It is a ${pet.species} and is ${pet.age} years old. It is ${pet.color}.`;
}
if (pet.age < 10) {
  alert("Your pet is young.");
}
else {
  alert("Your pet is old.");
}
if (pet.species === "dog") {
  alert("Your pet is a dog.");
}
else {
  alert("Your pet is not a dog.");
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("hello!");
  let playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.address = prompt("What is your address?");
  playerOne.pet = prompt("What is your pet's name?");
messageParagraph. innerHTML = `Hi, ${playerOne.name}! Your current address is ${playerOne.address}. Your pet's name is ${playerOne.pet}.`;
  
}
if (playerOne.pet === "dog") {
  alert("You have a dog.");
}
else {
  alert("You do not have a dog.");
}
if (playerOne.address.length < 10) {
  alert("Your address is too short.");
}
else {
  alert("Your address is long enough.");
}
part4.onclick = day1Part4;