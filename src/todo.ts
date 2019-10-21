interface ITodo {
    name: string
    description: string
    isComplete: boolean
}

export class Todo implements ITodo {
    constructor(public name: string, public description: string, public isComplete: boolean) {
    }
}

export class TodoList {
    private todos: Array<Todo> = [];

    public createItem(name: string, description: string) {
        const todo = new Todo(name, description, false);
        this.todos.push(todo);
    }

    public getAllItems(): Array<Todo> {
        return this.todos;
    }
    
    public markItemComplete(name: string) {
        this.todos.map((todo) =>{
            if(todo.name === name){
                todo.isComplete = true;
            }
        })
    }

    public getItem(name: string): Array<Todo> {
        return this.todos.filter((todo) =>{
            return todo.name === name? todo: null;
        })
    }

    public getIncompleteItems(): Array<Todo> {
        return this.todos.filter((todo) => {
            return todo.isComplete === false
        })
    }

    public getCompleteItems(): Array<Todo> {
        return this.todos.filter((todo) => {
            return todo.isComplete === true;
        })
    }
}