import { Injectable } from "@angular/core";
//import { HttpClient, HttpHeaders } from "@angular/common/http";
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { Observable, from } from 'rxjs';
import { Canteen } from "~/app/model/canteen/canteen";
import { LoginService } from "../login/login.service";
import { BackendRequestService } from "../backend-request/backend-request.service";
import { TranslateService } from "@ngx-translate/core";
import { CacheService } from "../cache/cache.service";


@Injectable()
export class CanteenService {
    private serverUrl = "https://app.asta.htwg-konstanz.de"

    constructor(
        private loginSession: LoginService,
        private backendRequest: BackendRequestService,
        private cacheService: CacheService
    ) { }

    private getCanteen(): Promise<Object> {
        console.log(this.cacheService.getLanguageFromCache())
        return this.backendRequest.safe_get_request(this.serverUrl + "/api/canteen/" + this.cacheService.getLanguageFromCache() + "/menu", 1);
    }

    getMenu(): Promise<Canteen> {
        return new Promise((resolve, reject) => {
            this.getCanteen().then(
                (response: HttpResponse) => {
                    if (response.statusCode !== 200) {
                        return resolve(this.dummy)//reject("canteen service reject: " + response.statusCode);
                    }
                    let content = this.dummy//response.content.toJSON() as any as Canteen;
                    if (content.menu.length == 0)
                        return reject("canteen service response failed");
                    var today = new Date();
                    for (var i = 0; i < content.menu.length; ++i) {
                        var date = new Date(content.menu[i].date)
                        if (today < date) {
                            content.menu = content.menu.slice(i)
                            break;
                        }
                    }
                    return resolve(content);
                },
                (err) => reject(err)
            );
        }
        )
    }
    dummy: Canteen = {
        "menu": [
            {
                "date": "2.3.2018",
                "meals": [
                    {
                        "ctgry": "Seezeit-Teller",
                        "title": "Tortelloni Mediterraneo (25a) | Petersilien-Mandelpesto (3,32a) | Riosalat | Balsamicodressing (34,36) | Frischobst Apfel | (Veg)",
                        "priceStud": "3,10",
                        "priceEmpl": "5,10",
                    },
                    {
                        "ctgry": "hin&weg",
                        "title": "Kartoffelpuffer Apfelmus (3,28,25a)",
                        "priceStud": "3,10",
                        "priceEmpl": "3,60",
                    },
                    {
                        "ctgry": "KombinierBar",
                        "title": "Rezept des Monats | Zitronenhähnchen (36) | Bratensauce | (G)",
                        "priceStud": "3,10",
                        "priceEmpl": "5,10",
                    },
                    {
                        "ctgry": "Beilagen",
                        "title": "Kartoffeln | Reis | Kaisergemüse | Salat | Dessert",
                        "priceStud": "0,70",
                        "priceEmpl": "1,20",
                    }
                ]
            },
            {
                "date": "4.3.2018",
                "meals": [
                    {
                        "ctgry": "Seezeit-Teller",
                        "title": "Tortelloni Mediterraneo (25a) | Petersilien-Mandelpesto (3,32a) | Riosalat | Balsamicodressing (34,36) | Frischobst Apfel | (Veg)",
                        "priceStud": "string",
                        "priceEmpl": "string",
                    },
                    {
                        "ctgry": "hin&weg",
                        "title": "Kartoffelpuffer Apfelmus (3,28,25a)",
                        "priceStud": "string",
                        "priceEmpl": "string",
                    },
                    {
                        "ctgry": "KombinierBar",
                        "title": "Rezept des Monats | Zitronenhähnchen (36) | Bratensauce | (G)",
                        "priceStud": "string",
                        "priceEmpl": "string",
                    },
                    {
                        "ctgry": "Beilagen",
                        "title": "Kartoffeln | Reis | Kaisergemüse | Salat | Dessert",
                        "priceStud": "string",
                        "priceEmpl": "string",
                    }
                ]
            }
        ]
    }
}