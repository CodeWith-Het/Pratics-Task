--->Q1)Write an arrow function that returns the product of two numbers.

const add = (a,b) =>{
    return a*b;
}

console.log(add(3,7));

--->Q2)Write a function declaration to check if a number is even or odd.

function checkEvenOddNumber(val){
    if(val % 2===0){
        console.log(`${val} is even`);
    }
    else{
        console.log(`${val} is odd`);
    }
}
checkEvenOddNumber(5);
checkEvenOddNumber(10);

--->Q3)Write a function expression that takes a name and returns "Hello, name!"

let fnc = function(nameString){
    console.log(`Hello, ${nameString}`);
}

fnc("Het");

--->Q4)Write a function with default parameter that greets a user by name or "Guest" if no name is given.

function greeting (name="Guest"){
    console.log(`Hello, ${name}`);
}

greeting(); // by defualt ye Guest le lega jab mene koi argument pass nahi kiya hoga tab 
greeting("Het");

--->Q5)Use a for loop to print numbers from 1 to 5.

for(let i=1;i<=5;i++){
    console.log(i);
}

--->Q6)Use a while loop to print all even numbers less than 10.

let i=1;
while(i<=9){
    if(i%2===0){
        console.log(i);
    }
    i++;
}

--->Q7)Write a function that takes any number of arguments and returns their sum (use rest parameters).

function add(...val){
   let total = 0;
   for (let i=0;i<val.length;i++){
    total = total + val[i];
   }
   return total;
}

console.log(add(1,2,5,7,4,9,5,6,2,4,7));

--->Q8)Write an arrow function to find the square of a number.

const squareOfNumber = (value) =>{
    return value ** 2;
}

console.log(squareOfNumber(5));
console.log(squareOfNumber(2));
console.log(squareOfNumber(8));