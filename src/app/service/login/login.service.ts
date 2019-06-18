import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from "~/app/model/user/user.model";
import * as dialogsModule from "tns-core-modules/ui/dialogs";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import * as appSettings from "tns-core-modules/application-settings";
import { scheduleUser } from '~/app/model/scheduleuser/scheduleuser.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth"
    private header = { "Content-Type": "application/json" }

    constructor() { }

    login(user: User): Promise<Object> {
        return request({
            url: this.serverUrl,
            method: "POST",
            headers: this.header,
            content: this.getRequestBody(user)
        }).then((response: HttpResponse) => response.content, (e) => e)
    }
    getUser(): User {
        if (appSettings.hasKey("account")) {
            let storedUser: User = JSON.parse(appSettings.getString("account"));
            return new scheduleUser(storedUser.username, storedUser.password, true);
        } else {
            return null;
        }
    }

    private getRequestBody(user: User) {
        return JSON.stringify({ username: user.username, password: user.password })
    }
}
