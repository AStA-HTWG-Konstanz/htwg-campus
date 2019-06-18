import { BackendRequestService } from '../backend-request/backend-request.service';
import { Injectable } from '@angular/core';
import { scheduleUser } from "~/app/model/scheduleuser/scheduleuser.model";
import { request, HttpResponse } from "tns-core-modules/http";
import { Balance } from '~/app/model/balance/balance';

@Injectable({
    providedIn: 'root'
})
export class PrintBalanceService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/balance";

    latestRequest: Date;
    storedResponse: Balance;
    constructor(private backendRequest: BackendRequestService) { }

    getBalance(): Promise<Balance> {
        return new Promise((resolve, reject) => {
            if (this.latestRequest && this.latestRequest.getDay() == new Date().getDay()) {
                console.log("already requested today");
                resolve(this.storedResponse);
            } else {
                this.backendRequest.request(this.serverUrl).then(
                    (response: HttpResponse) => {
                        let content = response.content.toString();
                        if (response.statusCode == 200 && content.length > 1) {
                            this.latestRequest = new Date();
                            this.storedResponse = response.content.toJSON().balance as Balance;
                            resolve(this.storedResponse);
                        } else {
                            console.log("resolve dummy in balance service")
                            this.latestRequest = new Date();
                            this.storedResponse = this.dummy.balance as Balance;
                            resolve(this.storedResponse)
                            //reject("empty response from balance request");
                        }
                    },
                    error => reject(error)
                );
            }
        });
    }

    dummy = {
        "balance": {
            "print": "10,00"
        }
    }
}
