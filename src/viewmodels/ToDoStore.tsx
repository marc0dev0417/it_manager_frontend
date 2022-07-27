import { randomUUID } from "crypto";
import { makeAutoObservable, observable, action, computed, toJS } from "mobx";
import { ToDoInterface } from "../models/task/ToDoInterface";

class ToDoStore{

    static toDoStore: ToDoStore

   tableToDo: ToDoInterface = {
        table: [{
            id: "1",
            title: 'To do',
            task:[{
                id: "10",
                title: 'Learn JavaScript'
            }]
        },{
            id: "2",
            title: 'In progress',
            task:[{
                id: "20",
                title: ''
            }]
        },{
            id: "3",
            title: 'Completed',
            task:[{
                id: "30",
                title: ''
            }]
    }]
    }

    constructor(){
        makeAutoObservable(this,{
            tableToDo: observable,
            addIncidenceToDo: action,
            getTableToDo: computed
        })
    }

    static getToDoStore(): ToDoStore{
        if(this.toDoStore === undefined){
            this.toDoStore = new ToDoStore()
        }
        return this.toDoStore
    }
    addIncidenceToDo(incidence: string){
        console.log("funciono "+ incidence)
        this.tableToDo.table[0].task.push({id: "78", title: incidence})
        console.log(toJS(this.tableToDo))
    }
    addIncidenceProgress(incidence: string){
        this.tableToDo.table[1].task.push({id:"1", title: incidence})
    }
    get getTableToDo(): ToDoInterface{
        return this.tableToDo
    }
}
export default ToDoStore