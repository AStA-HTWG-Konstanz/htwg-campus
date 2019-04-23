import { Injectable } from "@angular/core";
import { scheduleUser } from "~/app/model/scheduleuser/scheduleuser.model";
import { request } from "tns-core-modules/http";

@Injectable()
export class HtwgscheduleService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/lectures";
    private header = { "Content-Type": "application/json" };

    latestRequest: Date;
    storedResponse: any;
    constructor() {}

    // TODO: changed response to schedule model
    getSchedule(body: scheduleUser): Promise<Object> {
        let headers = this.header;
        return request({
            url: this.serverUrl,
            method: "POST",
            headers: headers,
            content: JSON.stringify(body)
        });
    }

    getTimeTable(body: scheduleUser): Promise<string> {
        return new Promise((resolve, reject) => {
            if (
                this.latestRequest &&
                this.latestRequest.getUTCDate == new Date().getUTCDate
            ) {
                console.log(
                    "already requested today" +
                        JSON.stringify(this.latestRequest.getUTCDate)
                );
                resolve(this.storedResponse);
            } else {
                this.getSchedule(body).then(
                    (response: string) => {
                        if (response.length > 0) {
                            console.log("schedule response: ");
                            this.latestRequest = new Date();
                            this.storedResponse = response;
                            resolve(response);
                        } else {
                            reject("empty responsefrom schedule request");
                        }
                    },
                    error => reject(error)
                );
            }
        });
    }
}
