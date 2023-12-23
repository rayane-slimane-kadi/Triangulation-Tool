function createClassroom() {
    event.preventDefault(); // Prevent the browser from refreshing when pressing the "Add" button

    //get classroom name from user
    let classRoomInput = prompt("Please enter the name of the class", "");
    
    //make button 60
    const newButton = document.createElement('button');
    newButton.textContent = classRoomInput;
    document.body.appendChild(newButton);

}