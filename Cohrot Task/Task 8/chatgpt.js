Q1. You have an <h1> tag with id "title".Write JavaScript code to change its text to "Hello JavaScript!"
let h1 = document.getElementById("title");
h1.textContent="Hello Javascript";

Q2. There is a <p id="desc">Welcome!</p> element.Change its text color to red using JavaScript.
let p = document.getElementById("desc");
p.style.color="red";

Q3. You have these HTML elements:

<p class="info">First</p>
<p class="info">Second</p>
<p class="info">Third</p>


Use JavaScript to make all of them have a yellow background.

? -->Solution<--
let p = document.getElementsByClassName("info");

for(let element of p){
    element.style.backgroundColor = "yellow";
}

Q4. There are 5 divs with class "box".Write JavaScript to give all of them a border of "2px solid blue".
let divBox = document.querySelectorAll(".box");

divBox.forEach(element => {
    element.style.border="2px solid blue";
});

There are 3 paragraphs with the class "text".Write JavaScript to change their text color to green and font size to 20px.
let p = document.querySelectorAll(".text");
p.forEach(element => {
   element.style.color = "green";
   element.style.fontSize="20px"; 
});

Q6. Change the text of all elements with class "note" to "Updated"
let  pText = document.querySelectorAll(".note");
pText.forEach(element => {
    element.textContent="Updated";
});

Q7. You have: <h2 class="heading">Welcome</h2>
Change its text to "Hello User!" using querySelector.
let h2 = document.querySelector(".heading");
h2.textContent="Hello User!";

Q8. You have: <button id="submitBtn">Submit</button>Change its background color to green using querySelector.
let btn = document.querySelector("#submitBtn");
btn.style.backgroundColor="green";
btn.style.color="white";

Q9. Given: <div class="card"><p>Hello</p></div>Use querySelector to change the color of the <p> tag to blue.
let p = document.querySelector(".card");
p.style.color="blue";

Q10. You have: <li>Apple</li><li>Banana</li><li>Orange</li> Change the color of all list items to purple using querySelectorAll.
let li = document.querySelectorAll("li");
li.forEach(element => {
  element.style.color="purple";  
});

Q11. If you have multiple elements with class "product",change their text to "Add to Cart" using querySelectorAll.
let div= document.querySelectorAll(".product");
div.forEach(element => {
   element.textContent="Add to Cart";
});

Q12. Write an example where you select 3 <div> elements with querySelectorAll() and change their background colors to red, green, and blue respectively.
let div = document.querySelectorAll(".hey");
div.forEach(element => {
    element.style.backgroundColor="red";
    element.style.backgroundColor="green";
    element.style.backgroundColor="blue";
});