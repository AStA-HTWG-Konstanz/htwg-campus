import { Schedule } from '../../model/schedule/Schedule';
import { LecturesPerDay } from '../../model/schedule/lectures/LecturesPerDay';
import { BackendRequestService } from '../backend-request/backend-request.service';
import { Injectable } from "@angular/core";
import { HttpResponse } from 'tns-core-modules/http/http';

@Injectable()
export class HtwgscheduleService {
  private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/lectures";

  storedResponse: Schedule;
  constructor(private backendRequest: BackendRequestService) { }

  getTimeTable(): Promise<Schedule> {
    return new Promise((resolve, reject) => {
      this.backendRequest.request(this.serverUrl).then(
        (response: HttpResponse) => {
          if (response.statusCode !== 200) {
            return reject("schedule service reject: " + response.statusCode);
          }
          let content = response.content.toString();
          if (content.length > 0 && response.content.toJSON != null) {
            console.log("schedule response:");
            this.storedResponse = this.dummy//response.content.toJSON() as any as Schedule;
            if (!this.storedResponse) return reject(content);
            resolve(this.storedResponse);
          } else {
            reject(content);
          }
        },
        error => reject(error)
      );
    });
  }
  dummy: any = {
    "lectures": [
      {
        "date": "2019-6-28",
        "lectures": [
          {
            "name": "AIN SE5 IT-Sicherheit",
            "startTime": "14:00:00",
            "endTime": "15:30:00",
            "room": "O - 002",
            "category": "Einzelveranstaltung"
          }
        ]
      },
      {
        "date": "2019-6-5",
        "lectures": [
          {
            "name": "AIN SE4 Software-Archtekturen",
            "startTime": "08:00:00",
            "endTime": "09:30:00",
            "room": "F - 033",
            "category": "Vorlesung/Übung"
          },
          {
            "name": "AIN SE4 Software-Archtekturen",
            "startTime": "09:45:00",
            "endTime": "11:15:00",
            "room": "F - 033",
            "category": "Vorlesung/Übung"
          }
        ]
      },
      {
        "date": "2019-7-6",
        "lectures": [
          {
            "name": "AIN SE5 IT-Sicherheit",
            "startTime": "08:00:00",
            "endTime": "09:30:00",
            "room": "O - 008",
            "category": "Einzelveranstaltung"
          },
          {
            "name": "AIN SE5 IT-Sicherheit",
            "startTime": "08:00:00",
            "endTime": "09:30:00",
            "room": "F - 223",
            "category": "Einzelveranstaltung"
          }
        ]
      }
    ]
  }
}
