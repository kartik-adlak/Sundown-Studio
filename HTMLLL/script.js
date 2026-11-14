
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