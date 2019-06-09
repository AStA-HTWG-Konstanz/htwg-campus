import { Injectable } from "@angular/core";
//import { HttpClient, HttpHeaders } from "@angular/common/http";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { Observable, from } from 'rxjs';
import { Canteen } from "~/app/model/canteen/canteen";


@Injectable()
export class CanteenService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/canteen/en/menu"
    private header = {"Content-Type": "application/json"}
    
    canteen: Canteen;

    constructor() { }

    private getCanteen(): Promise<Object> {
        return getJSON({url: this.serverUrl, method: "GET",headers: this.header});
    }

    getMenu(): Promise<Canteen> {
        return new Promise((resolve, reject) => {
            if(this.canteen && new Date(this.canteen.menu[0].date) > new Date()) {
                resolve(this.canteen);
            } else {
                this.getCanteen().then(
                    (response: Canteen) => {
                        var today = new Date();
                        for(var i = 0; i < response.menu.length; ++i) {
                            var date = new Date(response.menu[i].date)
                            if(today < date) {
                                response.menu = response.menu.slice(i)
                                break;
                            }
                        }
                        this.canteen = response;
                        return resolve(this.canteen);
                    },
                    (err) => reject(err)
                );
            }
        })
    }
}