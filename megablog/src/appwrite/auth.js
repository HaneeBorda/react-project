import conf from "../config/conf";
import {Client , Account , ID} from "appwrite";

export class AuthService{
    Client = new this.Client();
    account;
    constructor() {
        this.Client
            .setEndpoint(conf.appwiteUrl)
            .setProject(conf.appwiteProjectId),
        this.account = new Account(this.Client)
    }
    async createAccount({email , password , name}) {
        try {
            const useraccount = await this.account.creact( ID.unique(),email,password,name); 
            if (useraccount) {
                return this.login({email, password})
            }
            else{
                return useraccount
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email , password }) {
        try {
            return await this.account.createEmailPasswordSession( email,password); 
            if (useraccount) {
                
            }
            else{
                return useraccount
            }
        } catch (error) {
            throw error;
        }
    }

    async getcurruntuser() {
        try {
            return await this.account.get();
            
        } catch (error) {
            console.log("appwrite service :: getcurruntuser :: error" , error);            
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service :: getcurruntuser :: error" , error); 
        }
    }

}

const authservice = new AuthService();

export default AuthService;