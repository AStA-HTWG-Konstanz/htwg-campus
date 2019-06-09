import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from "./service/auth/authGuard.service";
import { CanteenService } from "./service/canteen/canteen.service";
import { HtwgscheduleService } from "./service/schedule/htwgschedule.service";
import { LoginService } from "./service/login/login.service";
import { GradesService } from "./service/grades/grades.service";
import { ScheduleComponent } from './main/schedule/schedule.component';
//import { CanteenComponent } from './main/canteen/canteen.component';

import { CanteenComponent } from './main/canteen/canteen.component';
import { GradesComponent } from './main/grades/grades.component';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        ScheduleComponent,
        CanteenComponent,
        GradesComponent,
        ActionButtonComponent
    ],
    providers: [
        AuthGuard,
        CanteenService,
        HtwgscheduleService,
        LoginService,
        GradesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
