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
    let expectationInput = prompt("Please enter an expectation:", "");
    
    var div = document.createElement("div");
    div.style.display = "block";

    // Get input values 
    let excpectationtext = expectationInput; 

    // Get the table and insert a new row at the end 
    let table = document.getElementById("expectationtable"); 
    let newRow = table.insertRow(table.rows.length); 

    // Insert data into cells of the new row 
    newRow.insertCell(0).innerHTML = excpectationtext; 
    newRow.insertCell(1).innerHTML = '<input type="checkbox" name="checkbox" value="1" />'; 
    newRow.insertCell(2).innerHTML =  '<input type="text" id="expcomment" name="expcomment">';  
    
    // Clear input fields??????????????????????? 
    clearInputs(); 
}

function saveToStorage(){
    localStorage.setItem();
    document.getElementById
}
