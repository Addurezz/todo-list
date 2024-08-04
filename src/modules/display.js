import {createProject,createTodo} from "./scripting";

const displayHeader = () => {
    const headerDiv = document.createElement("div");
    const headerTitle = document.createElement("h1");

    headerDiv.setAttribute("class","header");
    headerTitle.textContent = "To-Do";

    headerDiv.appendChild(headerTitle);
    content.appendChild(headerDiv);
}

const displayNav = () => {
    const content = document.querySelector("#content");
    const existingNavBar = document.querySelector(".navBar");

    // Remove the existing navBar if it exists
    if (existingNavBar) {
        content.removeChild(existingNavBar);
    }

    const navBar = document.createElement("div");
    navBar.setAttribute("class", "navBar");

    const projectGroup = document.createElement("div");

    window.projectList.forEach((element, index) => {
        const projectLabel = document.createElement("label");
        const projectRadioButton = document.createElement("input");
        projectRadioButton.type = "radio";
        projectRadioButton.name = "project";
        projectRadioButton.value = element.title;
        projectRadioButton.id = `project-${index}`;

        if (index === 0) {
            projectRadioButton.checked = true;
            displayProjectContent(element);
        }

        projectRadioButton.addEventListener('change', () => {
            if (projectRadioButton.checked) {
                displayProjectContent(element);
            }
        });

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "-";
        const projectDiv = document.createElement("div");

        deleteProjectBtn.addEventListener("click", () => {
            projectList.splice(index,1);
            displayNav();
        });

        

        projectLabel.appendChild(projectRadioButton);
        projectLabel.appendChild(document.createTextNode(element.title));
        projectDiv.appendChild(projectLabel);
        projectDiv.appendChild(deleteProjectBtn);
        projectGroup.appendChild(projectDiv);
        projectGroup.appendChild(document.createElement("br"));
    });

    navBar.appendChild(projectGroup);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.textContent = "Add Project";
    addProjectBtn.addEventListener("click", () => {
        createProject()
        displayNav();
    });

    //append 
    navBar.appendChild(addProjectBtn);
    content.appendChild(navBar);
}

const displayProjectContent = (project) => {
    const existingContainer = document.querySelector(".container");
    const container = document.createElement("div");
    container.setAttribute("class","container");
    const titleInfo = document.createElement("h1");
    const todoContainer = document.createElement("div");

    if (existingContainer)
    {
        content.removeChild(existingContainer);
    }

    project.getTodos().forEach((element,index) => {
        const todoDiv = document.createElement("div");
        const todoTitle = document.createElement("h2");
        const todoDescription = document.createElement("p");
        
        todoTitle.textContent = element.title;
        todoDescription.textContent = element.description;

        
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.textContent = "Delete";
        
        deleteTodoBtn.addEventListener("click", () => {
            project.removeTodo(index);
            displayProjectContent(project);
        });
        
        
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDescription);
        todoDiv.appendChild(deleteTodoBtn);
        todoContainer.appendChild(todoDiv);
    })


    titleInfo.textContent = project.title;

    const createTodoBtn = document.createElement("button");
    createTodoBtn.textContent = "Create a Todo";
    createTodoBtn.addEventListener("click", () => {
        createTodo(project);
        displayProjectContent(project);
    })


    container.appendChild(titleInfo);
    container.appendChild(todoContainer);
    container.appendChild(createTodoBtn);
    content.appendChild(container);
}

export {displayHeader, displayProjectContent, displayNav}