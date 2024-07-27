const displayHeader = () => {
    const headerDiv = document.createElement("div");
    const headerTitle = document.createElement("h1");

    headerDiv.setAttribute("class","header");
    headerTitle.textContent = "To-Do";

    headerDiv.appendChild(headerTitle);
    content.appendChild(headerDiv);
}

const displayNav = () => {
    const navBar = document.createElement("div");
    navBar.setAttribute("class","navBar");
    const addProjectBtn = document.createElement("button");
    addProjectBtn.textContent = "Add Project";

    navBar.appendChild(addProjectBtn);
    content.appendChild(navBar);
}

const displayProjects = () => {

}

export {displayHeader, displayProjects, displayNav}