import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawList() {
    let template = ''
    ProxyState.lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template
}



export class ListsController{
    constructor() {
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', saveState)
        //_drawList()

        loadState()
    }

    createList() {
        console.log('hello from create list');
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
    async deleteList(id) {
        if (await Pop.confirm()) {
            listsService.deleteList(id)
        }
    }

}
