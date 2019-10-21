import { TodoList } from "./todo";

describe(('Todo!'), ()=>{
    let todoList: TodoList;

    beforeEach(()=>{
        todoList = new TodoList();
    })

    it(('should create a todo with name and desc'), () => {
        todoList.createItem("todo1","first todo");

        expect(todoList.getItem("todo1")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({name: "todo1", description:"first todo"})
            ])
        );
    })

    it(('should mark a todo complete'), () => {
        todoList.createItem("todo1", "todo first");
        todoList.markItemComplete("todo1");

        expect(todoList.getItem("todo1")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({isComplete: true})
            ])
        );
    })

    it(('should list all incomplemente items'), ()=>{
        todoList.createItem("todo1","first todo");
        todoList.createItem("todo2", "second todo");
        todoList.createItem("todo3", "third todo");

        todoList.markItemComplete("todo1");

        expect(todoList.getIncompleteItems()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({name: "todo2"}),
                expect.objectContaining({name: "todo3"})
            ])
        )
    })

    it(('Should get all Todos'), ()=>{
        todoList.createItem("todo1", "first todo");
        todoList.createItem("todo2", "second todo");

        expect(todoList.getAllItems()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({name: "todo1"}),
                expect.objectContaining({name: "todo2"})
            ])
        )
    })

    it(('Should get all Complete Items'), ()=>{
        todoList.createItem("todo1", "first todo");
        todoList.createItem("todo2", "second todo");

        todoList.markItemComplete("todo2");

        expect(todoList.getCompleteItems()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({name: "todo2"}),
            ])
        )
    })

    it(('Should return empty array if item is not present'), ()=>{
        todoList.createItem("todo1","fisrt todo");

        expect(todoList.getItem("todo3")).toEqual(
            expect.arrayContaining([])
        );
    })

    it(('Should return empty array if all the todos are complete '), ()=>{
        todoList.createItem("todo1","fisrt todo");
        todoList.markItemComplete("todo1")

        expect(todoList.getIncompleteItems()).toEqual(
            expect.arrayContaining([])
        );
    })

    it(('Should return empty array if none of the todos are complete '), ()=>{
        todoList.createItem("todo1","fisrt todo");

        expect(todoList.getCompleteItems()).toEqual(
            expect.arrayContaining([])
        );
    })
})