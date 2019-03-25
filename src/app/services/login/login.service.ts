import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "~/app/model/user/user.model";
import * as dialogsModule from "tns-core-modules/ui/dialogs";

@Injectable()
export class LoginService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth"
    constructor(private http: HttpClient) { }

    /*login(user: User): Observable<Object> {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers, responseType: 'text' });
    }*/

    login(user: User): Observable<Object> {
        return this.http.post(this.serverUrl, JSON.stringify(user));
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            //"Content-Type": "text/html",
         });

        return headers;
    }
    
}