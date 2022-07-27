import { observable, action, computed, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { Auth, User } from "../../models/authentication/Authentication";

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

    error: boolean = false


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
            error: observable,
            userRegister: action,
            setError: action,
            getUser: computed,
            getAuth: computed,
            getError: computed
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
            this.setError(false)
        }else{
            console.log("Error in sending the request")
            this.setError(true)
            throw new Error('Error in register')
            
        }
    }catch(error){
        console.log(error)
        }
    }

    setError(error: boolean){
        this.error = error
    }

    get getUser(): User {
        return this.userData
    }
    get getAuth(): Auth {
        return this.auth
    }
    get getError(): boolean{
        return this.error
    }
}
export default UserStore
