import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Feedback } from "~/app/model/feedback/feedback.model";
import { FeedbackService } from "~/app/service/feedback/feedback.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { HttpResponse } from "tns-core-modules/http";
import * as app from "tns-core-modules/application";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";




@Component({
    selector: 'ns-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

    feedback: Feedback;

    constructor(
        private routerExtensions: RouterExtensions,
        private feedbackService: FeedbackService
    ) { }

    public category: Array<string> = ["Feedback", "Error"];

    public onSelectedIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        this.feedback.category = picker.selectedIndex;
    }

    public onFeedbackChanged(args: any) {
        let textField = <TextField>args.object;
        this.feedback.message = textField.text;
    }

    public submitFeedback() {
        if(isAndroid) {
            this.feedback.os = "Android";
        } else {
            this.feedback.os = "iOS";
        }

        this.feedbackService.submit(this.feedback).then(
            (resolved: HttpResponse) => {

            }
        )
    }

    ngOnInit() {
        this.feedback = new Feedback("", 0, "");
    }

    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
    }
}