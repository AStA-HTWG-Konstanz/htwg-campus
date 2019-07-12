import { SemesterGrades } from '../../model/grades/semester-grades';
import { Injectable } from "@angular/core";
import { BackendRequestService } from '../backend-request/backend-request.service';
import { HttpResponse } from 'tns-core-modules/http/http';
import { Grades } from '~/app/model/grades/grades';

@Injectable()
export class GradesService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/grades";

    constructor(private backendRequest: BackendRequestService) { }

    getGrades(): Promise<Grades> {
        return new Promise((resolve, reject) => {
            this.backendRequest.request_grades(this.serverUrl).then(
                (response: HttpResponse) => {
                    if (response.statusCode !== 200) {
                        return reject("grades service reject: " + response.statusCode);
                    }
                    let content = response.content.toString();
                    if (content.length > 0) {
                        resolve(response.content.toJSON() as Grades);
                    } else {
                        reject(response);
                    }
                },
                error => {
                    reject(error)
                }
            );
        });
    }
}
