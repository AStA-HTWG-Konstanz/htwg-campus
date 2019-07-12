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
            this.storedResponse = response.content.toJSON() as any as Schedule;
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
}
