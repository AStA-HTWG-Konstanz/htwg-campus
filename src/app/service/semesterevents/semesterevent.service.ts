import { Injectable } from '@angular/core';
import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { SemesterEvents } from '~/app/model/events/semesterevents';
import { BackendRequestService } from '../backend-request/backend-request.service';

@Injectable({
  providedIn: 'root'
})
export class SemestereventService {
  private serverUrl = "https://app.asta.htwg-konstanz.de/api/events"
  private events: SemesterEvents;

  constructor(private backendRequest: BackendRequestService) { }

  private eventsRequest(): Promise<Object> {
    return this.backendRequest.safe_get_request(this.serverUrl, 1)
  }

  getIsOpen(): Promise<SemesterEvents> {
    return new Promise((resolve, reject) => {
      this.eventsRequest().then(
        (response: HttpResponse) => {
          if (response.statusCode == 200) {
            this.events = response.content.toJSON() as any as SemesterEvents;
            return resolve(this.events);
          } else {
            this.events = this.dummy
            return resolve(this.events)
          }

        },
        (err) => {
          this.events = this.dummy
          resolve(this.events)
          //reject(err)
        }
      );
    })
  }
  dummy: SemesterEvents = {
    "events": [
      {
        "title": "Prüfungsanmeldezeitraum Sommersemester 2019",
        "eventDate": "Mittwoch, 8. Mai bis Mittwoch, 22. Mai 2019"
      },
      {
        "title": "Prüfungszeitraum Sommersemester 2019",
        "eventDate": "Samstag, 06. Juli bis Mittwoch 31. Juli 2019"
      },
      {
        "title": "Zweiter Prüfungszeitraum Sommersemester 2019",
        "eventDate": "Montag, 23. September bis Freitag, 4. Oktober 2019"
      },
      {
        "title": "Vorlesungsbeginn",
        "eventDate": "18. März 2019"
      },
      {
        "title": "Vorlesungsende",
        "eventDate": "05. Juli 2019"
      }
    ]
  }
}
