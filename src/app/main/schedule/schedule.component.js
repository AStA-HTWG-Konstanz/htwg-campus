"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var htwgschedule_service_1 = require("~/app/services/schedule/htwgschedule.service");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var router_1 = require("nativescript-angular/router");
var scheduleuser_model_1 = require("~/app/model/scheduleuser/scheduleuser.model");
var appSettings = require("tns-core-modules/application-settings");
var action_button_component_1 = require("../../action-button/action-button.component");
var router_2 = require("@angular/router");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(scheduleService, routerExtensions, activatedRoute) {
        this.scheduleService = scheduleService;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.scheduleResponse = "";
        this.getSchedule();
    };
    ScheduleComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { clearHistory: true });
    };
    ScheduleComponent.prototype.getSchedule = function () {
        var _this = this;
        if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
            var storedUser = JSON.parse(appSettings.getString("account"));
            var user = new scheduleuser_model_1.scheduleUser(storedUser.username, storedUser.password, true);
            this.scheduleService.getTimeTable(user).then(function (resolved) {
                _this.scheduleResponse = (resolved == null) ? "Not Lectures found" : resolved;
                //console.log(JSON.stringify(resolved));
            }, function (rejected) {
                alert(JSON.stringify(rejected));
            });
        }
        else {
            alert(JSON.stringify("user isnt login"));
        }
    };
    ScheduleComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("actionButton"),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], ScheduleComponent.prototype, "_buttonRef", void 0);
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: "ns-schedule",
            templateUrl: "./schedule.component.html",
            styleUrls: ["./schedule.component.css"],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [htwgschedule_service_1.HtwgscheduleService,
            router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELHFGQUFtRjtBQUVuRixrREFBb0Q7QUFDcEQsNkRBQTREO0FBQzVELHNEQUErRDtBQUUvRCxrRkFBMkU7QUFDM0UsbUVBQXFFO0FBQ3JFLHVGQUFvRjtBQUVwRiwwQ0FBaUQ7QUFTakQ7SUFPSSwyQkFDWSxlQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsY0FBOEI7UUFGOUIsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLEdBQUcsQ0FBQyxjQUFjLENBQUMseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuRSxJQUFJLFVBQVUsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDeEMsVUFBQyxRQUFhO2dCQUNWLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsb0JBQW9CLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDM0Usd0NBQXdDO1lBQzVDLENBQUMsRUFDRCxVQUFDLFFBQWE7Z0JBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQ0osQ0FBQztTQUNUO2FBQU07WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTFDRDtRQURDLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUNkLCtDQUFxQjt5REFBQztJQUh6QixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBUytCLDBDQUFtQjtZQUNsQix5QkFBZ0I7WUFDbEIsdUJBQWM7T0FWakMsaUJBQWlCLENBOEM3QjtJQUFELHdCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHdnc2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NjaGVkdWxlL2h0d2dzY2hlZHVsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC9zY2hlZHVsZXVzZXIvc2NoZWR1bGV1c2VyLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zY2hlZHVsZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2NoZWR1bGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2NoZWR1bGUuY29tcG9uZW50LmNzc1wiXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIilcbiAgICBfYnV0dG9uUmVmOiBBY3Rpb25CdXR0b25Db21wb25lbnQ7XG5cbiAgICBzY2hlZHVsZVJlc3BvbnNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZVNlcnZpY2U6IEh0d2dzY2hlZHVsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgKSB7XG4gICAgICAgIGFwcC5zZXRDc3NGaWxlTmFtZShlbnZpcm9ubWVudC5zdHlsZSk7XG4gICAgICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZXNwb25zZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZ2V0U2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwibWFpblwiLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBnZXRTY2hlZHVsZSgpIHtcbiAgICAgICAgaWYgKGFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJpc0xvZ2dlZEluXCIpICYmIGFwcFNldHRpbmdzLmhhc0tleShcImFjY291bnRcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVkVXNlcjogVXNlciA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiKSk7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSBuZXcgc2NoZWR1bGVVc2VyKHN0b3JlZFVzZXIudXNlcm5hbWUsIHN0b3JlZFVzZXIucGFzc3dvcmQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVTZXJ2aWNlLmdldFRpbWVUYWJsZSh1c2VyKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzb2x2ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVJlc3BvbnNlID0gKHJlc29sdmVkID09IG51bGwpPyBcIk5vdCBMZWN0dXJlcyBmb3VuZFwiOiByZXNvbHZlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzb2x2ZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKHJlamVjdGVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlamVjdGVkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoXCJ1c2VyIGlzbnQgbG9naW5cIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==