import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

export class TasksController{
    createTask(listId) {
        window.event.preventDefault()
        const form = window.event.target

        const newTask = {
            listId,
            name: form.name.value
        }
        console.log("[TasksController]: createTask", newTask);
        tasksService.createTask(newTask)
    }

    
}