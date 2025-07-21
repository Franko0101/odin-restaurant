import { removeAllChild } from "./home";
export { generateAbout };

function generateAbout() {
    const contentDiv = document.querySelector("#content");
    removeAllChild(contentDiv);

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("card");

    const aboutPara = document.createElement("p");
    aboutPara.textContent = "Se il pollino non è abbastanza buono, chiama qui: +39 1234567890";

    aboutDiv.appendChild(aboutPara);
    contentDiv.appendChild(aboutDiv);
}