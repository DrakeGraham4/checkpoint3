import { generateId } from "../Utils/generateId.js"

export class List{
    constructor(data) {
        
        this.name = data.name,
            this.color = data.color
        this.id = generateId()
    }


    get Template() {
        return `<div class="col-md-4 p-3">
              <div class="shadow card text-white mb-3" style="max-width: 18rem; background-color:${this.color}">
                    <div style="border-inline-color:${this.color}" class= "card-header text-center">${this.name}
                    </div>
                    <div class="card-body">
                    </div>
              </div>
              </div>`
    }
}