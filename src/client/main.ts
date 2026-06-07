import { createTodo, getTodos } from "./modules/api";
import { renderTodos } from "./modules/render";
import { NewTodo } from "./models/todo";
import { animatedTitle } from "./modules/animation";


const loadTodos = async () => {
    const todos = await getTodos();
    renderTodos(todos);
};


const start = async () => {


    await loadTodos();

    const addTaskBtn = document.getElementById("addTaskBtn");


    addTaskBtn?.addEventListener("click", async () => {
        const title = document.getElementById("title") as HTMLInputElement;

        const description = document.getElementById("description") as HTMLInputElement;

        const category = document.getElementById("category") as HTMLInputElement;

        if (!title.value.trim() || !description.value.trim()) {
    
            alert("Title and description are required!");
    
            return;
}


        const todo: NewTodo = {

            title: title.value,
            description: description.value,
            category: category.value as NewTodo["category"],
            status: "new",
            timestamp: new Date().toISOString()
        };

        await createTodo(todo);


        title.value = "";
        description.value = "";
        category.value = "ux";

        await loadTodos();



    });

    animatedTitle();


};

start();