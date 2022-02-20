import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

export class TasksController{
    createTask(listId) {
        console.log('hello from tasks');
        window.event.preventDefault()
        const form = window.event.target
        

        const newTask = {
            listId,
            name: form.name.value
        }
        tasksService.createTask(newTask)
        
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            tasksService.deleteTask(id)
        }
    }

    
}