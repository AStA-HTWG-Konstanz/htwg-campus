"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var main_component_1 = require("./main/main.component");
var schedule_component_1 = require("./main/schedule/schedule.component");
var grades_component_1 = require("./main/grades/grades.component");
var default_component_1 = require("./main/default/default.component");
var settings_component_1 = require("./settings/settings.component");
var routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: main_component_1.MainComponent },
    { path: "schedule", component: schedule_component_1.ScheduleComponent },
    { path: "grades", component: grades_component_1.GradesComponent },
    { path: "default", component: default_component_1.DefaultComponent },
    { path: "settings", component: settings_component_1.SettingsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSx3REFBc0Q7QUFDdEQseUVBQXVFO0FBQ3ZFLG1FQUFpRTtBQUNqRSxzRUFBb0U7QUFDcEUsb0VBQWtFO0FBRWxFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUM7SUFDL0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztDQUNwRCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUNwRixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL21haW4vbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNjaGVkdWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbi9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdyYWRlc0NvbXBvbmVudCB9IGZyb20gXCIuL21haW4vZ3JhZGVzL2dyYWRlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbWFpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcIm1haW5cIiwgY29tcG9uZW50OiBNYWluQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInNjaGVkdWxlXCIsIGNvbXBvbmVudDogU2NoZWR1bGVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiZ3JhZGVzXCIsIGNvbXBvbmVudDogR3JhZGVzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBEZWZhdWx0Q29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywge29uU2FtZVVybE5hdmlnYXRpb246ICdyZWxvYWQnfSldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=