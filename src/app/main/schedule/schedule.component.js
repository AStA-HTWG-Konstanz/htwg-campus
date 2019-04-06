"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var htwgschedule_service_1 = require("~/app/services/schedule/htwgschedule.service");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var router_1 = require("nativescript-angular/router");
var scheduleuser_model_1 = require("~/app/model/scheduleuser/scheduleuser.model");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(client, routerExtensions) {
        this.client = client;
        this.routerExtensions = routerExtensions;
        this.htmlString = "test";
        this.scheduleRespoinse = "";
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getSchedule();
    };
    ScheduleComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { clearHistory: true });
    };
    ScheduleComponent.prototype.getSchedule = function () {
        var _this = this;
        var user = new scheduleuser_model_1.scheduleUser("testUser", "testPass1", true);
        this.client.getTimeTable(user).then(function (resolved) {
            _this.scheduleRespoinse = resolved;
            console.log(JSON.stringify(resolved));
        }, function (rejected) {
            alert(JSON.stringify(rejected));
        });
    };
    ScheduleComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'ns-schedule',
            templateUrl: './schedule.component.html',
            styleUrls: ['./schedule.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [htwgschedule_service_1.HtwgscheduleService, router_1.RouterExtensions])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFGQUFtRjtBQUVuRixrREFBb0Q7QUFDcEQsNkRBQTREO0FBQzVELHNEQUErRDtBQUUvRCxrRkFBMkU7QUFRM0U7SUFFRSwyQkFBcUIsTUFBMkIsRUFBVyxnQkFBa0M7UUFBeEUsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFBVyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSzdGLGVBQVUsR0FBVyxNQUFNLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBTDdCLEdBQUcsQ0FBQyxjQUFjLENBQUMseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUtELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBU0M7UUFSQyxJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFZLENBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUV4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ2hELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUE7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxFQUFFLFVBQUMsUUFBWTtZQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWhDWSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBRzZCLDBDQUFtQixFQUE2Qix5QkFBZ0I7T0FGbEYsaUJBQWlCLENBbUM3QjtJQUFELHdCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0d2dzY2hlZHVsZVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvc2NoZWR1bGUvaHR3Z3NjaGVkdWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwifi9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsJztcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gJ34vYXBwL21vZGVsL3NjaGVkdWxldXNlci9zY2hlZHVsZXVzZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zY2hlZHVsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGNsaWVudDogSHR3Z3NjaGVkdWxlU2VydmljZSAsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyBcbiAgICBhcHAuc2V0Q3NzRmlsZU5hbWUoZW52aXJvbm1lbnQuc3R5bGUpO1xuICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gIH1cblxuICBodG1sU3RyaW5nOiBTdHJpbmcgPSBcInRlc3RcIjtcbiAgc2NoZWR1bGVSZXNwb2luc2U6IHN0cmluZyA9IFwiXCI7XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFNjaGVkdWxlKClcbiAgfVxuXG4gIG5hdmlnYXRlQmFjaygpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChcIm1haW5cIiwge2NsZWFySGlzdG9yeTogdHJ1ZX0pXG4gIH1cblxuICBnZXRTY2hlZHVsZSgpIHtcbiAgICB2YXIgdXNlciA9IG5ldyBzY2hlZHVsZVVzZXIoXCJ0ZXN0VXNlclwiLFwidGVzdFBhc3MxXCIsdHJ1ZSlcblxuICAgIHRoaXMuY2xpZW50LmdldFRpbWVUYWJsZSh1c2VyKS50aGVuKChyZXNvbHZlZDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNjaGVkdWxlUmVzcG9pbnNlID0gcmVzb2x2ZWRcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc29sdmVkKSlcbiAgICB9LCAocmVqZWN0ZWQ6YW55KSA9PiB7XG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeShyZWplY3RlZCkpXG4gICAgfSlcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbn1cblxuICBcbn1cbiJdfQ==