let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
 
addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
 
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
 //add checkbox//
  let listItem = document.createElement("li");
  let checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.addEventListener("change", function(){
    listItem.classList.toggle("completed")});

  listItem.innerText = taskText;
//task text//
  let textSpan = document.createElement("span");
  textSpan.innerText = taskText;
  textSpan.contentEditable = true;
 
  taskList.appendChild(listItem);
  taskInput.value = ""; // Clear the input field
});
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    taskList.removeChild(event.target);
  }
});