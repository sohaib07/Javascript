function add() {
    task = new object();
}
function object() {
    var newTask = document.getElementById('text').value;
    
    if( newTask == " "|| newTask ==""){
        alert("Enter Something");
    }
    else {
    var listObject = document.createElement("li");
    var button = document.createElement("button");
    var taskText = document.createTextNode(newTask+"    ");
    listObject.appendChild(taskText);
    listObject.appendChild(button);
    document.getElementById('list').appendChild(listObject);
    button.innerHTML="Remove";
    button.setAttribute("class","button");
    button.addEventListener("click",remove);
    
    }
    document.getElementById('text').value = " ";
}
function remove() {
    var object = this.parentNode ;
 	var parent = object.parentNode ;
 	parent.removeChild(object);
}

function removeAll(){
   document.getElementById('list').innerHTML = " ";
    
}