import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService{
    createTask(newTask) {
        const task = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(task);
    }
}

export const tasksService = new TasksService()