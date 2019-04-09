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
                console.log(JSON.stringify(resolved));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELHFGQUFtRjtBQUVuRixrREFBb0Q7QUFDcEQsNkRBQTREO0FBQzVELHNEQUErRDtBQUUvRCxrRkFBMkU7QUFDM0UsbUVBQXFFO0FBQ3JFLHVGQUFvRjtBQUVwRiwwQ0FBaUQ7QUFTakQ7SUFPSSwyQkFDWSxlQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsY0FBOEI7UUFGOUIsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLEdBQUcsQ0FBQyxjQUFjLENBQUMseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuRSxJQUFJLFVBQVUsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDeEMsVUFBQyxRQUFhO2dCQUNWLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsb0JBQW9CLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxFQUNELFVBQUMsUUFBYTtnQkFDVixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FDSixDQUFDO1NBQ1Q7YUFBTTtZQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBMUNEO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ2QsK0NBQXFCO3lEQUFDO0lBSHpCLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FTK0IsMENBQW1CO1lBQ2xCLHlCQUFnQjtZQUNsQix1QkFBYztPQVZqQyxpQkFBaUIsQ0E4QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0d2dzY2hlZHVsZVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvc2NoZWR1bGUvaHR3Z3NjaGVkdWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwifi9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vYXBwL21vZGVsL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgc2NoZWR1bGVVc2VyIH0gZnJvbSBcIn4vYXBwL21vZGVsL3NjaGVkdWxldXNlci9zY2hlZHVsZXVzZXIubW9kZWxcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXNjaGVkdWxlXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zY2hlZHVsZS5jb21wb25lbnQuY3NzXCJdLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImFjdGlvbkJ1dHRvblwiKVxuICAgIF9idXR0b25SZWY6IEFjdGlvbkJ1dHRvbkNvbXBvbmVudDtcblxuICAgIHNjaGVkdWxlUmVzcG9uc2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHNjaGVkdWxlU2VydmljZTogSHR3Z3NjaGVkdWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICApIHtcbiAgICAgICAgYXBwLnNldENzc0ZpbGVOYW1lKGVudmlyb25tZW50LnN0eWxlKTtcbiAgICAgICAgYXBwLmxvYWRBcHBDc3MoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlc3BvbnNlID0gXCJcIjtcbiAgICAgICAgdGhpcy5nZXRTY2hlZHVsZSgpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXCJtYWluXCIsIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGdldFNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImlzTG9nZ2VkSW5cIikgJiYgYXBwU2V0dGluZ3MuaGFzS2V5KFwiYWNjb3VudFwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZWRVc2VyOiBVc2VyID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2NvdW50XCIpKTtcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9IG5ldyBzY2hlZHVsZVVzZXIoc3RvcmVkVXNlci51c2VybmFtZSwgc3RvcmVkVXNlci5wYXNzd29yZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVNlcnZpY2UuZ2V0VGltZVRhYmxlKHVzZXIpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXNvbHZlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlUmVzcG9uc2UgPSAocmVzb2x2ZWQgPT0gbnVsbCk/IFwiTm90IExlY3R1cmVzIGZvdW5kXCI6IHJlc29sdmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzb2x2ZWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKHJlamVjdGVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlamVjdGVkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoXCJ1c2VyIGlzbnQgbG9naW5cIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==