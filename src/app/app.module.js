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
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var grades_component_1 = require("./main/grades/grades.component");
var default_component_1 = require("./main/default/default.component");
var settings_component_1 = require("./settings/settings.component");
var signin_component_1 = require("./signin/signin.component");
var authGuard_service_1 = require("~/app/services/auth/authGuard.service");
var login_service_1 = require("~/app/services/login/login.service");
var grades_service_1 = require("./services/grades/grades.service");
var canteen_component_1 = require("./main/canteen/canteen.component");
var action_button_component_1 = require("./action-button/action-button.component");
var asta_component_1 = require("./main/asta/asta.component");
var department_informatik_component_1 = require("./main/department-informatik/department-informatik.component");
var print_balance_component_1 = require("./main/print-balance/print-balance.component");
var angular_3 = require("nativescript-pager/angular");
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
                angular_1.NativeScriptUISideDrawerModule,
                angular_3.PagerModule
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
                canteen_component_1.ItemDetailComponentB,
                asta_component_1.AstaComponent,
                department_informatik_component_1.DepartmentInformatikComponent,
                print_balance_component_1.PrintBalanceComponent,
            ],
            providers: [
                authGuard_service_1.AuthGuard,
                canteen_service_1.CanteenService,
                htwgschedule_service_1.HtwgscheduleService,
                login_service_1.LoginService,
                grades_service_1.GradesService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRiw0REFBK0U7QUFDL0UsMkRBQXdEO0FBRXhELGlEQUErQztBQUMvQyx3REFBc0Q7QUFDdEQseUVBQXVFO0FBRXZFLHFGQUFtRjtBQUNuRiwwRUFBd0U7QUFFeEUsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSxrRkFBa0Y7QUFDbEYsbUVBQWlFO0FBQ2pFLHNFQUFvRTtBQUNwRSxvRUFBa0U7QUFDbEUsOERBQTREO0FBQzVELDJFQUFrRTtBQUNsRSxvRUFBa0U7QUFDbEUsbUVBQWdFO0FBQ2hFLHNFQUE4RjtBQUM5RixtRkFBZ0Y7QUFDaEYsNkRBQTJEO0FBQzNELGdIQUE2RztBQUM3Ryx3RkFBcUY7QUFDckYsc0RBQXlEO0FBNEN6RDtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF4Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQixzQ0FBNEI7Z0JBQzVCLHdDQUE4QjtnQkFDOUIscUJBQVc7YUFDZDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixzQ0FBaUI7Z0JBQ2pCLGtDQUFlO2dCQUNmLG9DQUFnQjtnQkFDaEIsc0NBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZiwrQ0FBcUI7Z0JBQ3JCLHdDQUFvQjtnQkFDcEIsd0NBQW9CO2dCQUNwQiw4QkFBYTtnQkFDYiwrREFBNkI7Z0JBQzdCLCtDQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw2QkFBUztnQkFDVCxnQ0FBYztnQkFDZCwwQ0FBbUI7Z0JBQ25CLDRCQUFZO2dCQUNaLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9tYWluL21haW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBIdHdnc2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NjaGVkdWxlL2h0d2dzY2hlZHVsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYW50ZWVuU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jYW50ZWVuL2NhbnRlZW4uc2VydmljZVwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIdHRwQ2xpZW50IHdyYXBwZXJcbmltcG9ydCB7IEdyYWRlc0NvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9ncmFkZXMvZ3JhZGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tICcuL3NpZ25pbi9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hdXRoL2F1dGhHdWFyZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgR3JhZGVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JhZGVzL2dyYWRlcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudEEsIEl0ZW1EZXRhaWxDb21wb25lbnRCIH0gZnJvbSAnLi9tYWluL2NhbnRlZW4vY2FudGVlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEFzdGFDb21wb25lbnQgfSBmcm9tICcuL21haW4vYXN0YS9hc3RhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXBhcnRtZW50SW5mb3JtYXRpa0NvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9kZXBhcnRtZW50LWluZm9ybWF0aWsvZGVwYXJ0bWVudC1pbmZvcm1hdGlrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmludEJhbGFuY2VDb21wb25lbnQgfSBmcm9tICcuL21haW4vcHJpbnQtYmFsYW5jZS9wcmludC1iYWxhbmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcGFnZXIvYW5ndWxhclwiO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBQYWdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWFpbkNvbXBvbmVudCxcbiAgICAgICAgU2NoZWR1bGVDb21wb25lbnQsXG4gICAgICAgIEdyYWRlc0NvbXBvbmVudCxcbiAgICAgICAgRGVmYXVsdENvbXBvbmVudCxcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIFNpZ25pbkNvbXBvbmVudCxcbiAgICAgICAgQWN0aW9uQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50QSxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudEIsXG4gICAgICAgIEFzdGFDb21wb25lbnQsXG4gICAgICAgIERlcGFydG1lbnRJbmZvcm1hdGlrQ29tcG9uZW50LFxuICAgICAgICBQcmludEJhbGFuY2VDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICBDYW50ZWVuU2VydmljZSxcbiAgICAgICAgSHR3Z3NjaGVkdWxlU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBHcmFkZXNTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19