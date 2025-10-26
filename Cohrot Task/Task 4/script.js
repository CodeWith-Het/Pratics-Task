//* 🧮 Task 1: Simple Calculator
let num1 = Number(prompt("Enter a number 1"));
let num2 = Number(prompt("Enter a number 2"));

console.log(`Addition is ${num1} + ${num2} =${num1+num2}`);
console.log(`Subtraction is ${num1} - ${num2} =${num1-num2}`);
console.log(`Multiplication is ${num1} * ${num2} =${num1*num2}`);
console.log(`Divided is ${num1} / ${num2} =${num1/num2}`);

//* 🌡️ Task 2: Temperature Converter

let celsius = Number(prompt("Enter a number"));
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} to fahrenhit is = ${fahrenheit}`);

//* 🧾 Task 3: Simple Marks Calculator

let maths = Number(prompt("Enter marks"));
let physics = Number(prompt("Enter marks"));
let chemistry = Number(prompt("Enter marks"));
let english = Number(prompt("Enter marks"));
let computer = Number(prompt("Enter marks"));

let total = (maths+physics+chemistry+english+computer);

let totalPaperMarks=100*5;

let percentage = (total/totalPaperMarks)*100;

console.log(`Student Percetage is = ${percentage}%`);

if(percentage > 100){
    console.log("Bhai Galti hui he tujse");
}
else if(percentage >= 91 && percentage <= 100){
    console.log("A+ Grade");
}
else if(percentage >= 81 && percentage <= 90){
    console.log("B Grade");
}
else if(percentage >= 71 && percentage <= 80){
    console.log("B+ Grade");
}
else if(percentage >= 61 && percentage <= 70){
    console.log("C Grade");
}
else if(percentage >= 51 && percentage <= 60){
    console.log("C+ Grade");
}
else if(percentage >= 41 && percentage <= 50){
    console.log("D Grade");
}
else{
    console.log("You are Fail");
}

// * 💰 Task 4: Currency Converter

let indCurrency = Number(prompt("Enter a number"));
let usdCurrency = indCurrency/83;
let eurCurrency = indCurrency/90;    
let gbpCurrency = indCurrency/100;   
let jpyCurrency = indCurrency/0.61;
let russiaCurrency = indCurrency/0.92;
let cnyCurrency = indCurrency/0.08;
let vefCurrency = indCurrency/233;

console.log(`${indCurrency} ₹ indian Ruppes to USD ${usdCurrency} $`);
console.log(`${indCurrency} ₹ indian Ruppes to Euro ${eurCurrency} €`);
console.log(`${indCurrency} ₹ indian Ruppes to Britis ${gbpCurrency} £`);
console.log(`${indCurrency} ₹ indian Ruppes to Japanes ${jpyCurrency} ¥`);
console.log(`${indCurrency} ₹ indian Ruppes to Russia ${russiaCurrency} ₽`);
console.log(`${indCurrency} ₹ indian Ruppes to China ${cnyCurrency} ¥`);
console.log(`${indCurrency} ₹ indian Ruppes to Vefanam ${vefCurrency} ¥`);