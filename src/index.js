import "./styles/index.css"
import Todo from "./modules/todo"
import Project from "./modules/project"
import {displayHeader, displayNav} from "./modules/display";

const content = document.querySelector("#content");


window.defaultProject = new Project("default")
window.proj = new Project("H2");
window.newtodo = new Todo("brah", "descr", 312, "312");
window.obj = new Todo("hexy", "descr", 31321312, "31231231");

window.projectList = [];

window.projectList.push(defaultProject, proj);

proj.addTodo(newtodo);
proj.addTodo(obj);
proj.addTodo(obj);
proj.addTodo(obj);
proj.addTodo(obj);
proj.addTodo(obj);
proj.addTodo(obj);

displayHeader();
displayNav();