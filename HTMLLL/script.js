
// let taskInput = document.querySelector("#taskInput");
// let addBtn = document.querySelector("#addBtn");
// let taskList = document.querySelector("#taskList");
// let message = document.querySelector("#message");

// addBtn.addEventListener("click", addTask);

// taskInput.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         addTask();
//     }
// });

// function addTask() {

//     let taskValue = taskInput.value.trim();

//     if (taskValue === "") {
//         message.textContent = "Please enter a task!";
//         message.style.color = "red";
//         return;
//     }

//     let li = document.createElement("li");

//     let span = document.createElement("span");
//     span.textContent = taskValue;

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("deleteBtn");

//     li.append(span, deleteBtn);

//     taskList.appendChild(li);

//     taskInput.value = "";
//     message.textContent = "Task added successfully!";
//     message.style.color = "green";
// }

// taskList.addEventListener("click", function(event) {

//     if (event.target.classList.contains("deleteBtn")) {

//         event.target.parentElement.remove();

//     } else if (event.target.tagName === "SPAN") {

//         event.target.classList.toggle("completed");

//     }

// });

























let count = 0;

let countDisplay = document.getElementById("count");

let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", function () {
    count++;
    countDisplay.innerText = count;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    countDisplay.innerText = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countDisplay.innerText = count;
});








const heading = document.createElement("h1");
const paragraph = document.createElement("p");
const button = document.createElement("button");

console.log(heading);
console.log(paragraph);
console.log(button);







let num = 17;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime" : "Not Prime");











let arr = [10, 20, 45, 30, 45, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);











let student = {
    name: "Kartik",
    age: 21,
    course: "B.Tech",
    skills: ["Java", "JavaScript", "React"]
};

let { name, age, skills } = student;

console.log(name);
console.log(age);
console.log(skills);









let numm = 12345;
let reverse = 0;

while (numm > 0) {
    let digit = numm % 10;
    reverse = reverse * 10 + digit;
    numm = Math.floor(numm / 10);
}

console.log(reverse);










let arrr = [1, 2, 3, 5, 6];
let n = 6;

let expected = n * (n + 1) / 2;
let actual = 0;

for (let num of arrr) {
    actual += num;
}

console.log(expected - actual);





let str = "javascript";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}

console.log(result);











let nummm = 121;
let original = num;
let reversee = 0;

while (num > 0) {
    let digit = num % 10;
    reversee = reversee * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(original === reversee ? "Palindrome" : "Not Palindrome");