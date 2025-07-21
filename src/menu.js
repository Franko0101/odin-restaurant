import { removeAllChild } from "./home";
export { generateMenu };

function generateMenu() {
    const contentDiv = document.querySelector("#content");
    removeAllChild(contentDiv);

    const list = document.createElement("ul");
    const element1 = document.createElement("li");
    const element2 = document.createElement("li");
    const element3 = document.createElement("li");

    element1.textContent = "Pollino Fritto";
    element2.textContent = "Pollino ancora più Fritto";
    element3.textContent = "Pollino Fritto Troppo Bono";

    list.appendChild(element1);
    list.appendChild(element2);
    list.appendChild(element3);

    contentDiv.appendChild(list);
}