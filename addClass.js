function createClassroom() {
    //get classroom name from user
    let classRoomInput = prompt("Please enter the name of the class", "Harry Potter");
    
    //make button 60
    const newButton = document.createElement('button');
    newButton.textContent = classRoomInput;
    document.body.appendChild(newButton);

}