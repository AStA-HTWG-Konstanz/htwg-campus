import { SemesterGrades } from './../../model/grades/semester-grades';
import { Injectable } from "@angular/core";
import { BackendRequestService } from '../backend-request/backend-request.service';

@Injectable()
export class GradesService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/grades";

    latestRequest: Date;
    storedResponse: SemesterGrades[];
    constructor(private backendRequest: BackendRequestService) {}

    getGrades(): Promise<SemesterGrades[]> {
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
                this.backendRequest.request(this.serverUrl).then(
                    (response: string) => {
                        if (response.length > 0) {
                            console.log("grades response: ");
                            this.latestRequest = new Date();
                            this.storedResponse = this.dummyResponse//JSON.parse(response) as SemesterGrades[];
                            resolve(this.storedResponse);
                        } else {
                            this.storedResponse = this.dummyResponse;
                            console.log("resolve dummy")
                            resolve(this.storedResponse);
                            //reject("empty response from grades request");
                        }
                    },
                    error => {
                        console.log("error");
                        reject(error)
                    }
                );
            }
        });
    }
    // TODO: remove dummy
    dummyResponse: SemesterGrades[] = 
    [
        {
            semesterIdentifier: "Wintersemester 16/17",
            semesterPerformance: [
            {
                course: "AIN",
                name: "Mathematik 1 und Konsolidierung",
                grade: "2",
                ects: "10",
                passed: true,
                bachelor: true,
                master: false
            },
            {
                course: "AIN",
                name: "Mathematik 1 Übungen",
                grade: "0",
                ects: "0",
                passed: true,
                bachelor: true,
                master: false
            }]
        },
        {
            semesterIdentifier: "Sommersemester 17",
            semesterPerformance: [
            {
                course: "AIN",
                name: "Bachelorzwischenprüfung",
                grade: "2,1",
                ects: "60",
                passed: true,
                bachelor: true,
                master: false
            },
            {
                course: "AIN",
                name: "Softwaremodellierung",
                grade: "3",
                ects: "7",
                passed: true,
                bachelor: true,
                master: false
            },
            {
                course: "AIN",
                name: "Systemmodellierung Übungen",
                grade: "0",
                ects: "0",
                passed: true,
                bachelor: true,
                master: false
            }]
        }
    ]
}