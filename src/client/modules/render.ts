import type { Todo } from "../models/todo"
import { getTodos, updateTodo, deleteTodo } from "../modules/api";

export function renderTodos(todos: Todo[]) {
    const newTask = document.getElementById("new-task");
    const taskInProgress = document.getElementById("task-in-progress");
    const taskDone = document.getElementById("done-task");

    if(!newTask || !taskInProgress || !taskDone){
        console.error("Something went wrong with HTML!");
        return;
    }


    newTask.innerHTML = "";
    taskInProgress.innerHTML = "";
    taskDone.innerHTML = "";

    todos.forEach(todo => {

        const card = document.createElement("div");

        card.classList.add("todo-card");

        card.innerHTML = `
     
            <p><strong>Title:</strong> ${todo.title}</p>

            <p><strong>Task Description:</strong> ${todo.description}</p>
            <p><strong>Department:</strong> ${todo.category}</p>

            ${todo.person ? `<p><strong>Assigned Person:</strong> ${todo.person}</p>` : ""}


            <small>${todo.timestamp}</small>
        `;


        if(todo.status === "new") {
   
            const personInput = document.createElement("input");

            personInput.placeholder = "Person";

            const assignBtn = document.createElement("button");

            assignBtn.textContent = "Assign";

                assignBtn.addEventListener("click", async () => {

                       const person = personInput.value;

                       if (!person.trim()) {

                        alert("Need to fill in name for person assigned the task!");

                        return;
                    
                    }

                    await updateTodo(
                        todo.id,
                        {
                            ...todo,
                            person,
                            status: "doing"
                        }
                    );

                    const todos = await getTodos();

                    renderTodos(todos);
        }
    );

            card.append(personInput, assignBtn);

            newTask.appendChild(card);
        }


        if(todo.status === "doing") {

            const doneBtn = document.createElement("button");

            doneBtn.textContent = "Done";

            doneBtn.addEventListener("click", async () => {

                await updateTodo(
                    todo.id,
                    {
                        ...todo,
                        status: "done"
                    }
                );

                const todos = await getTodos();

            renderTodos(todos);
        });

    card.appendChild(doneBtn);

    taskInProgress.appendChild(card);
    
}

    
        if(todo.status === "done") {

                const deleteBtn = document.createElement("button");

    
                deleteBtn.textContent = "Delete";

                deleteBtn.addEventListener("click", async () => {

                    await deleteTodo(todo.id);

                    const todos = await getTodos();

                    renderTodos(todos);
        
                });

    
                card.appendChild(deleteBtn);

                taskDone.appendChild(card);
        }

    });

}