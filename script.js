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
    
    
    
    var div = document.createElement("div");
    div.style.display = "block";

    document.body.appendChild(div);
        
    
    
    
    
    const newLabel = document.createElement('label');
    newLabel.textContent = classRoomInput;
    document.body.appendChild(newLabel);
    const newCheck = document.createElement('input');
    newCheck.type = "checkbox";
    document.body.appendChild(newCheck);
    const textField = document.createElement('input');
    textField.type = "text";
    document.body.appendChild(textField);
    const saveBtn = document.createElement('button');
    saveBtn.textContent = "Save";
    document.body.appendChild(saveBtn);

}

