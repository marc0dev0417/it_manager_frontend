import { makeObservable, action, computed, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class CounterStore{
    static counterStore: CounterStore

    valueCount = 0

    static getCounterStore(): CounterStore{
        if(this.counterStore === undefined){
            this.counterStore = new CounterStore()
        }
        return this.counterStore
    }

    constructor(){
        makeObservable(this, {
            valueCount: observable,
            incrementCount: action,
            getValueCount: computed
        })
        makePersistable(this, {
            name: "CounterStore",
            properties: ["valueCount"],
            storage: window.localStorage
        })
    }
    

    incrementCount(){
        this.valueCount++
    }
   get getValueCount(): number{
        return this.valueCount
    }
}

export default CounterStore

