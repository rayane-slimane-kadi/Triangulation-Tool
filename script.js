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