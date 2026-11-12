//----------------------------------------SECTION 1 — PRACTICAL (Use Compiler Only)-------------------------------------

//Question 1: Rectangle Area
//Write a function that takes length and breadth as parameters and returns the area of a rectangle.

function reactangleArea(l,b){
return l*b;
}
   let area= reactangleArea(5,10);
  console.log("reactangle Area:",area);


  //Question 2: Business Profit Check
  function checkProfit(revenue , expenses){
    if (revenue > expenses) {
        return "Business is profitable";
    }
    else {
        return "Business is not profitable";
    }

  }

console.log(checkProfit(5000,4000));


//Question 3: Character Checker
function checkchar(char){
    if (char >= "A" && char<="Z" ) {
        return "Capital letter";
    }
     else if (char >= "a" && char<="z" ) {
        return "Small letter";

    }
    else{
        return "Not a letter";
    }
}
console.log(checkchar("A"));


//Question 4:  Function to check value is number or string
function check(value) {
    if(typeof value === "number"){
        return "Value is a number";
    } else if (typeof value === "string") {
        return "Value is a string";
    } else {
        return "Other type"
    }
}

console.log(check(10));


//Question 5:Function to check prime number 
function checkPrime(number) {

    if (number <= 1) {
        return "Not a prime number";
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return "Not a prime number";
        }

    }

    return "Prime number";

}
 console.log(checkPrime(7));


 //Question 6: Type Finder
 function findType(value) {
    return typeof value;
 }
 console.log(findType("Anushka"));
 

 //Question 7: Triangle Area

 function triangleArea(base ,height){
    return (base * height)/2;
}
   let ar= triangleArea(5,10);
  console.log("Triangle Area:",ar);

  //Question 8: Greater Number

  function greaterNumber(A,B) {
    if (A > B) {
        return `${A} is greater`;
    }
    else {
        return `${B} is greater`;
    }  
  }
  console.log(greaterNumber(12,67));


  //Question 9: Function Name
 // Write a function that prints its own function name.
 function printFunctionName() {
    console.log("printFunctionName");
}

printFunctionName();


 //Question 10: Arrow Function

  const  greetUser = (name = "Guest!") =>{
       return `Hello ${name}!`;
  } 
  console.log(greetUser("Anushka"));
  console.log(greetUser());
       
  //Question 11: Convert to Arrow Function
//   function isEven(num) {
//     return num % 2 === 0;
// }

const isEven = (num) => {
    return num % 2 === 0;
}
console.log(isEven(4));

// Q12. Callback Function

function performOperation(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Q12 Add:", performOperation(9, 3, add));
console.log("Q12 Subtract:", performOperation(9, 3, subtract));
console.log("Q12 Multiply:", performOperation(9, 3, multiply));
