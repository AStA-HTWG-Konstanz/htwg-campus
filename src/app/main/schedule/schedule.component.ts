import { Component, OnInit, ViewChild } from "@angular/core";
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

    @ViewChild("actionButton")
    _buttonRef: ActionButtonComponent;

    scheduleResponse: string;

    constructor(
        private scheduleService: HtwgscheduleService,
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
    ) {
        // app.setCssFileName(environment.style);
        // app.loadAppCss();
    }

    ngOnInit() {
        this.scheduleResponse = "";
        this.getSchedule();
    }

    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true});
    }

    getSchedule() {
        if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
                var storedUser: User = JSON.parse(appSettings.getString("account"));
                var user = new scheduleUser(storedUser.username, storedUser.password, true);
                this.scheduleService.getTimeTable(user).then(
                    (resolved: any) => {
                        this.scheduleResponse = (resolved == null)? "Not Lectures found": resolved;
                        console.log(JSON.stringify(resolved));
                    },
                    (rejected: any) => {
                        alert(JSON.stringify(rejected));
                    }
                );
        } else {
            alert(JSON.stringify("user isnt login"));
        }
    }
}
