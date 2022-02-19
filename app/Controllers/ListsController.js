import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _drawList() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}



export class ListsController{
    constructor() {
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        _drawList()
    }

    createList() {
        window.event.preventDefault()
        const form = window.event.target
        let newList = {
            // @ts-ignore
            name: form.name.value,
            // @ts-ignore
            color: form.color.value,
        }
        
        listsService.createList(newList)
    }
    deleteList(id) {
        listsService.deleteList(id)
    }

}
