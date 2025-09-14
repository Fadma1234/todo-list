const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("Add-btn");
const list = document.getElementById("list");
//add a task
function addTask() {
    //trim() method removes whitespace from both ends of a string.
    const text = inputBox.value.trim();
    if (text == "") 
      if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  // click to toggle "checked"
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });
//append method adds a node to the end of the list of children of a specified parent node.
  list.appendChild(li);
  inputBox.value = "";
}

// Add task with button
addBtn.addEventListener("click", addTask);



// Make existing tasks clickable too
document.querySelectorAll("#list li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

});


// Add remove button to new tasks
function addTask() {
    //trim() method removes whitespace from both ends of a string.
    const text = inputBox.value.trim();
    if (text == "") 
      if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;
    // click to toggle "checked"
    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });
    const removeBtn = document.createElement("span");
    removeBtn.textContent = "×";
    removeBtn.className = "remove";
    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the li click event
        li.remove();
    });
    li.appendChild(removeBtn);
    list.appendChild(li);
    inputBox.value = "";
}
