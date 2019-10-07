const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom"
];

/*************************************************1. FILTER**************************************************/
let firstName = inventors.filter(inventor => {
  //get firstname which includes "A"
  return inventor.split(" ")[0][0] === "A";
});

firstName;

//name which contains 'n'
let nameContainN = inventors.filter(inventor => inventor.includes("n"));

console.log(nameContainN);

//if a character is duplicated
let charDuplicated = inventors.filter(inventor => {
  let character = inventor.split("");
  let isDuplicated = false;
  character.filter((char, i) => {
    const tempDuplicated = char === character[i + 1];
    if (tempDuplicated) isDuplicated = true;
  });
  return isDuplicated;
});

charDuplicated;

//print odd numbers
const arrayNum = [2, 4, 5, 1, 21, 6, 123, 6, 77, 999998];
let isOdd = arrayNum.filter(num => num % 2 == 1);
isOdd;

//print number which has 2 digits
let hasTwoDigits = arrayNum.filter(num => num.toString().split("").length > 1);
hasTwoDigits;

//print number which is prime
let isPrime = arrayNum.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});
isPrime;


/*********************************************2. MAP************************************** */

//print first name of inventor
let firstNameMap = inventors.map(inventor => inventor.split(" ")[0]);
firstNameMap;

//print the length of every inventor's full name

let fullName = inventors.map(
  inventor => inventor.replace(" ", "").length
);
fullName;

//print all inventor's name in UPPERCASE
let nameUpperCase = inventors.map(inventor => inventor.toUpperCase());
nameUpperCase;

//Print out initials of all inventors
let nameInitial = inventors.map(inventor => {
  let firstLetter = inventor.split(" ")[0][0]; // take first letter of first name
  let secondLetter;
  let secondName = inventor
    .replace(inventor.split(" ")[0], "")
    .replace(" ", "");
  if (secondName.split(" ").length > 1) {
    //check if family name has more than 1 digits
    let temps = secondName.split(" ");
    secondLetter = temps.map(temp => temp[0]);
    secondLetter;
  } else {
    secondLetter = secondName[0]; //if only has one digit, just do the same as firstLetter
  }

  return (firstLetter + "." + secondLetter).replace(",", ".");
});
console.log(nameInitial);

//print every number * 100, inside the array is number so I dont have to check if it's a number or not
let multiplyByOnehundred = arrayNum.map(num => num * 100);
multiplyByOnehundred;

//Print out an array of the powers of two

let powOfTwo = arrayNum.map(num => Math.pow(num, 2));
powOfTwo;

/*********************************************************3. SORT********************************/

//Alphabet sort
let alphabetSort = inventors.sort();
console.log(alphabetSort);

//Reverse alphabet sort
let reverseSort = inventors.sort((a, b) => {
  //take the first letter of a and b then compare them.
  const firstLetterA = a[0];
  const firstLetterB = b[0];

  if (firstLetterA < firstLetterB) {
    return 1;
  }

  if (firstLetterA > firstLetterB) {
    return -1;
  }

  return 0;
});
console.log(reverseSort);

//sort by shortest first
let lengthShortestSort = inventors.sort((a, b) => {
    let lengthA = a.replace(" ","").length;
    let lengthB = b.replace(" ","").length;

    if(lengthA < lengthB) return -1;
    if(lengthA > lengthB) return 1;
    return 0
});
console.log(lengthShortestSort)

//sort by longest first
let lengthLongestSort = inventors.sort((a, b) => {
    let lengthA = a.replace(" ","").length;
    let lengthB = b.replace(" ","").length;

    if(lengthA < lengthB) return 1;
    if(lengthA > lengthB) return -1;
    return 0
});
console.log(lengthLongestSort)



/**********************4. REDUCE */

//Sum of all number
let sumArray = arrayNum.reduce((total, num) => total + num, 0);
sumArray;

//Sum of even numbers
let evenArray = arrayNum.filter(num => num % 2 === 0);
let evenSum = evenArray.reduce((total, num) => total + num);
evenSum;


//string contains first name of every inventors
let everyFirstName = inventors.reduce((total, first) => {
    const name = first.split(" ")[0];
    console.log(name)
    return total + name + " ";
}, "")
everyFirstName


/***********************************5. SOME EVERY */

//Does any inventor have the letter 'y' in their name?
let yInName = inventors.some(inventor => inventor.includes("y"));
yInName

//Does every inventor have the letter 'e' in their name?
let eInEveryName = inventors.every(inventors => inventors.includes("e"));
eInEveryName

//Does every inventor have first name that's longer than 4 characters?
let firstNameLength = inventors.every(inventor => inventor.split(" ")[0].length > 4)
firstNameLength



/**************************6. FIND AND FINDINDEX */

//the inventors has middle name
console.log(inventors[inventors.findIndex(inventor => inventor.split(" ").length > 2)]);

//Return a new array without inventor with a middle name.
const tempInventors = inventors;
let middleNameInventor = tempInventors[tempInventors.findIndex(inventor => inventor.split(" ").length > 2)];
let newInventors = tempInventors.filter( inventor => inventor !== middleNameInventor);
console.log(newInventors)