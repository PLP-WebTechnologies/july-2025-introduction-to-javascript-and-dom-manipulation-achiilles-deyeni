// Part 1: Variables, Conditionals

let age = 18;
let message;

// Simple conditional
if (age >= 18) {
  message = "You are an adult!";
} else {
  message = "You are a minor!";
}

// Output to the page
document.getElementById(
  "basic-output"
).textContent = `Age: ${age} → ${message}`;

// Part 2: Functions

// Function 1: Calculate total
function showTotal(a, b) {
  let total = a + b;
  document.getElementById(
    "function-output"
  ).textContent = `The total is: ${total}`;
}

// Function 2: Format string
function greetUser(name) {
  return `Hello, ${name}! Welcome to JS fundamentals 🚀`;
}
console.log(greetUser("Student"));

// Part 3: Loops

// Loop 1: Countdown using for loop
function countdown(start) {
  let output = document.getElementById("loop-output");
  output.innerHTML = "";

  for (let i = start; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    output.appendChild(li);
  }
}

// Loop 2: Array iteration using forEach
let fruits = ["Apple", "Banana", "Grapes"];
fruits.forEach((fruit) => console.log(fruit));

// Part 4: DOM Manipulation

// Example 1: Toggle visibility
let toggleBtn = document.getElementById("toggle-btn");
let domMessage = document.getElementById("dom-message");

toggleBtn.addEventListener("click", () => {
  if (domMessage.style.display === "none") {
    domMessage.style.display = "block";
  } else {
    domMessage.style.display = "none";
  }
});

// Example 2: Add list items dynamically
let addItemBtn = document.getElementById("add-item-btn");
let dynamicList = document.getElementById("dynamic-list");

let counter = 1;
addItemBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = `New item ${counter}`;
  dynamicList.appendChild(li);
  counter++;
});

// Example 3: Change text dynamically after 2 seconds
setTimeout(() => {
  domMessage.textContent = "This message changed after 2 seconds!";
}, 2000);
