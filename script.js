let input = document.getElementById("inputText");
let button = document.getElementById("addButton");
let ul = document.querySelector("ul");
let subHeading = document.getElementById("list");


const getLength = () => {
    return input.value.length;
}

const createNewItem = () => {

    let newLiElement = document.createElement("li");
    newLiElement.appendChild(document.createTextNode(input.value));
    ul.appendChild(newLiElement);
    newLiElement.addEventListener("click", () => {
        newLiElement.classList.toggle("done");
    });

    if (newLiElement) {
        subHeading.style.display = "none";
        let removeButton = document.createElement("button");
        newLiElement.insertAdjacentElement("beforeend", removeButton);
        removeButton.classList.add("itemButton");
        removeButton.addEventListener("click", () => {
            newLiElement.classList.add("remove");
        })
    } 
    input.value = "";   
}

const onClick = () => {
    if (getLength() > 0) {
        createNewItem();
    }
};

const onKeypress = (event) => {
    if (getLength() > 0 && event.keyCode === 13) {
        createNewItem();
    }
}
 
button.addEventListener("click", onClick);
input.addEventListener("keypress", onKeypress);
