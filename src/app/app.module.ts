import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from './main/schedule/schedule.component';

import { HtwgscheduleService } from "~/app/services/schedule/htwgschedule.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { GradesComponent } from './main/grades/grades.component';
import { DefaultComponent } from './main/default/default.component';
import { SettingsComponent } from './settings/settings.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from "~/app/services/auth/authGuard.service";
import { BackendService } from "~/app/services/backend/backend.service";
import { LoginService } from "~/app/services/login/login.service";
import { CanteenComponent } from './main/canteen/canteen.component';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
    ],
    declarations: [
        AppComponent,
        MainComponent,
        ScheduleComponent,
        GradesComponent,
        DefaultComponent,
        SettingsComponent,
        SigninComponent,
        CanteenComponent,
        ActionButtonComponent
    ],
    providers: [ 
        HtwgscheduleService,
        AuthGuard,
        BackendService,
        LoginService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
