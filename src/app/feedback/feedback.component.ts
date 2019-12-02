import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Feedback } from "~/app/model/feedback/feedback.model";
import { FeedbackService } from "~/app/service/feedback/feedback.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { HttpResponse } from "tns-core-modules/http";
import * as app from "tns-core-modules/application";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";
import { TranslateService } from "@ngx-translate/core";
import * as dialogs from "tns-core-modules/ui/dialogs"





@Component({
    selector: 'ns-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

    feedback: Feedback;
    @ViewChild("categoryInput", {static: false}) categoryInput: ElementRef;

    constructor(
        private routerExtensions: RouterExtensions,
        private feedbackService: FeedbackService,
        private translate: TranslateService,
    ) { }

    public selectFeedbackCategory() {
        let message = this.translate.currentLang === "en" ? "Choose a Category" : "Wähle eine Kategorie"
        dialogs.action({
            message: message,
            cancelButtonText: this.translate.currentLang === "en" ? "Close" : "Schließen",
            actions: ["Error", "Feedback"]
        }).then(result => {
            if (result === "Error") {
                this.feedback.category = 0;
                this.categoryInput.nativeElement.text = "Error"
            } else {
                this.feedback.category = 1;
                this.categoryInput.nativeElement.text = "Feedback"

            }
        })
    }

    public onFeedbackChanged(args: any) {
        let textField = <TextField>args.object;
        this.feedback.message = textField.text;
    }

    public submitFeedback() {

        this.feedback.os = device.os + " " + device.osVersion;
        this.feedback.device = device.manufacturer + " " + device.model;

        if(this.feedback.message === '') {
            dialogs.alert({
                title: this.translate.currentLang === "en" ? "Message" : "Nachricht",
                message: this.translate.currentLang === "en" ? "Please submit a Message" : "Bitte sende uns eine Nachricht",
                okButtonText: "Ok"
            })
        } else {
            this.feedbackService.submit(this.feedback).then(
                (resolved: HttpResponse) => {
                    if(resolved.statusCode != 200) {
                        alert("Error");
                    } else {
                        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true }).then(() => {
                            dialogs.alert({
                                title: this.translate.currentLang === "en" ? "Message" : "Info",
                                message: this.translate.currentLang === "en" ? "Thanks for your Feedback!" : "Vielen Dank für dein Feedback!",
                                okButtonText: "Ok"
                            })
                        });
                    }
                }
            )
        }
    }

    ngOnInit() {
        this.feedback = new Feedback("", 0, "", "");
    }

    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
    }
}