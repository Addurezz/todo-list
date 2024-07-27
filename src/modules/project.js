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

    removeTodo (todoTitle) {
        const updatedArr = this.todos.filter((todo) => { 
            return todo.title != todoTitle;
        }) 
        this.todos = updatedArr;
    }

    clearTodos () {
        this.todos = [];
    }
}

export default Project