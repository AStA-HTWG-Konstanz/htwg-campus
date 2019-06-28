import { Injectable } from "@angular/core";
import { BackendRequestService } from '../backend-request/backend-request.service';
import { HttpResponse } from 'tns-core-modules/http/http';
import { Endlicht } from "~/app/model/endlicht/endlicht";


@Injectable()
export class EndlichtService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/endlicht";

    latestRequest: Date;
    storedResponse: Endlicht
    constructor(private backendRequest: BackendRequestService) { }

    private getResponse(): Promise<Object> {
        return this.backendRequest.safe_get_request(this.serverUrl, 1)
    }

    getEndlicht(): Promise<Endlicht> {
        return new Promise((resolve, reject) => {
            this.getResponse().then(
                (response: HttpResponse) => {
                    if (response.statusCode !== 200) {
                        return resolve(this.dummyResponse)//reject("endlicht service reject: " + response.statusCode);
                    }
                    let content: Endlicht = response.content.toJSON() as any as Endlicht
                    return resolve(content)
                },
                (err) => reject(err)
            )
        })
    }
    dummyResponse: Endlicht =
        {
            endlicht: {
                openingHours: [
                    {
                        date: "2019-04-22",
                        startTime: "09:30",
                        endTime: "16:00"
                    },
                    {
                        date: "2019-04-23",
                        startTime: "09:30",
                        endTime: "16:00"
                    },
                    {
                        date: "2019-04-24",
                        startTime: "09:30",
                        endTime: "16:00"
                    },
                    {
                        date: "2019-04-25",
                        startTime: "09:30",
                        endTime: "16:00"
                    },
                    {
                        date: "2019-04-26",
                        startTime: "09:30",
                        endTime: "14:00"
                    }
                ],
                specials: [
                    {
                        name: "Eiskaffee",
                        price: "1.50"
                    }
                ],
                beverages: [
                    {
                        name: "Café Creme",
                        price: "1.00"
                    },
                    {
                        name: "Espresso",
                        price: "0.80"
                    },
                    {
                        name: "Cola",
                        price: "1.20"
                    }
                ]
            }

        }
}