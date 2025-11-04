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


---> Write JavaScript code to get the visible text content (excluding hidden text and HTML tags) of an element using innerText.
let span = document.querySelector("#spanText");
span.innerText="Hello ji";

--->Update the text of a paragraph using innerText and observe what happens to its child elements.
let p = document.querySelector("#pText");
p.innerText="Hello ji kaise ho aap Mithai khai?";

---->Use textContent to get the full text content of an element including all hidden text, ignoring HTML tags
console.log(document.getElementById("myDiv").textContent);

---->Demonstrate with an example how textContent handles spaces and line breaks differently than innerText
let p = document.getElementById("textBro");
p.textContent="       bro kaise ho";

---->Write code to retrieve all text inside a parent element using textContent including its child elements.
let childDiv=document.querySelector("#childDiv");
childDiv.textContent="Me hu child Div";

---->Change the text content of an element using textContent without affecting its HTML structure.
let myDiv = document.querySelector("#myChild2");
myDiv.textContent="Hello Brother big Fan";

---->Write JavaScript to dynamically insert HTML content like headings and paragraphs inside a div using innerHTML.
let myDiv = document.querySelector("#mainDiv");
myDiv.innerHTML = `<h1>Hello ji kaise ho aap lok</h1>
<p>jay Shree Ram</p>`;

---> Use innerHTML to add new list items to an unordered list dynamically.
let ul = document.querySelector("#myUl");
ul.innerHTML=`<li>Home</li> 
<li>About</li>
<li>Product</li>`

----> Write code to get the full HTML content inside an element using innerHTML.
let html = document.querySelector(".myH1");
html.innerHTML=` <h1 id="title"></h1>
    <p id="desc">Welcome!</p>
    <button id="clickBtn">click me</button>

    <div class="box">box1</div>
    <div class="box">box2</div>
    <div class="box">box3</div>
    <div class="box">box4</div>
    <div class="box">box5</div>`