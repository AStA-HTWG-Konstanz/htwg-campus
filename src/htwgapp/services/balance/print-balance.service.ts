import { BackendRequestService } from '../backend-request/backend-request.service';
import { Injectable } from '@angular/core';
import { scheduleUser } from "~/htwgapp/model/scheduleuser/scheduleuser.model";
import { request } from "tns-core-modules/http";

@Injectable({
  providedIn: 'root'
})
export class PrintBalanceService {
  private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/balance";

    latestRequest: Date;
    storedResponse: any;
    constructor(private backendRequest: BackendRequestService) {}

    getBalance(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.latestRequest &&this.latestRequest.getUTCDate == new Date().getUTCDate) {
                console.log("already requested today" +JSON.stringify(this.latestRequest.getUTCDate));
                resolve(this.storedResponse);
            } else {
                this.backendRequest.request(this.serverUrl).then(
                    (response: string) => {
                        if (response.length > 0) {
                            console.log("balance response: ");
                            this.latestRequest = new Date();
                            this.storedResponse = response;
                            resolve(response);
                        } else {
                            reject("empty response from balance request");
                        }
                    },
                    error => reject(error)
                );
            }
        });
    }
}
