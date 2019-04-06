import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { scheduleUser } from "~/app/model/scheduleuser/scheduleuser.model";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class HtwgscheduleService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/lectures";

    latestRequest: Date;
    storedResponse: any;
    constructor(private http: HttpClient) {}

    // TODO: changed response any to schedule model
    getSchedule(body: scheduleUser): Observable<Object> {
        let headers = this.createRequestHeader();
        return this.http
            .post<any>(this.serverUrl, JSON.stringify(body), {
                headers: headers
            })
            .pipe(
                tap(_ => console.log("fetch schedule plan")),
                catchError(this.handleError<any>("getSchedule"))
            );
    }

    getTimeTable(body: scheduleUser): Promise<string> {
        return new Promise((resolve, reject) => {
            if (
                this.latestRequest != null &&
                this.latestRequest.getUTCDate == new Date().getUTCDate
            ) {
                console.log(
                    "already requested today" +
                        JSON.stringify(this.latestRequest.getUTCDate)
                );
                resolve(this.storedResponse);
            } else {
                this.getSchedule(body).subscribe(
                    (response: any) => {
                        console.log(
                            "schedule resposne: " + JSON.stringify(response)
                        );
                        this.latestRequest = new Date();
                        this.storedResponse = response;
                        resolve(response);
                    },
                    error => reject(error)
                );
            }
        });
    }

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return headers;
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
