import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"
import { AppRoutingModule } from "./htwgapp-routing.module";

import { AppComponent } from "./htwgapp.component";
import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from './main/schedule/schedule.component';

import { HtwgscheduleService } from "~/htwgapp/services/schedule/htwgschedule.service";
import { CanteenService } from "~/htwgapp/services/canteen/canteen.service";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { GradesComponent } from './main/grades/grades.component';
import { DefaultComponent } from './main/default/default.component';
import { SettingsComponent } from './settings/settings.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from "~/htwgapp/services/auth/authGuard.service";
import { LoginService } from "~/htwgapp/services/login/login.service";
import { GradesService } from './services/grades/grades.service'
import { ItemDetailComponentA, ItemDetailComponentB } from './main/canteen/canteen.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { AstaComponent } from './main/asta/asta.component';
import { DepartmentInformatikComponent } from './main/department-informatik/department-informatik.component';
import { PrintBalanceComponent } from './main/print-balance/print-balance.component';
import { PagerModule } from "nativescript-pager/angular";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        PagerModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        ScheduleComponent,
        GradesComponent,
        DefaultComponent,
        SettingsComponent,
        SigninComponent,
        ActionButtonComponent,
        ItemDetailComponentA,
        ItemDetailComponentB,
        AstaComponent,
        DepartmentInformatikComponent,
        PrintBalanceComponent,
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
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
