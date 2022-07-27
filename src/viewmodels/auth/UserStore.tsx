import { observable, action, computed, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { Auth } from "../../models/authentication/Auth";

import { User } from "../../models/User"

class UserStore {
    static userStore: UserStore

    userData: User = {
        id: '',
        email: '',
        username: '',
        password: ''
    }

    auth: Auth = {
        token: '',
        token_expired: undefined,
        isLogged: false
    }

    static getUserStore() {
        if (this.userStore === undefined) {
            this.userStore = new UserStore()
        }
        return this.userStore
    }

    constructor() {
        makeAutoObservable(this, {
            userData: observable,
            auth: observable,
            userRegister: action,
            getUser: computed,
            getAuth: computed
        })
        makePersistable(this, {
            name: 'UserStore',
            properties: ['userData', 'auth'],
            storage: window.localStorage
        })
    }

    async userRegister(mail: string, username: string, password: string) {

        const user: User = {
            email: mail,
            username: username,
            password: password
        }
        try{
        const response = await fetch('http://localhost:8080/signUp', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(user)
        })

        if(response.ok){
            const responseContent = await response.json()
            console.log(responseContent)
        }else{
            console.log("Error in sending the request")
            throw new Error('Error in register')
        }
    }catch(error){
        console.log(error)
    }
    }


    get getUser(): User {
        return this.userData
    }
    get getAuth(): Auth {
        return this.auth
    }
}
export default UserStore
