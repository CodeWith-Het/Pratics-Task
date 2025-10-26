1️⃣ Greet User

Function greetUser banao jo user ka naam le aur print kare:

"Hello, Het! Welcome to JS."

Solution
function greetUser(name){
    console.log(`Hello, ${name}! Welcome to JS.`);
}
greetUser("Het");
greetUser("Darshan");

2️⃣ Sum of Two Numbers

Function sumTwo banao jo do numbers ka sum return kare.

Solution
function sumTwo(a,b){
    return a+b
}
console.log(sumTwo(5,3));

3️⃣ Square of Number

Arrow function square banao jo number ka square return kare.

Solution
const squareOfNumber = (value) =>{
    return value**2;
}
console.log(squareOfNumber(5));
console.log(squareOfNumber(7));

4️⃣ Subtract Numbers

Function expression subtract banao jo do numbers ka difference return kare.

solution
let subtractVar = function(a,b){
    return a-b;
}
console.log(subtractVar(4,3));
console.log(subtractVar(44,33));
console.log(subtractVar(445,385));

5️⃣ Welcome with Default

Function welcome banao jo naam parameter le aur agar argument na diya ho to "Guest" print kare.

solution
function welcome(name="Guest"){
    console.log(`Hello, ${name}`);
}
welcome();
welcome("Het");

6️⃣ Multiply All Numbers

Function multiplyAll banao jo rest parameter use karke sab numbers ka multiplication return kare.

solution
function multiplyAll(...value){
    let total=1;
    for(let i=0;i<value.length;i++){
        total = total * value[i];
    }
    return total;
}
console.log(multiplyAll(1,2,3,4,5));
console.log(multiplyAll(1,3,5,7,9,11));

7️⃣ Find Largest Number

Function findMax banao jo 3 numbers me se largest number return kare.

solution
    function findMax(num1,num2,num3){
        if(num1>num2 && num1>num3){
            console.log(`${num1} is A Largest Number`);
        }
        else if(num2>num1 && num2>num3){
            console.log(`${num2} is A Largest Number`);
        }
        else if(num3> num1 && num3>num2){
            console.log(`${num3} is A Largest Number`);
        }
    }
    findMax(8,3,5);

8️⃣ Check Even or Odd

Arrow function isEven banao jo number even hai ya odd check kare (true/false return).

Solution
const isEven = (v1) =>{
    if(v1%2===0){
        console.log(`${v1} is number is even`);
    }
    else{
        console.log(`${v1} is number is odd`);
    }
}
isEven(4);
isEven(9);

9️⃣ Print Table

Function printTable banao jo number ka multiplication table 1 se 10 print kare.

solution
function printTable(value){
    for(let i=1;i<=10;i++){
        console.log(`${value} * ${i} = ${value*i}`);
    }
}
// 7 ka Table
printTable(7);

//6 ka Table
printTable(6);

🔟 Count Vowels in String

Function countVowels banao jo string me vowels (a, e, i, o, u) count kare.

1️⃣1️⃣ Reverse String

Function reverseString banao jo string ko reverse kare.

1️⃣2️⃣ Convert Celsius to Fahrenheit

Function celsiusToFahrenheit banao jo Celsius degree ko Fahrenheit me convert kare.

Solution
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
}
celsiusToFahrenheit(85);

1️⃣3️⃣ Greet Multiple Users

Function greetMultiple banao jo rest parameters use karke multiple names greet kare.

solution
function greetMultiple(...name){
    let total = "Hello";
    for(let i=0;i<name.length;i++){
        total = total + name[i];
    }
    return total;
}
console.log(greetMultiple(" Het ","Patel ","Kem ","Chho ","Maja ","Ma"));
console.log(greetMultiple(" Darshan ","Patel ","Kem ","Chho ","Maja ","Ma"));
1️⃣4️⃣ Average of Numbers

Arrow function calculateAverage banao jo rest parameters se numbers ka average return kare.
solution
const calculateAverage = (...number) =>{
    let total=0;
    let avg=10;
    for(let i=0;i<number.length;i++){
        total = total + number[i];
    }
    return total/number.length;
}
console.log(calculateAverage(1,2,3,4,5,6,7,8,9));

1️⃣5️⃣ Find Minimum Number

Function findMin banao jo 4 numbers me se smallest number return kare.

solution
function findMin(num1,num2,num3,num4){
    if(num1<num2 && num1<num3 && num1<num4){
        console.log(`${num1} is A  Smallest Number`);
    }
    else if(num2<num1 && num2<num3 && num2<num4){
        console.log(`${num2} is A Smallest Number`);
    }
    else if(num3<num1 && num3<num2 && num3<num4){
        console.log(`${num3} is A Smallest Number`);
    }
    else{
        console.log(`${num4} is A Smallest Number`);
    }
}
findMin(10,5,4,3);
findMin(42,22,58,41);