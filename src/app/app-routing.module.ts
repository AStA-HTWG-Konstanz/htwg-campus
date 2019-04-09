import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ScheduleComponent } from "./main/schedule/schedule.component";
import { GradesComponent } from "./main/grades/grades.component";
import { ItemDetailComponentA, ItemDetailComponentB } from "./main/canteen/canteen.component";
import { DefaultComponent } from "./main/default/default.component";
import { SettingsComponent } from "./settings/settings.component";
import { AuthGuard } from "~/app/services/auth/authGuard.service";
import { SigninComponent } from "./signin/signin.component";
import {} from "./main/canteen/canteen.component"

const routes: Routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: MainComponent, canActivate: [AuthGuard] },
    { path: "grades", component: GradesComponent, canActivate: [AuthGuard] },
    { path: "item-a/:id", component: ItemDetailComponentA },
    { path: "item-b/:id", component: ItemDetailComponentB },
    { path: "default", component: DefaultComponent, canActivate: [AuthGuard] },
    { path: "settings", component: SettingsComponent, canActivate: [AuthGuard] },
    { path: "login", component: SigninComponent },
    { path: "schedule", component: ScheduleComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
