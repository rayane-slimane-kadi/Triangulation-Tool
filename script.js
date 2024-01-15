function addCourse() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    var input = prompt("Please enter the name of the course:", "");

    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        var card = document.createElement("div");
        var viewButton = document.createElement("button");
        viewButton.textContent = "View";
        var name = document.createElement("h3");
        name.textContent = input;
        var content = document.querySelector(".content");
    
        card.className = "card";
        viewButton.className = "view-button";
        name.className = "name";
    
        content.appendChild(card);
        card.appendChild(name);
        card.appendChild(viewButton);

        var deleteButton = createDeleteButton(deleteCourse);
        card.appendChild(deleteButton);
    }
}

function addStudent() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    var input = prompt("Please enter the name of the student:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        var card = document.createElement("div");
        var viewButton = document.createElement("button");
        viewButton.textContent = "View";
        var name = document.createElement("h3");
        name.textContent = input;
        var content = document.querySelector(".content");

        card.className = "card";
        viewButton.className = "view-button";
        name.className = "name";

        content.appendChild(card);
        card.appendChild(name);
        card.appendChild(viewButton);

        var deleteButton = createDeleteButton(deleteCourse);
        card.appendChild(deleteButton);
    }
 
}

function addUnit() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    var input = prompt("Please enter the name of the unit:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        var card = document.createElement("div");
        var viewButton = document.createElement("button");
        viewButton.textContent = "View";
        var name = document.createElement("h3");
        name.textContent = input;
        var content = document.querySelector(".content");
    
        card.className = "card";
        viewButton.className = "view-button";
        name.className = "name";
    
        content.appendChild(card);
        card.appendChild(name);
        card.appendChild(viewButton);

        var deleteButton = createDeleteButton(deleteCourse);
        card.appendChild(deleteButton);
    }
   
 
}

function addExpectation() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    var input = prompt("Please enter an expectation:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        var card = document.createElement("div");
        var commentButton = document.createElement("button");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        commentButton.textContent = "Add Comment";
        var name = document.createElement("label");
        name.textContent = input;
        var content = document.querySelector(".content");
        var nameContainer = document.createElement("div");
        var checkboxContainer = document.createElement("div");
        var commentContainer = document.createElement("div");
    
        card.className = "card";
        commentButton.className = "add-comment-button";
        name.className = "name";
        checkbox.className = "checkbox";
        nameContainer.className = "name-container";
        checkboxContainer.className = "checkbox-container";
        commentContainer.className = "comment-container";
    
        content.appendChild(card);
        card.appendChild(nameContainer);
        card.appendChild(checkboxContainer);
        card.appendChild(commentContainer);
        nameContainer.appendChild(name);
        checkboxContainer.appendChild(checkbox);
        commentContainer.appendChild(commentButton);

        var deleteButton = createDeleteButton(deleteCourse);
        card.appendChild(deleteButton);

        commentButton.onclick = function(event) {
            var clickedButton = event.target;
            var input = prompt("Please add a comment:", "");
            if (input === '') {
                alert('Input is blank!');
            }
            else if (input === null) {
                
            }
            else {
                var name = document.createElement("label");
                name.textContent = "Comment: " + input;
                name.className = "name-container";
                clickedButton.parentNode.appendChild(name);
                clickedButton.remove();
            }
                }
            }
}

function createDeleteButton(deleteFunction) { //the create delete button needs a function input to assign to that delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", deleteFunction);

    return deleteButton;
}

function deleteCourse() {
    var confirmation = confirm("Are you sure you want to delete this course?");
    if (confirmation) {
        var card = this.parentNode;
        card.parentNode.removeChild(card);
    }
}

function deleteStudent() {
    var confirmation = confirm("Are you sure you want to delete this student?");
    if (confirmation) {
        var card = this.parentNode;
        card.parentNode.removeChild(card);
    }
}

function deleteUnit() {
    var confirmation = confirm("Are you sure you want to delete this unit?");
    if (confirmation) {
        var card = this.parentNode;
        card.parentNode.removeChild(card);
    }
}

function deleteExpectation() {
    var confirmation = confirm("Are you sure you want to delete this expectation?");
    if (confirmation) {
        var card = this.parentNode;
        card.parentNode.removeChild(card);
    }
}
