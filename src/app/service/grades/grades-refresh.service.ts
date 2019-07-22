import { Injectable } from '@angular/core';
import { BackendRequestService } from '../backend-request/backend-request.service';
import { HttpResponse } from 'tns-core-modules/http/http';
import { Grades } from '~/app/model/grades/grades';

@Injectable({
    providedIn: 'root'
})
export class GradesRefreshService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/grades/refresh";

    constructor(private backendRequest: BackendRequestService) { }

    getGrades(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.backendRequest.request_grades(this.serverUrl).then(
                (response: HttpResponse) => {
                    if (response.statusCode !== 200) {
                        return resolve(false);
                    }
                    resolve(true);
                },
                error => {
                    reject(error)
                }
            );
        });
    }

    resetToken() {
        this.backendRequest.createNewToken()
    }
}