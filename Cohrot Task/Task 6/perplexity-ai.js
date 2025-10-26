# 🧠 JavaScript Array Methods – Practice Questions (Part 1)

## 1. push() Method – Practice Questions
 Create an empty array and add 5 numbers using `push()` one by one.  
let arr = [];
arr.push(93);
arr.push(154);
arr.push(81);
arr.push(150);
arr.push(75);

console.log(arr);

- Add multiple elements at once in an array (e.g., `push(6,7,8)`).  
let arr = [];
arr.push(51,24,55,74,46);
console.log(arr);

- Check the output of `array.length` after using `push()`.  
let arr = [];
console.log(arr.length);

arr.push(34,52,44);
console.log(arr.length);

- Write a function that adds `n` elements to an array based on user input.  
function addElements(){
    let arr = [];
    let n = Number(prompt("How many Number store in Array"));

    for(let i=0;i<n;i++){
        let value = prompt(`Enter Element ${i+1}`);
        arr.push(value);
    }
    console.log("Final Array:",arr);
}
addElements();

- Merge two arrays using `push()` and the spread operator.  
let arr1 = [];
arr1.push(1,2,3);
let arr2 = [];
arr2.push(4,5,6);

let result = (`${[...arr1]},${[...arr2]}`);
console.log(result);

- Simulate a **stack (LIFO)** using `push()` and `pop()`.  
let arr = [];
arr.push(45);
arr.push(85);
arr.push(41);
arr.push(99);
console.log(arr);

arr.pop();
console.log("After pop ",arr);

- Real-world example: Add products to a shopping cart using `push()`.  
function addProduct(){
    let produtcArray = [];
    let added = parseInt(prompt("How Many Product add in your list"));

    if (isNaN(added) || added <= 0) {
        console.log("Please enter a valid number!");
        return;
    }

    for(let i=0;i<added;i++){
        let oneByOneAdd = prompt(`Enter your Product ${i+1}:`);
        produtcArray.push(oneByOneAdd);
    }
    console.log("::List Of Products::");
    console.log(produtcArray);
}
addProduct();


## 2. pop() Method – Practice Questions

- Remove and print the last element of an array using `pop()`.  
let arr = [1,2,3,4,5];
arr.pop();
console.log(arr);

- Apply `pop()` three times and print the output after each.  
let arr = [1,2,3,4,5,6];
arr.pop();
console.log("After one time pop",arr);
arr.pop();
console.log("After Two time pop",arr);
arr.pop();
console.log("After Three time pop",arr);

- Print the array length after each `pop()` operation.  
let arr = [1,2,3,4,5];
console.log(arr.length);
arr.pop();
console.log(arr.length);

- Apply `pop()` on an empty array and observe the output (`undefined`).  
let arr = [];
console.log(arr.pop());

- Create a situation where you can compare `pop()` and `shift()` behavior.  
let arr1 = [1,2,3,4,5];
console.log(arr1.pop());
console.log(arr1.pop());

let arr2 = [1,2,3,4,5];
console.log(arr2.shift());
console.log(arr2.shift());

- Write a function that removes the last 2 elements each time using `pop()`. 
function removesTwoElements(removeVal){
    removeVal.pop();
    removeVal.pop();
    return removeVal;
}

let array = [1,2,3,4,5,6,7,8,9];
console.log(removesTwoElements(array));

## 3. shift() Method – Practice Questions

- Remove the first element from an array using `shift()`.  
let arr = [1,2,3,4,5];
console.log(arr.shift());

- Simulate a **queue system** where `shift()` removes the front element.  
function queuePushMethod(queue,value){
    queue.push(value);
    console.log(`${value} is added in queue`);
    return queue;
}

function queueshiftMethod(queue){
    if (queue === 0){
        console.log("Empty");
    }
    else{
        let remove = queue.shift();
        console.log(`${remove} value is remove`);
    }
    return queue;
}

let queue = [];

queuePushMethod(queue,54);
queuePushMethod(queue,74);
queuePushMethod(queue,62);
queuePushMethod(queue,98);
queuePushMethod(queue,11);

console.log("Current Queue:", queue);

queueshiftMethod(queue);
console.log("After remove element:",queue);

queueshiftMethod(queue);
console.log("After remove element:",queue);

