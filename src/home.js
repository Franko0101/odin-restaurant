export { generateHome, removeAllChild };

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateHome() {
    const contentDiv = document.querySelector("#content");
    removeAllChild(contentDiv);

    const homeHeader = document.createElement("h1");
    homeHeader.classList.add("home-header");
    homeHeader.textContent = "Pollino Fritto";

    const homeSubheader = document.createElement("p");
    homeSubheader.classList.add("home-subheader");
    homeSubheader.textContent = "Troppo Bono.";

    contentDiv.appendChild(homeHeader);
    contentDiv.appendChild(homeSubheader);
}