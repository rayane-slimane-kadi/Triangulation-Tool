function createClassroom() {

    const div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "600px";
    div.style.background = "white";
    div.style.color = "#333";
    div.style.borderRadius = "10px";
    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.border = "0.1px solid #e0e0e0";
    div.style.boxShadow = "50px";
    div.innerHTML = "Class Setup";
    document.body.appendChild(div)



}