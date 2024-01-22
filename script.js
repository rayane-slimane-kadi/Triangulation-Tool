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

function fileUploaded() {
    //this function is mostly from from stack overflow
    var fileInput = document.getElementById('file-input');
    var contentDiv = document.querySelector('.content');

    var file = fileInput.files[0];

    if (file && file.name.endsWith('.csv')) {
        var reader = new FileReader();
    
        reader.onload = function (e) {
            var csvContent = e.target.result;
            //get csv content
            getCSVContent(csvContent);
        };
        reader.readAsText(file);
    } else {
        alert('Please select a valid CSV file.');
    }
}

function getCSVContent(csvContent) {
    // Parse CSV content into an array of rows
    var rows = csvContent.split('\n');

    // Extract course name from the file name (excluding the extension)
    var fileName = document.getElementById('file-input').files[0].name;
    var courseName = fileName.replace('.csv', '');

    // Save course name in local storage
    saveCourseName(courseName);

    // Process each row of the CSV
    rows.forEach(row => {
        // Split the row into columns
        var columns = row.split(',');

        // Check if there are at least two columns (first name and last name)
        if (columns.length >= 2) {
            var firstName = columns[0].trim();
            var lastName = columns[1].trim();

            // Save student in local storage
            saveStudent(courseName, firstName, lastName);
        }
    });
}

function saveCourseName(courseName) {
    // Retrieve existing courses names from local storage
    var existingCourses = JSON.parse(localStorage.getItem('courses')) || [];

    // Add the new course name
    existingCourses.push(courseName);

    // Save the updated course names back to local storage
    localStorage.setItem('courses', JSON.stringify(existingCourses));
}

function saveStudent(courseName, firstName, lastName) {
    // Retrieve existing students for the course from local storage
    var existingStudents = JSON.parse(localStorage.getItem(courseName)) || [];

    // Add the new student
    existingStudents.push({ firstName, lastName });

    // Save the updated students back to local storage
    localStorage.setItem(courseName, JSON.stringify(existingStudents));
}

function loadCourses() {
    // Retrieve existing course names from local storage
    var existingCourses = JSON.parse(localStorage.getItem('courses')) || [];

    // Get the content container
    var content = document.querySelector(".content");

    // Clear the existing content
    content.innerHTML = '';

    // Iterate through existing courses and add them to the content
    existingCourses.forEach(courseName => {
        // Create the course visually
        createCourse(courseName);
    });
}

// New function to create a course visually
function createCourse(courseName) {
    var card = document.createElement("div");
    var viewButton = document.createElement("button");
    viewButton.textContent = "View";
    var name = document.createElement("h3");
    name.textContent = courseName;

    card.className = "card";
    viewButton.className = "view-button";
    name.className = "name";

    card.appendChild(name);
    card.appendChild(viewButton);

    var deleteButton = createDeleteButton(deleteCourse);
    card.appendChild(deleteButton);

    // Append the card to the content container
    document.querySelector(".content").appendChild(card);
}

function loadCourses() {
    // Retrieve existing course names from local storage
    var existingCourses = JSON.parse(localStorage.getItem('courses')) || [];

    // Get the content container
    var content = document.querySelector(".content");

    // Clear the existing content
    content.innerHTML = '';

    // Iterate through existing courses and add them to the content
    existingCourses.forEach(courseName => {
        // Create the course visually
        createCourse(courseName);
    });
}

// New function to create a course visually
function createCourse(courseName) {
    var card = document.createElement("div");
    var viewButton = document.createElement("button");
    viewButton.textContent = "View";
    var name = document.createElement("h3");
    name.textContent = courseName;

    card.className = "card";
    viewButton.className = "view-button";
    name.className = "name";

    card.appendChild(name);
    card.appendChild(viewButton);

    var deleteButton = createDeleteButton(deleteCourse);
    card.appendChild(deleteButton);

    // Append the card to the content container
    document.querySelector(".content").appendChild(card);
}

function clearLocalStorage() {
    // Clear all local storage
    localStorage.clear();

    // Clear the content on the page
    var content = document.querySelector(".content");
    content.innerHTML = '';
    alert("Local storage cleared successfully.");
}
