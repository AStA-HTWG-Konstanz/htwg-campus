import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from "~/app/model/user/user.model";
import * as dialogsModule from "tns-core-modules/ui/dialogs";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { scheduleUser } from '~/app/model/scheduleuser/scheduleuser.model';
import { CacheService } from '../cache/cache.service'

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth"
    private header = { "Content-Type": "application/json" }

    constructor(private cacheService: CacheService) { }

    login(user: User): Promise<HttpResponse> {
        return request({
            url: this.serverUrl,
            method: "POST",
            headers: this.header,
            content: this.getRequestBody(user)
        })
    }
    getUser(): User {
        if (this.cacheService.isUserInCache()) {
            let storedUser: User = this.cacheService.getUserFromCache();
            return new scheduleUser(storedUser.username, storedUser.password, true);
        } else {
            return null;
        }
    }

    private getRequestBody(user: User) {
        return JSON.stringify({ username: user.username, password: user.password })
    }
}
