document.addEventListener("DOMContentLoaded", () => {

  // Add event listener to submit button
  document.getElementById("create-task-form").addEventListener("submit", createTask);
  
  function createTask(event){
    // Stop submit button from doing what it usually does--saving to a database
    event.preventDefault();

    
    // Save input from text field to variable
    const description = document.getElementById("new-task-description").value;
    // get Unordered List id 
    const list = document.querySelector("ul");
    // Create list item
    const newItem = document.createElement("li");
    // Assign input to list item 
    newItem.textContent = description
    // append List Item to Unordered List
    list.appendChild(newItem);

    // Create delete button
    const deleteBtn = document.createElement("button");
    // Append button to List Item
    newItem.appendChild(deleteBtn);
    // Name the delete button
    deleteBtn.textContent = "x";
    // Add listener to delete button, add action to delete button
    deleteBtn.addEventListener("click", function(){newItem.remove()});
  }

});