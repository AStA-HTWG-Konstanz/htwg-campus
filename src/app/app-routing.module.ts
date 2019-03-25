import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from "./main/schedule/schedule.component";
import { GradesComponent } from "./main/grades/grades.component";
import { DefaultComponent } from "./main/default/default.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "grades", component: GradesComponent },
    { path: "default", component: DefaultComponent},
    { path: "settings", component: SettingsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
