import { observable, action, computed, makeAutoObservable, toJS } from "mobx";
import { clearPersistedStore, makePersistable } from "mobx-persist-store";
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
        expired_date: ''
    }

    isLogged: boolean = false
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
            isLogged: observable,
            userRegister: action,
            setError: action,
            setUserData: action,
            setAuth: action,
            setIsLogged: action,
            removeUserData: action,
            getUser: computed,
            getAuth: computed,
            getIsLogged: computed,
            getError: computed
        })
        makePersistable(this, {
            name: 'UserStore',
            properties: ['userData', 'auth', 'isLogged'],
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
            this.setUserData(responseContent)
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

    async userLogin(email: String, password: string){
        try{
        const response = await fetch(`http://localhost:8080/login?email=${email}&password=${password}`,{
            method: 'Get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        
        if(response.status === 200){
            const responseContent = await response.json()
            this.setAuth(responseContent)
            this.setError(false)
            this.setIsLogged(true)
        }

        if(response.ok){
            const responseContent = await response.json()
            console.log(responseContent)
            this.setAuth(JSON.parse(responseContent))
            this.setIsLogged(true)
            this.setError(false)    
        }else{
            this.setError(true)
            this.setIsLogged(false)
            throw new Error('Error in Login')
        }
    }catch(error){
    } 

    }

    async removeUserData(){
        await clearPersistedStore(this)
    }

    setError(error: boolean){
        this.error = error
    }
    setUserData(user: User){
        this.userData = user
    }
    setAuth(auth: Auth){
        this.auth.token = auth.token
        this.auth.expired_date = auth.expired_date
    }
    setIsLogged(isLogged: boolean){
       this.isLogged = isLogged
    }

    get getUser(): User {
        return this.userData
    }
    get getAuth(): Auth {
        return this.auth
    }
    get getIsLogged(): boolean{
        return this.isLogged
    }
    get getError(): boolean{
        return this.error
    }
}
export default UserStore
