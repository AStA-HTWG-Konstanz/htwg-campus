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
                        return reject("canteen service reject: " + response.statusCode);
                    }
                    let content = response.content.toJSON() as any as Canteen;
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
}