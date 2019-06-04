import { Injectable } from "@angular/core";
import { Observable, from } from 'rxjs';
import { User } from "~/htwgapp/model/user/user.model";
import { request } from "tns-core-modules/http";

@Injectable()
export class LoginService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth"
    private header = {"Content-Type": "application/json"}
    
    constructor() { }

    login(user: User): Observable<Object> {
        return from(request({
            url: this.serverUrl, 
            method: "POST",
            headers: this.header,
            content: this.getRequestBody(user)
        }))
    }

    private getRequestBody(user: User) {
        return JSON.stringify({username: user.username, password: user.password})
    }
    
}