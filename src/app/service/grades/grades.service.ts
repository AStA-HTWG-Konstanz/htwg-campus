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
            this.backendRequest.request(this.serverUrl).then(
                (response: HttpResponse) => {
                    if (response.statusCode !== 200) {
                        return reject("grades service reject: " + response.statusCode);
                    }
                    let content = response.content.toString();
                    if (content.length > 0) {
                        console.log("grades response: ");
                        resolve(response.content.toJSON() as Grades);
                    } else {
                        reject(response);
                    }
                },
                error => {
                    console.log("error");
                    reject(error)
                }
            );
        });
    }
    // TODO: remove dummy
    dummyResponse: Grades = {
        grades: [
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
                    },
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
                    },
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
                    },
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
                    },
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
                    },
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
            },
            {
                semesterIdentifier: "Wintersemester 17/18",
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
            },
            {
                semesterIdentifier: "Sommersemester 18",
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
            },
            {
                semesterIdentifier: "Wintersemester 18/19",
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
}
