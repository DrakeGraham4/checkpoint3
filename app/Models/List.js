import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List{
    constructor(data) {
        this.name = data.name,
        this.color = data.color
        this.id = data.id || generateId()
    }


  get Template() {
      
        return `<div class="col-md-4 p-3">
              <div class="shadow card text-white mb-3" style="max-width: 18rem; background-color:${this.color}">
                  <div style="background-color:${this.color}" class= "card-header text-center">
                  <h3 class= "d-flex justify-content-between" >${this.name}<i class="selectable mdi mdi-close-box" onclick="app.listsController.deleteList('${this.id}')" title="Delete List"></i>
                  </h3>
                    </div>
                    <div class="card-body">
                     ${this.TaskTemplate}
                    </div>
                    <form onsubmit="app.tasksController.createTask('${this.id}')" class="px-3 pb-2">
              <div class="input-group">
                <input minLength="3" maxLength="50" required type="text" class="form-control" placeholder="Task" aria-label="task"
                  aria-describedby="task" id="name">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><i
                    class="mdi mdi-check"></i></button>
              </div>
            </form>
                    </div>
              </div>`
    }

  get TaskTemplate() {
        
        let template = ''
        const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
      myTasks.forEach(t => template += t.Template)
      
      return template
  }
  
  
}