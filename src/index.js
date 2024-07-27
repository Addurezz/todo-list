import Todo from "./modules/todo"
import Project from "./modules/project"

window.defaultProject = new Project("default")
window.proj = new Project("H2");
window.newtodo = new Todo("title", "descr", 312, "312");
window.obj = new Todo("title", "descr", 31321312, "31231231");

proj.addTodo(newtodo);
proj.addTodo(obj);
