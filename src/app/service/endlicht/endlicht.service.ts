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
                        return reject("endlicht service reject: " + response.statusCode);
                    }
                    let content: Endlicht = response.content.toJSON() as any as Endlicht
                    return resolve(content)
                },
                (err) => reject(err)
            )
        })
    }
}