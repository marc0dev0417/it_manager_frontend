import { makeObservable, action, computed, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class CounterStore{
    static counterStore: CounterStore

    valueCount = 0

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
    static getCounterStore(): CounterStore{
        if(this.counterStore === undefined){
            this.counterStore = new CounterStore()
        }
        return this.counterStore
    }

    incrementCount(){
        this.valueCount++
    }
   get getValueCount(): number{
        return this.valueCount
    }
}

export default CounterStore

