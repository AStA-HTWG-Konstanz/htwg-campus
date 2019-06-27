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

    constructor(private backendRequest: BackendRequestService) { }

    getBalance(): Promise<Balance> {
        return new Promise((resolve, reject) => {
            this.backendRequest.request(this.serverUrl).then(
                (response: HttpResponse) => {
                    if (response.statusCode !== 200) {
                        return reject("printer balance service reject: " + response.statusCode);
                    }
                    let content = response.content.toString();
                    if (content.length > 1) {
                        resolve(response.content.toJSON().balance as Balance);
                    } else {
                        reject(response);
                    }
                },
                error => reject(error)
            );
        });
    }
}
