var input = document.getElementById("inputText");
var button = document.getElementById("addButton");
var ul = document.querySelector("ul");
var subHeading = document.getElementById("list");


function getLength() {
    return input.value.length;
}


function createNewItem() {

    var newDivElement = document.createElement("div");
    var newLiElement = document.createElement("li");
    newLiElement.appendChild(document.createTextNode(input.value));
    ul.appendChild(newLiElement);
    newLiElement.addEventListener("click", function(){
        this.classList.toggle("done");
    });

    if (newLiElement) {
        subHeading.style.display = "none";
        var removeButton = document.createElement("button");
        newLiElement.insertAdjacentElement("beforeend", removeButton);
        removeButton.classList.add("itemButton");
        removeButton.addEventListener("click", function(){
            newLiElement.classList.add("remove");
        })
    } 
    input.value = "";
    
}

function onClick() {
    if (getLength() > 0) {
        createNewItem();
    }
};

function onKeypress(event) {
    if (getLength() > 0 && event.keyCode === 13) {
        createNewItem();
    }
}

  

button.addEventListener("click", onClick);
input.addEventListener("keypress", onKeypress);
