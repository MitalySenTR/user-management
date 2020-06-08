import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from './user.model';
import { StaticDataService } from './static-data.service';

@Injectable()
export class UserService{
    baseUrl:string = 'http://localhost:8080/user';

    users:User[];

    constructor(private staticDataService: StaticDataService, private http: HttpClient){
        this.users = staticDataService.users;
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
        // return this.http.get<User[]>(this.baseUrl);
        return this.users;
    }
}