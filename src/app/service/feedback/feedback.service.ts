import { Injectable } from "@angular/core";
import { BackendRequestService } from '../backend-request/backend-request.service';
import { HttpResponse } from 'tns-core-modules/http/http';
import { Feedback } from "~/app/model/feedback/feedback.model";
import { request } from "tns-core-modules/http";

@Injectable({
    providedIn: 'root'
})

export class FeedbackService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/userfeedback";
    private header = { "Content-Type": "application/json" }

    constructor(){}

    submit(feedback: Feedback): Promise<HttpResponse> {
        return request({
            url: this.serverUrl,
            method: "POST",
            headers: this.header,
            content: this.getRequestBody(feedback)
        })
    }

    private getRequestBody(feedback: Feedback) {
        console.log(feedback);
        return JSON.stringify({ os: feedback.os, category: feedback.category, message: feedback.message, device: feedback.device})
    }
}