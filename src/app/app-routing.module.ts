import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from "./main/schedule/schedule.component";

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent },
    { path: "schedule", component: ScheduleComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
