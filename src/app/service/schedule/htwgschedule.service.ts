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
            this.storedResponse = this.lectureParser(response.content.toJSON);
            if (!this.storedResponse) return reject(content);
            console.log(JSON.stringify(this.storedResponse))
            resolve(this.storedResponse);
          } else {
            reject(content);
          }
        },
        error => reject(error)
      );
    });
  }
  lectureParser(lecturePayload: Object) {
    if (JSON.stringify(lecturePayload) == null) {
      return null;
    }
    let schedule: Schedule = JSON.parse(JSON.stringify(lecturePayload));
    if (schedule) {
      return schedule;
    }
    return null;
  }
  dummySchedule = {
    "lectures": [
      {
        "date": "6.5.2019",
        "lectures": [
          {
            "name": "Stochastik",
            "startTime": "8:00",
            "endTime": "9:30",
            "room": "O007",
            "category": "Vorlesung"
          },
          {
            "name": "Programmiertechnik 1",
            "startTime": "9:45",
            "endTime": "11:15",
            "room": "F033",
            "category": "Übung"
          }
        ]
      },
      {
        "date": "7.5.2019",
        "lectures": [
          {
            "name": "Englisch",
            "startTime": "11:30",
            "endTime": "13:00",
            "room": "C109",
            "category": "Vorlesung"
          }
        ]
      },
      {
        "date": "8.5.2019",
        "lectures": [
          {
            "name": "Systemsoftware",
            "startTime": "8:00",
            "endTime": "9:30",
            "room": "O108",
            "category": "Vorlesung"
          },
          {
            "name": "Rechnerarchitektur",
            "startTime": "9:45",
            "endTime": "11:15",
            "room": "O303",
            "category": "Übung"
          },
          {
            "name": "Rechnerarchitektur",
            "startTime": "11:30",
            "endTime": "13:00",
            "room": "O303",
            "category": "Vorlesung"
          }
        ]
      },
      {
        "date": "9.5.2019",
        "lectures": [
          {
            "name": "Stochastik",
            "startTime": "14:00",
            "endTime": "15:30",
            "room": "F023",
            "category": "Vorlesung"
          },
          {
            "name": "Programmiertechnik 1",
            "startTime": "9:45",
            "endTime": "11:15",
            "room": "F033",
            "category": "Vorlesung"
          }
        ]
      },
      {
        "date": "10.5.2019",
        "lectures": [
          {
            "name": "Englisch",
            "startTime": "15:45",
            "endTime": "17:15",
            "room": "C109",
            "category": "Übung"
          },
          {
            "name": "Programmiertechnik 1",
            "startTime": "9:45",
            "endTime": "11:15",
            "room": "F033",
            "category": "Vorlesung"
          }
        ]
      }
    ]
  }
}
