function createClassroom() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    let classRoomInput = prompt("Please enter the name of the class", "");
    
    //make button 60
    const newButton = document.createElement('button');
    newButton.textContent = classRoomInput;
    newButton.onclick = function() {
        window.location.href = "students.html";
    };
    document.body.appendChild(newButton);

}

function createStudent() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    let classRoomInput = prompt("Please enter the student's name:", "");
    
    //make button 60
    const newButton = document.createElement('button');
    newButton.onclick = function() {
        window.location.href = "units.html";
    };
    newButton.textContent = classRoomInput;
    document.body.appendChild(newButton);

}

function createUnit() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    let classRoomInput = prompt("Please enter the name of the unit:", "");
    
    //make button 60
    const newButton = document.createElement('button');
    newButton.onclick = function() {
        window.location.href = "expectations.html";
    };
    newButton.textContent = classRoomInput;
    document.body.appendChild(newButton);

}

function createExpectation() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    let classRoomInput = prompt("Please enter an expectation:", "");
    
    //make button 60
    const newButton = document.createElement('button');
    newButton.textContent = classRoomInput;
    document.body.appendChild(newButton);

}

