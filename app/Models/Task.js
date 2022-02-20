import { generateId } from "../Utils/generateId.js";

export class Task{
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.listId = data.listId
    }
    get Template() {
        
        return `<li class="d-flex justify-content-between"><p>${this.name}</p> <i class="mdi mdi-delete selectable" title="Delete" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>`
    }
}
