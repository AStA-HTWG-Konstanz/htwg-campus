"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-drop-down/angular");
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
var angular_4 = require("nativescript-pager/angular");
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
                angular_4.PagerModule,
                angular_3.DropDownModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRiw0REFBK0U7QUFDL0UsMERBQWdFO0FBQ2hFLDJEQUF3RDtBQUV4RCxpREFBK0M7QUFDL0Msd0RBQXNEO0FBQ3RELHlFQUF1RTtBQUV2RSxxRkFBbUY7QUFDbkYsMEVBQXdFO0FBRXhFLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsa0ZBQWtGO0FBQ2xGLG1FQUFpRTtBQUNqRSxzRUFBb0U7QUFDcEUsb0VBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCwyRUFBa0U7QUFDbEUsb0VBQWtFO0FBQ2xFLG1FQUFnRTtBQUNoRSxzRUFBOEY7QUFDOUYsbUZBQWdGO0FBQ2hGLDZEQUEyRDtBQUMzRCxnSEFBNkc7QUFDN0csd0ZBQXFGO0FBQ3JGLHNEQUF5RDtBQTZDekQ7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBekNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7Z0JBQzlCLHFCQUFXO2dCQUNYLHdCQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2Ysb0NBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLGtDQUFlO2dCQUNmLCtDQUFxQjtnQkFDckIsd0NBQW9CO2dCQUNwQix3Q0FBb0I7Z0JBQ3BCLDhCQUFhO2dCQUNiLCtEQUE2QjtnQkFDN0IsK0NBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDZCQUFTO2dCQUNULGdDQUFjO2dCQUNkLDBDQUFtQjtnQkFDbkIsNEJBQVk7Z0JBQ1osOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCJcbmltcG9ydCB7IERyb3BEb3duTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vYW5ndWxhclwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbi9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tICcuL21haW4vc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSHR3Z3NjaGVkdWxlU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9zY2hlZHVsZS9odHdnc2NoZWR1bGUuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FudGVlblNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvY2FudGVlbi9jYW50ZWVuLnNlcnZpY2VcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG5pbXBvcnQgeyBHcmFkZXNDb21wb25lbnQgfSBmcm9tICcuL21haW4vZ3JhZGVzL2dyYWRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduaW4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC9hdXRoR3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdyYWRlc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dyYWRlcy9ncmFkZXMuc2VydmljZSdcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnRBLCBJdGVtRGV0YWlsQ29tcG9uZW50QiB9IGZyb20gJy4vbWFpbi9jYW50ZWVuL2NhbnRlZW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBc3RhQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL2FzdGEvYXN0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVwYXJ0bWVudEluZm9ybWF0aWtDb21wb25lbnQgfSBmcm9tICcuL21haW4vZGVwYXJ0bWVudC1pbmZvcm1hdGlrL2RlcGFydG1lbnQtaW5mb3JtYXRpay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpbnRCYWxhbmNlQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL3ByaW50LWJhbGFuY2UvcHJpbnQtYmFsYW5jZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBhZ2VyL2FuZ3VsYXJcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgUGFnZXJNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBNYWluQ29tcG9uZW50LFxuICAgICAgICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgICAgICAgR3JhZGVzQ29tcG9uZW50LFxuICAgICAgICBEZWZhdWx0Q29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBBY3Rpb25CdXR0b25Db21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRBLFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50QixcbiAgICAgICAgQXN0YUNvbXBvbmVudCxcbiAgICAgICAgRGVwYXJ0bWVudEluZm9ybWF0aWtDb21wb25lbnQsXG4gICAgICAgIFByaW50QmFsYW5jZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoR3VhcmQsXG4gICAgICAgIENhbnRlZW5TZXJ2aWNlLFxuICAgICAgICBIdHdnc2NoZWR1bGVTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIEdyYWRlc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=