import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Canteen } from "~/app/model/canteen/canteen";


@Injectable()
export class CanteenService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/canteen/en/menu"
    
    canteen: Canteen;

    constructor(private http: HttpClient) { }

    private getCanteen(): Observable<Object> {
        let header = this.createRequestHeader();
        return this.http.get(this.serverUrl, {headers: header})
    }

    getMenu(): Promise<Canteen> {
        return new Promise((resolve, reject) => {
            if(this.canteen && new Date(this.canteen.menu[0].date) > new Date()) {
                resolve(this.canteen);
            } else {
                this.getCanteen().subscribe((response: Canteen) => {
                    var today = new Date();
                    for(var i = 0; i < response.menu.length; ++i) {
                        var date = new Date(response.menu[i].date)
                        if(today < date) {
                            response.menu = response.menu.slice(i)
                            break;
                        }
                    }
                    this.canteen = response;
                    resolve(this.canteen);
                }, error => reject(error))
            }
        })
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
        });

        return headers;
    }
}