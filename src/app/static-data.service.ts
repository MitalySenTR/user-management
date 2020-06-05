import { Injectable } from '@angular/core';
import { User } from './users/user.model';

@Injectable()
export class StaticDataService{
    public users:User[] = [
        {id: 32, name: "Mitaly", location: "Punjab"},
        {id: 23, name: "Sonia", location: "Delhi"},
        {id: 232, name: "Smriti", location: "Delhi"},
        {id: 90, name: "Kriti", location: "Punjab"},
        {id: 24, name: "Supriya", location: "Mumbai"},
        {id: 67, name: "Sasha", location: "MP"},
        {id: 67, name: "Priya", location: "Mumbai"}
    ];
}