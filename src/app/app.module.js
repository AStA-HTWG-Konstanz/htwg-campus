"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var main_component_1 = require("./main/main.component");
var schedule_component_1 = require("./main/schedule/schedule.component");
var htwgschedule_service_1 = require("~/app/services/schedule/htwgschedule.service");
var canteen_service_1 = require("~/app/services/canteen/canteen.service");
var grades_component_1 = require("./main/grades/grades.component");
var default_component_1 = require("./main/default/default.component");
var settings_component_1 = require("./settings/settings.component");
var signin_component_1 = require("./signin/signin.component");
var authGuard_service_1 = require("~/app/services/auth/authGuard.service");
var login_service_1 = require("~/app/services/login/login.service");
var canteen_component_1 = require("./main/canteen/canteen.component");
var action_button_component_1 = require("./action-button/action-button.component");
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
                angular_2.NativeScriptUIListViewModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                schedule_component_1.ScheduleComponent,
                grades_component_1.GradesComponent,
                default_component_1.DefaultComponent,
                settings_component_1.SettingsComponent,
                signin_component_1.SigninComponent,
                action_button_component_1.ActionButtonComponent,
                canteen_component_1.ItemDetailComponentA,
                canteen_component_1.ItemDetailComponentB
            ],
            providers: [
                authGuard_service_1.AuthGuard,
                canteen_service_1.CanteenService,
                htwgschedule_service_1.HtwgscheduleService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRiw0REFBK0U7QUFDL0UsMkRBQXdEO0FBRXhELGlEQUErQztBQUMvQyx3REFBc0Q7QUFDdEQseUVBQXVFO0FBRXZFLHFGQUFtRjtBQUNuRiwwRUFBd0U7QUFPeEUsbUVBQWlFO0FBQ2pFLHNFQUFvRTtBQUNwRSxvRUFBa0U7QUFDbEUsOERBQTREO0FBQzVELDJFQUFrRTtBQUNsRSxvRUFBa0U7QUFDbEUsc0VBQThGO0FBQzlGLG1GQUFnRjtBQXNDaEY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBbkNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2Isc0NBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2YsK0NBQXFCO2dCQUNyQix3Q0FBb0I7Z0JBQ3BCLHdDQUFvQjthQUN2QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw2QkFBUztnQkFDVCxnQ0FBYztnQkFDZCwwQ0FBbUI7Z0JBQ25CLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL21haW4vbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNjaGVkdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEh0d2dzY2hlZHVsZVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvc2NoZWR1bGUvaHR3Z3NjaGVkdWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IENhbnRlZW5TZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2NhbnRlZW4vY2FudGVlbi5zZXJ2aWNlXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgR3JhZGVzQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2dyYWRlcy9ncmFkZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL21haW4vZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGgvYXV0aEd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50QSwgSXRlbURldGFpbENvbXBvbmVudEIgfSBmcm9tICcuL21haW4vY2FudGVlbi9jYW50ZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWFpbkNvbXBvbmVudCxcbiAgICAgICAgU2NoZWR1bGVDb21wb25lbnQsXG4gICAgICAgIEdyYWRlc0NvbXBvbmVudCxcbiAgICAgICAgRGVmYXVsdENvbXBvbmVudCxcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIFNpZ25pbkNvbXBvbmVudCxcbiAgICAgICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50QSxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudEJcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoR3VhcmQsXG4gICAgICAgIENhbnRlZW5TZXJ2aWNlLFxuICAgICAgICBIdHdnc2NoZWR1bGVTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=