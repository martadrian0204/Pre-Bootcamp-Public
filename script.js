function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}


function setActive(element) {
    element.classList.add("dark-mode");
}

function setActive(element) {
    if(element.classList.add("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}
