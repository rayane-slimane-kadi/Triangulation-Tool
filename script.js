// Function to add a new course
function addCourse() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    // Get course name from the user
    var input = prompt("Please enter the name of the course:", "");

    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        // Do nothing if the user clicks cancel
    }
    else {
        // Create a new card element for the course
        var card = document.createElement("div");
        var viewButton = document.createElement("button");
        viewButton.textContent = "View";
        var name = document.createElement("h3");
        name.textContent = input;
        var content = document.querySelector(".content");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Redirect to students.html when "View" button is clicked
        viewButton.onclick = function() {
            window.location.href = "students.html";
        }
    
        card.className = "card";
        viewButton.className = "view-button";
        name.className = "name";
        deleteButton.className = "delete-button";
    
        // Append elements to the content container
        content.appendChild(card);
        card.appendChild(name);
        card.appendChild(viewButton);
        card.appendChild(deleteButton);

        // delete when button clicked
        deleteButton.onclick = function(event) {
            var clickedButton = event.target;
            if (confirm("Warning! This will delete this course and all information within it!")) {
                clickedButton.parentNode.remove();
            }
        }
    }
}

// Function to add a new student
function addStudent() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    // Get student name from the user
    var input = prompt("Please enter the name of the student:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        // Do nothing if the user clicks cancel
    }
    else {
        // Create a new card element for the student
        var card = document.createElement("div");
        var viewButton = document.createElement("button");
        viewButton.textContent = "View";
        var name = document.createElement("h3");
        name.textContent = input;
        var content = document.querySelector(".content");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Redirect to units.html when "View" button is clicked
        viewButton.onclick = function() {
            window.location.href = "units.html";
        }

        card.className = "card";
        viewButton.className = "view-button";
        name.className = "name";
        deleteButton.className = "delete-button";

        // Append elements to the content container
        content.appendChild(card);
        card.appendChild(name);
        card.appendChild(viewButton);
        card.appendChild(deleteButton);

        // delete when button clicked
        deleteButton.onclick = function(event) {
            var clickedButton = event.target;
            if (confirm("Warning! This will delete this student and all information within it!")) {
                clickedButton.parentNode.remove();
            }
        }
    }
}

// Function to add a new unit
function addUnit() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    // Get unit name from the user
    var input = prompt("Please enter the name of the unit:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        // Do nothing if the user clicks cancel
    }
    else {
        // Create a new card element for the unit
        var card = document.createElement("div");
        var viewButton = document.createElement("button");
        viewButton.textContent = "View";
        var name = document.createElement("h3");
        name.textContent = input;
        var content = document.querySelector(".content");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        // Redirect to expectations.html when "View" button is clicked
        viewButton.onclick = function() {
            window.location.href = "expectations.html";
        }
    
        card.className = "card";
        viewButton.className = "view-button";
        name.className = "name";
        deleteButton.className = "delete-button";

        // Append elements to the content container
        content.appendChild(card);
        card.appendChild(name);
        card.appendChild(viewButton);
        card.appendChild(deleteButton);

        // delete when button clicked
        deleteButton.onclick = function(event) {
            var clickedButton = event.target;
            if (confirm("Warning! This will delete this unit and all information within it!")) {
                clickedButton.parentNode.remove();
            }
        }
    }
}

// Function to add a new expectation
function addExpectation() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    // Get expectation from the user
    var input = prompt("Please enter an expectation:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        // Do nothing if the user clicks cancel
    }
    else {
        // Create a new card element for the expectation
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
        var deleteContainer = document.createElement("div");
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
    
        card.className = "card";
        commentButton.className = "add-comment-button";
        name.className = "name";
        checkbox.className = "checkbox";
        nameContainer.className = "name-container";
        checkboxContainer.className = "checkbox-container";
        commentContainer.className = "comment-container";
        deleteContainer.className = "delete-container";
        deleteButton.className = "delete-button";
    
        // Append elements to the content container
        content.appendChild(card);
        card.appendChild(nameContainer);
        card.appendChild(checkboxContainer);
        card.appendChild(commentContainer);
        nameContainer.appendChild(name);
        checkboxContainer.appendChild(checkbox);
        commentContainer.appendChild(commentButton);
        checkboxContainer.appendChild(deleteContainer);
        deleteContainer.appendChild(deleteButton);

        // Handle adding a comment when "Add Comment" button is clicked
        commentButton.onclick = function(event) {
            var clickedButton = event.target;
            var input = prompt("Please add a comment:", "");
            if (input === '') {
                alert('Input is blank!');
            }
            else if (input === null) {
                // Do nothing if the user clicks cancel
            }
            else {
                var name = document.createElement("label");
                name.textContent = "Comment: " + input;
                name.className = "name-container";
                clickedButton.parentNode.appendChild(name);
                clickedButton.remove();
            }
        }

        // delete when button clicked
        deleteButton.onclick = function(event) {
            var clickedButton = event.target;
            if (confirm("Warning! This will delete this expectation and all information within it!")) {
                clickedButton.parentNode.parentNode.parentNode.remove();
            }
        }
    }
}
