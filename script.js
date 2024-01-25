function addCourse() {
    event.preventDefault(); //prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    var input = prompt("Please enter the name of the course:", "");

    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        //this is creating the actual "card" for the course to be displayed
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

        var deleteButton = createDeleteButton(deleteStudent);
        card.appendChild(deleteButton);
    }
}

function addStudent() {
    event.preventDefault(); //prevent the browser from refreshing when pressing the "Add" button

    var input = prompt("Please enter the name of the student:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        //creating card
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
    event.preventDefault(); //prevent the browser from refreshing when pressing the "Add" button

    var input = prompt("Please enter the name of the unit:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        //creating card
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
    event.preventDefault(); //prevent the browser from refreshing when pressing the "Add" button

    var input = prompt("Please enter an expectation:", "");
    if (input === '') {
        alert('Input is blank!');
    }
    else if (input === null) {
        
    }
    else {
        //expectation card that includes things such as checkboxes
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

        //lets you comment when pressed
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

function deleteCourse() { //function that will actually delete the course
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

    var file = fileInput.files[0];

    if (file && file.name.endsWith('.csv')) { //getting specicically csv files
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
    //split csv into rows
    var rows = csvContent.split('\n');

    //get course name
    var fileName = document.getElementById('file-input').files[0].name;
    var courseName = fileName.replace('.csv', '');

    // Save course name in local storage
    saveCourseName(courseName);

    // process each row of the CSV
    rows.forEach(row => {
        // split the row into columns
        var columns = row.split(',');

        // check if there are at least two columns (first name and last name)
        if (columns.length >= 2) {
            var firstName = columns[0].trim();
            var lastName = columns[1].trim();

            // Save student in local storage for the specified course
            saveStudent(courseName, firstName, lastName);
        }
    });

    // Load after processed
    if (window.location.href.includes('courses.html')) {
        loadCourses();
    }
    else if (window.location.href.includes('courses.html')) {
        loadStudents(); //this is not working for some reason
    }
}

function saveCourseName(courseName) {
    //get existing courses names from local storage
    var existingCourses = JSON.parse(localStorage.getItem('courses')) || [];

    //add the new course name
    existingCourses.push(courseName);

    //save the updated course names back to local storage
    localStorage.setItem('courses', JSON.stringify(existingCourses));
}

function saveStudent(courseName, firstName, lastName) {
    //get existing students for the course from local storage
    var existingStudents = JSON.parse(localStorage.getItem(courseName)) || [];

    //add the new student
    existingStudents.push({ firstName, lastName });

    //save the updated students back to local storage
    localStorage.setItem(courseName, JSON.stringify(existingStudents));
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
    // get existing course names from local storage
    var existingCourses = JSON.parse(localStorage.getItem('courses')) || [];

    // get the content container
    var content = document.querySelector(".content");

    // clear the existing content
    content.innerHTML = '';

    // go through every existing courses and add them to the content
    existingCourses.forEach(courseName => {
        // create the course visually
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

function loadStudents() {
    // get the selected course name from local storage
    var selectedCourse = localStorage.getItem('selectedCourse');

    // get existing students for the selected course from local storage
    var existingStudents = JSON.parse(localStorage.getItem(selectedCourse)) || [];

    // get the content container
    var content = document.querySelector(".content");

    // clear the existing content
    content.innerHTML = '';

    // go through every existing students and add them to the content
    existingStudents.forEach(student => {
        // Create the student visually
        createStudent(student.firstName, student.lastName);
    });
}


// New function to create a student visually
function createStudent(firstName, lastName) {
    var card = document.createElement("div");
    var viewButton = document.createElement("button");
    viewButton.textContent = "View";
    var name = document.createElement("h3");
    name.textContent = `${firstName} ${lastName}`;

    card.className = "card";
    viewButton.className = "view-button";
    name.className = "name";

    card.appendChild(name);
    card.appendChild(viewButton);

    var deleteButton = createDeleteButton(deleteStudent);
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

