import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from "./main/schedule/schedule.component";
import { CanteenComponent } from "./main/canteen/canteen.component";
import { AuthGuard } from "./service/auth/authGuard.service";
import { GradesComponent } from "./main/grades/grades.component";
import { EndlichtComponent } from "./main/endlicht/endlicht.component";
import { SemesterEvents } from "./model/events/semesterevents";
import { SemestereventsComponent } from "./main/semesterevents/semesterevents.component";
import { SettingsComponent } from "./settings/settings.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "grades", component: GradesComponent, canActivate: [AuthGuard] },
    { path: "schedule", component: ScheduleComponent, canActivate: [AuthGuard] },
    { path: "canteen", component: CanteenComponent },
    { path: "endlicht", component: EndlichtComponent },
    { path: "events", component: SemestereventsComponent },
    { path: "settings", component: SettingsComponent },
    { path: "about", component: AboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
