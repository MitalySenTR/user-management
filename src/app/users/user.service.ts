import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';

@Injectable()
export class UserService{
    baseUrl:string = 'http://localhost:8080/user';

    users:User[] = [
        // {id: 32, name: "mitaly", location: "ludhiana"},
        // {id: 23, name: "sonia", location: "delhi"},
        // {id: 232, name: "smriti", location: "rohtak"}
    ];
    constructor(private http: HttpClient){
    }

    fetchUserById(id: number){
        return this.http.get<User>(this.baseUrl+"/"+id);
        // for (let index = 0; index < this.users.length; index++) {
        //     if(this.users[index].id == id)
        //         return this.users[index];
        // }
        // return null;
    }

    createUser(user: User){
        return this.http.post(this.baseUrl, user);
    }

    fetchAllUsers(){
        return this.http.get<User[]>(this.baseUrl);
        // return this.users;
    }
}