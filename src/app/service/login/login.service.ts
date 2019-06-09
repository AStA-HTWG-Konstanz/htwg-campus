import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from "~/app/model/user/user.model";
import * as dialogsModule from "tns-core-modules/ui/dialogs";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";

@Injectable({
  providedIn: 'root'
})
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
