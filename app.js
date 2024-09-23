// FOR LOOPS:

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (var i = 9; i >= 0; i--) {
//     console.log(i);
//   }


// var userInput = prompt("Enter your city");

// var citiesArr = [
//     "karachi",
//     "lahore",
//     "multan",
//     "quetta",
//     "peshawar",
//     "islamabad",
// ];

// var flags = false;

// for ( var i = 0 ; i <= 5 ; i++ ) {
//     if ( userInput === citiesArr[i] ) {
//         console.log("city found..");
//         flags = true;
//     }    
// }

// if ( flags === false ) {
//     console.log("city not found..");
// }


// for ( var i = 5 ; i >= 0 ; i-- ) {
//     console.log(citiesArr[i]);    
// }


// citiesArr[0];
// citiesArr[1];
// citiesArr[2];
// citiesArr[3];
// citiesArr[4];
// citiesArr[5];


// console.log(citiesArr[0]);
// console.log(citiesArr[1]);
// console.log(citiesArr[2]);
// console.log(citiesArr[3]);
// console.log(citiesArr[4]);
// console.log(citiesArr[5]);


// if (userInput === "karachi") {
//     console.log("Welcome user");
// }
// else {
//     console.log("You lived in " + userInput);
// }


// if (userInput === citiesArr[0])  {
//     console.log("value matched");
// }

// else if (userInput === citiesArr[1]) {
//     console.log("value matched")
// }

// else if (userInput === citiesArr[2]) {
//     console.log("value matched")
// }

// else if (userInput === citiesArr[3]) {
//     console.log("value matched")
// }

// else if (userInput === citiesArr[4]) {
//     console.log("value matched")
// }

// else if (userInput === citiesArr[5]) {
//     console.log("value matched")
// }

// else {
//     console.log("value not found..");
// }




// -----------------------------------------------------------------------------------------




// FOR LOOPS NESTED:


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];

// var firstNames = [];

// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// var fullnames = [];

// for ( var i = 0 ; i < firstNames.length ; i++ ) {
// for ( var j = 0 ; j < lastNames.length ; j++ ) {
//     fullnames.push(firstNames[i] + lastNames[j]);
// }
// }

// console.log(fullnames);



// var firstNames = ["Muhammad ", "Syed "];

// var lastNames = ["farooq","faraz","hamza","ali"];

// var fullNames = [];

// for ( var i = 0 ; i < firstNames.length ; i++ ){

//     // console.log(firstNames[i]);

//     for ( var j = 0 ; j < lastNames.length ; j++ ){
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }

// console.log(fullNames);



// -----------------------------------------------------------------------




// CHANGING CASES:



// var userInput = prompt("Enter your city");

// userInput = userInput.toLowerCase()

// console.log(userInput);

// var citiesArr = [
//     "karachi",
//     "lahore",
//     "multan",
//     "quetta",
//     "peshawar",
//     "islamabad",
// ];

// var flags = false;

// for ( var i = 0 ; i <= 5 ; i++ ) {
//     if ( userInput === citiesArr[i] ) {
//         console.log("city found..");
//         flags = true;
//     }    
// }

// if ( flags === false ) {
//     console.log("city not found..");
// }



// var text = "hello world";

// console.log(text.slice(6,11));



// var userInput = prompt("Enter your city");

// var firstChar = userInput.slice(0,1).toUpperCase();

// var remainingChar = userInput.slice(1,).toLowerCase();

// var updatedValue = firstChar + remainingChar;

// console.log(updatedValue);

// var citiesArr = [
//     "Karachi",
//     "Lahore",
//     "Multan",
//     "Quetta",
//     "Peshawar",
//     "Islamabad",
// ];

// var flags = false;

// for ( var i = 0 ; i <= 5 ; i++ ) {
//     if ( updatedValue === citiesArr[i] ) {
//         console.log("city found..");
//         flags = true;
//     }    
// }

// if ( flags === false ) {
//     console.log("city not found..");
// }