- Apply `shift()` three times and print the final array.  
let arr = [1,2,3,4,5,6,7];
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

- Explain the performance difference between `shift()` (O(n)) and `pop()` (O(1)).  
let arr1 = [1,2,3,4,5,6];
let result1 = arr1.shift();
console.log(result1);
console.log(arr1);

console.log("\n");
let arr2 = [1,2,3,4,5,6];
let result2 = arr2.pop();
console.log(result2);
console.log(arr2);

- Write a function that keeps shifting elements until an odd number appears.  
function evenShifting(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[0]%2===0){
            arr.shift();
        }
    }
    return arr;
}

let arr = [2,6,4,8,10,1,5,3,9];
console.log(evenShifting(arr));


- Use `shift()` to remove and store the removed element before printing it. 
let arr = [1,2,3,5,1,2,4,8,4];
let removesElement = arr.shift();
console.log(removesElement);
console.log("new Array:",arr);

## 🔟 13. unshift() Method – Practice Questions

- Add an element at the beginning of an array using `unshift()`.  
let arr = [52,14,55,32,4,84];
arr.unshift(41,82);
console.log(arr);

- Add multiple elements at the beginning in one call (`unshift('x','y','z')`).  
let arr = [52,14,55,32,4,84];
arr.unshift(41,82,50,15);
console.log(arr);

- Simulate a **queue** where new users join from the front using `unshift()`.  

let queue = [45,22,33,15,87,96];

function queueAddElements(queue,val){
    queue.unshift(val);
    console.log(`${val} is added front side`);
    return queue;
}

function queueRemoveElements(queue){
    if(queue.lenght===0){
        console.log("empty");
    }
    else{
        let removesElement = queue.shift();
        console.log(`${removesElement} is remove front side`);
        return queue;
    }
}

queueAddElements(queue,42);
queueAddElements(queue,95);
queueAddElements(queue,47);

console.log("current Queue:-",queue);

queueRemoveElements(queue);
queueRemoveElements(queue);

console.log("After Queue is:-",queue);

- Use both `push()` and `unshift()` together for mixed insertion.  
let arr1 = [21,52,41,22];
arr1.push(85);
console.log(arr1);

let arr2 = [21,52,41,22];
arr2.unshift(85);
console.log(arr2);

- Write a function that always adds a new element to the start and returns the new lenght.  
let arr = [1,5,4,8,9,2];

function addToStart(arr,val){
    arr.unshift(val);
    return arr.lenght;
}

addToStart(arr,3);
addToStart(arr,71);
console.log(arr);
console.log(arr.length);

## 🔟 14. reverse() Method – Practice Questions

- Reverse the array `[11,12,13,14,15]` using `reverse()`.  
- Reverse a string using `split()`, `reverse()`, and `join()`.  
- Reverse an array twice and verify that it becomes original again.  
- Reverse the first row of a 2D array.  
- Write a palindrome check logic using `reverse()`.  
- Understand and explain how `reverse()` mutates the original array (reference behavior).  
- Write a function that swaps the first and last elements of an array.  

---

## 🔟 15. filter() Method – Practice Questions

- Extract all even numbers from `[12,15,16,17,18]`.  
- Filter an array of objects to get only users with `age > 25`.  
- Get only strings starting with the letter `"A"` from a string array.  
- Return only numbers divisible by 3.  
- Remove falsy values (`null`, `undefined`, `0`, `false`) from an array.  
- Write a filter logic to get only **prime numbers**.  
- Filter products with `price > 1000` from a shopping cart array.  
- Write a logic to filter unique values from an array.  

---

## 🔟 16. reduce() Method – Practice Questions

- Find the **sum** of `[11,12,13,14,15]` using `reduce()`.  
- Find the **maximum** and **minimum** value in an array using `reduce()`.  
- Convert a string array `["a","b","c"]` into a single string using `reduce()`.  
- Calculate the **total price** of a shopping cart using `reduce()`.  
- Find the **total age** in an array of user objects using `reduce()`.  
- Create a **frequency counter** that counts occurrences of array elements.  
- Flatten nested arrays using `reduce()`.  
- Write an **average calculator** using `reduce()` and array length.  
- Build a **voting system** that counts votes using `reduce()`.  