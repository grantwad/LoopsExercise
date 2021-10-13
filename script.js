// LOOPS EXERCISE

// 1
for (i = 1; i <=7; i++) {
    console.log(i);
}
// OR
for (i = 1; i < 8; i++){
    console.log(i);
}

console.log("========")

// 2
for (i = 5; i <= 25; i+=4){
    console.log(i);
}

console.log("========")

// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
];

// 3b
for (items of wizards){
    console.log(items);
}

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
}
// OR
while(true){
    harryPotterMovies++;
    if (harryPotterMovies === 8){
        break;
    }
}

// 4c 
console.log(harryPotterMovies);
