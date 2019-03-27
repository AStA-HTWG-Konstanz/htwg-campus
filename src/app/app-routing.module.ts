import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from "./main/schedule/schedule.component";
import { GradesComponent } from "./main/grades/grades.component";
import { CanteenComponent } from "./main/canteen/canteen.component";
import { DefaultComponent } from "./main/default/default.component";
import { SettingsComponent } from "./settings/settings.component";
import { AuthGuard } from "~/app/services/auth/authGuard.service";
import { SigninComponent } from "./signin/signin.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent, canActivate: [AuthGuard] },
    { path: "schedule", component: ScheduleComponent, canActivate: [AuthGuard] },
    { path: "grades", component: GradesComponent, canActivate: [AuthGuard] },
    { path: "canteen", component: CanteenComponent, canActivate: [AuthGuard] },
    { path: "default", component: DefaultComponent, canActivate: [AuthGuard] },
    { path: "settings", component: SettingsComponent, canActivate: [AuthGuard] },
    { path: "login", component: SigninComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
