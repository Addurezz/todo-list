import Project from "./project";
import Todo from "./todo";

const createProject = () => {
    const newProjectTitle = prompt("Project Title:");
    const newProject = new Project(newProjectTitle);

    window.projectList.push(newProject);
}

const createTodo = (project) => {
    const title = prompt("Todo Title");
    const description = prompt("Todo Description");
    const dueDate = prompt("Due Date");
    const priority = prompt("Priority");

    const newTodo = new Todo(title,description,dueDate,priority);

    project.addTodo(newTodo);
}

export  {createProject,createTodo};

