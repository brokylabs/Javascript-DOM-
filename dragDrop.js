function dragstart(event){
    event.dataTransfer.setData("text", event.target.id);
}


function dragging(event){
    document.getElementById("object_txt").innerHTML = "Element Sedang di Drag"
}

function allowDrop(event){
    event.preventDefault()
}

function drop(event){
    event.preventDefault;
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("object_txt").innerHTML = "Element sudah di drop"
}