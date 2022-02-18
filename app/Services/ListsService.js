import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService{
    createList(newList) {
        const list = new List(newList)
        ProxyState.lists = [...ProxyState.lists, list]
        console.log(list);
    }
}

export const listsService = new ListsService()