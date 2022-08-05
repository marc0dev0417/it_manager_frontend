import { makeAutoObservable, action, computed, observable} from "mobx";
import { clearPersistedStore, makePersistable } from "mobx-persist-store";

class InvitedStore{
    static invitedStore: InvitedStore

    isInvite: boolean = false

    static getInvitedStore(){
        if(this.invitedStore === undefined){
            this.invitedStore = new InvitedStore()
        }
        return this.invitedStore
    }
    constructor(){
        makeAutoObservable(this, {
            isInvite: observable,
            getInvited: computed,
            setIsInvited: action      
        })
        makePersistable(this, {
            name: 'InvitedStore',
            properties: ['isInvite'],
            storage: window.localStorage
        })
    }

   get getInvited(): boolean{
        return this.isInvite
    }
    setIsInvited(isInvited: boolean){
        this.isInvite = isInvited
    }
}
export default InvitedStore