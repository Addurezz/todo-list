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

    changeTitle (newTitle) {
        this.title = newTitle;
    }

    removeTodo (index) {
        this.todos.splice(index,1) 
    }

    clearTodos () {
        this.todos = [];
    }
}

export default Project