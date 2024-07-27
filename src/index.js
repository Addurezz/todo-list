class Todo {
    constructor (title,description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor (title) {
        this.title = title;
        this.todos = [];
    }

    addTodo (todo) {
        this.todos.push(todo)
    }

    getTodos () {
        return this.todos;
    }
}

const proj = new Project("H2");
const newtodo = new Todo("312","312 world",312,"312");
