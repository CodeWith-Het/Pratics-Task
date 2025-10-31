Q1-Create an object for a student with name, age, and isEnrolled.

let obj = {
    name:"Het",
    age:21,
    isEnrolled:"001"
};

console.log(obj);

Q2-Can an object key be a number or boolean? Try this

let obj = {
    12:"Number",
    true:"Yes"
};

console.log(obj);

Q3-Access the value of "first-name" from this object

const user = {
    "first-name":"Het"
};

console.log(user["first-name"]);

Q4-Given a gynamic key let key = "age",how will you access user[key]?

let key = "age";

const user = {
    "first-name":"Het",
    age:21
};

console.log(user[key]);

Q5-From the object below, print the latitube:

const locations = {
    city:"Surat",
    coordinates:{
        lat:23.2,
        lng:77.4
    },
};

console.log(locations.coordinates.lng);
console.log(locations.coordinates.lat);

Q6-what will happen if coordinates is missing? Hpw can you prevent errors?

const locations = {
    city:"Surat",
    coordinatesed:{
        lat:23.2,
        lng:77.4
    },
};

console.log(locations?.coordinates?.lat);

Q7-Destructure the city and lat from the loaction object above

const locations = {
  city: "Surat",
  coordinates: {
    lat: 23.2,
    lng: 77.4,
  },
};

let {
  city,
  coordinates: { lat },
} = locations;

console.log(city);
console.log(lat);

Q8-From the object below, print the latitube:

const user ={
    city:"Toronto",
    address:{
        street:"1346 King George Hwy",
        zip:"V3W 4E3",
        coordinates: {
            lat: 51.2,
            lng: 77.4
        },
    },
}

console.log(user.address.coordinates.lat);

Q9 - Destructure the key "first-name" as a variable called firstName

const user = {
    "first-name":"Het"
};

let {"first-name":FirstName} = user;
console.log(FirstName);

Q-10 Destructure the "last-name" key into a variable called lastName and print it.
const person = {
  "last-name": "Kumar",
  age: 30
};

let {"last-name":lastName} = person;
console.log(lastName);

Q11- use for in log all keys in this object

const couse = {
    title:"Javascript",
    duration:"4 week"
};

for(let key in couse){
    console.log(key);
}

Q12-Use a for...in loop to log all the keys of the product object.
const product = {
  name: "Phone",
  price: 299,
  color: "Black"
};

for(let key in product){
    console.log(key);
}

Q-13 Use a for...in loop to log all the keys of the product object and given all keys value.
const product = {
  name: "Phone",
  price: 299,
  color: "Black"
};

for(let key in product){
    console.log(key,product[key]);
}

Q-14 use Object.enteries() to print all key-value pairs as?

const user = {
    name:"het",
    age:21,
    city:"Surat"
}

let answer = Object.entries(user).forEach(function(value){
    console.log(`${value[0]}:${value[1]}`);
});

console.log(answer);

Q-15 cppy this object using spread oprator 
let original = {
    a:1,
    b:2
};

let copyObject = {...original};
console.log(copyObject);

Q-16 What is this code output
const obj1={
    info:{
        subject:"Maths",
        score:80
    }
};
const clone = {...obj1};

clone.info.score=100;
clone.info.subject="Science";
console.log(obj1.info.subject);
console.log(obj1.info.score);

Q-17 Deep clone the obj1 safety
const obj1={
    info:{
        subject:"Maths",
        score:80
    }
};

let obj2=JSON.parse(JSON.stringify(obj1));
let newObject1=obj2.info.score=100;
let newObject2=obj2.info.subject="Science";
console.log(newObject2);
console.log(newObject1);

Q-18 Rewrite this safety using optionsl chaining

const person={}
console.log(person.profilo.name);

solution
const person={}
console.log(person?.profilo?.name);

Q-19 use a variable to dynamically assign a property

const key = "admin";

const object = {
    emp:"Rahul",
    [key]:"Het"  
};

console.log(object);

Q-20 What will be the output of the above code? Explain how the dynamic key assignment is working.
const keyName = "role";

const employee = {
  name: "Amit",
  [keyName]: "Developer"
};

console.log(employee); // { name: 'Amit', role: 'Developer' }