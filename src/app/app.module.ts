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
import { CanteenComponent } from './main/canteen/canteen.component';
import { GradesComponent } from './main/grades/grades.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { EndlichtComponent } from "./main/endlicht/endlicht.component";
import { SemestereventsComponent } from "./main/semesterevents/semesterevents.component";
import { CacheService } from './service/cache/cache.service';
import { EndlichtService } from "./service/endlicht/endlicht.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { Http } from "@angular/http";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsComponent } from "./settings/settings.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { GradesRefreshService } from "./service/grades/grades-refresh.service";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "/i18n/", ".json")
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptHttpClientModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        ScheduleComponent,
        CanteenComponent,
        GradesComponent,
        EndlichtComponent,
        SemestereventsComponent,
        ActionButtonComponent,
        SettingsComponent,
        AboutComponent
    ],
    providers: [
        AuthGuard,
        CacheService,
        CanteenService,
        EndlichtService,
        HtwgscheduleService,
        LoginService,
        GradesService,
        GradesRefreshService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
