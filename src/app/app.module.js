"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var main_component_1 = require("./main/main.component");
var schedule_component_1 = require("./main/schedule/schedule.component");
var htwgschedule_service_1 = require("~/app/services/schedule/htwgschedule.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var http_client_1 = require("nativescript-angular/http-client");
var grades_component_1 = require("./main/grades/grades.component");
var default_component_1 = require("./main/default/default.component");
var settings_component_1 = require("./settings/settings.component");
var signin_component_1 = require("./signin/signin.component");
var authGuard_service_1 = require("~/app/services/auth/authGuard.service");
var backend_service_1 = require("~/app/services/backend/backend.service");
var login_service_1 = require("~/app/services/login/login.service");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                angular_1.NativeScriptUISideDrawerModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                schedule_component_1.ScheduleComponent,
                grades_component_1.GradesComponent,
                default_component_1.DefaultComponent,
                settings_component_1.SettingsComponent,
                signin_component_1.SigninComponent
            ],
            providers: [
                htwgschedule_service_1.HtwgscheduleService,
                authGuard_service_1.AuthGuard,
                backend_service_1.BackendService,
                login_service_1.LoginService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUVwRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCx5RUFBdUU7QUFFdkUscUZBQW1GO0FBRW5GLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLGdFQUFnRjtBQUNoRixtRUFBaUU7QUFDakUsc0VBQW9FO0FBQ3BFLG9FQUFrRTtBQUNsRSw4REFBNEQ7QUFDNUQsMkVBQWtFO0FBQ2xFLDBFQUF3RTtBQUN4RSxvRUFBa0U7QUFrQ2xFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWhDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLDBDQUE0QjtnQkFDNUIsd0NBQThCO2FBQ2pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2Ysb0NBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLGtDQUFlO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBDQUFtQjtnQkFDbkIsNkJBQVM7Z0JBQ1QsZ0NBQWM7Z0JBQ2QsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL21haW4vbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNjaGVkdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEh0d2dzY2hlZHVsZVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvc2NoZWR1bGUvaHR3Z3NjaGVkdWxlLnNlcnZpY2VcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBHcmFkZXNDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JhZGVzL2dyYWRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduaW4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC9hdXRoR3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYmFja2VuZC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE1haW5Db21wb25lbnQsXG4gICAgICAgIFNjaGVkdWxlQ29tcG9uZW50LFxuICAgICAgICBHcmFkZXNDb21wb25lbnQsXG4gICAgICAgIERlZmF1bHRDb21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBTaWduaW5Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBcbiAgICAgICAgSHR3Z3NjaGVkdWxlU2VydmljZSxcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBCYWNrZW5kU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19