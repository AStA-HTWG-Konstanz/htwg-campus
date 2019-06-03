import { Schedule } from './../../model/schedule/Schedule';
import { LecturesPerDay } from './../../model/schedule/lectures/LecturesPerDay'
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HtwgscheduleService } from "~/app/services/schedule/htwgschedule.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { environment } from "~/app/environment/environment";
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "~/app/model/user/user.model";
import { scheduleUser } from "~/app/model/scheduleuser/scheduleuser.model";
import * as appSettings from "tns-core-modules/application-settings";
import { ActionButtonComponent } from "../../action-button/action-button.component";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { ActivatedRoute } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-schedule",
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.css"],
    moduleId: module.id
})
export class ScheduleComponent implements OnInit {

    @ViewChild("actionButton", { static: false })
    _buttonRef: ActionButtonComponent;

    @ViewChild('scheduleView', { static: false })
    scheduleView: ElementRef;

    currentSchedule: Schedule = new Schedule(<Array<LecturesPerDay>>[]);
    clickedList: Array<number> = new Array();

    lectures: LecturesPerDay[] = [];
    selectedIndex: number = 0;
    processing = false;
    constructor(
        private scheduleService: HtwgscheduleService,
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
    ) {
        this.processing = true;
        this.getSchedule();
    }

    ngOnInit() {
        this.currentSchedule = null;
        //this.getSchedule();
    }

    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    }

    getSchedule() {
        this.scheduleService.getTimeTable().then(
            (resolved: any) => {
                this.currentSchedule = (resolved) ? resolved : null;
                this.lectures = this.currentSchedule.lectures;
                this.processing = false;
                //console.log(JSON.stringify(resolved));
            },
            (rejected: any) => {
                alert(JSON.stringify(rejected));
            }
        );
    }
    clicked(index: number) {
        if (this.clickedList.some(i => i == index)) {
            let tmp = this.clickedList.indexOf(index);
            this.clickedList.splice(tmp, 1);
        } else {
            this.clickedList.push(index);
        }
    }
    isVisible(item: number) {
        if (this.clickedList.length < 1) {
            return false;
        }
        return this.clickedList.some(i => i == item) ? true : false;
    }
}
