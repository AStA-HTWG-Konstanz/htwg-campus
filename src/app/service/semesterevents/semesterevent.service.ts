import { Injectable } from '@angular/core';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { SemesterEvents } from '~/app/model/events/semesterevents';
import { BackendRequestService } from '../backend-request/backend-request.service';

@Injectable({
  providedIn: 'root'
})
export class SemestereventService {
  private serverUrl = "https://app.asta.htwg-konstanz.de/api/events"

  constructor(private backendRequest: BackendRequestService) { }

  private eventsRequest(): Promise<Object> {
    return this.backendRequest.safe_get_request(this.serverUrl, 1)
  }

  getIsOpen(): Promise<SemesterEvents> {
    return new Promise((resolve, reject) => {
      this.eventsRequest().then(
        (response: HttpResponse) => {
          if (response.statusCode !== 200) {
            return reject("events service reject: " + response.statusCode);
          }
          if (response.content.toString().length > 0) {
            return resolve(response.content.toJSON() as any as SemesterEvents);
          } else {
            reject(response)
          }

        },
        (err) => {
          reject(err)
        }
      );
    })
  }
}
