import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

    @ViewChild("actionButton", { static: false })
    _buttonRef: ActionButtonComponent;

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() {
    }
    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
    }
}