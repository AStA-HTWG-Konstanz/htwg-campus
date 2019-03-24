import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class HtwgscheduleService {
    private serverUrl = "https://google.com"
    constructor(private http: HttpClient) { }

    getSchedule(): Observable<Object> {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers, responseType: 'text' });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            //"Content-Type": "text/html",
         });

        return headers;
    }
}