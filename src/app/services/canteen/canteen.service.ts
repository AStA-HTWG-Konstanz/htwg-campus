import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class CanteenService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/canteen/en/menu"
    
    constructor(private http: HttpClient) { }

    getMenu(): Observable<Object> {
        return this.http.get(this.serverUrl);
    }
    
}