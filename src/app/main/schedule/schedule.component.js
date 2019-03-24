"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var htwgschedule_service_1 = require("../../services/htwgschedule.service");
var app = require("tns-core-modules/application");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(client) {
        this.client = client;
        this.htmlString = "test";
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getSchedule();
    };
    ScheduleComponent.prototype.getSchedule = function () {
        this.client.getSchedule().subscribe(function (response) {
            //this.htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';
            //this.htmlString = response.toString();
        }, function (error) {
            //this.htmlString = JSON.stringify(error)
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
        __metadata("design:paramtypes", [htwgschedule_service_1.HtwgscheduleService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDRFQUEwRTtBQUUxRSxrREFBb0Q7QUFRcEQ7SUFFRSwyQkFBcUIsTUFBMkI7UUFBM0IsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7UUFFaEQsZUFBVSxHQUFXLE1BQU0sQ0FBQztJQUZ5QixDQUFDO0lBSXRELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDMUMsd0dBQXdHO1lBQ3hHLHdDQUF3QztRQUMxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gseUNBQXlDO1FBQzNDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF2QlksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUc2QiwwQ0FBbUI7T0FGckMsaUJBQWlCLENBMEI3QjtJQUFELHdCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0d2dzY2hlZHVsZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaHR3Z3NjaGVkdWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zY2hlZHVsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGNsaWVudDogSHR3Z3NjaGVkdWxlU2VydmljZSApIHsgfVxuXG4gIGh0bWxTdHJpbmc6IFN0cmluZyA9IFwidGVzdFwiO1xuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRTY2hlZHVsZSgpXG4gIH1cblxuICBnZXRTY2hlZHVsZSgpIHtcbiAgICB0aGlzLmNsaWVudC5nZXRTY2hlZHVsZSgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAvL3RoaXMuaHRtbFN0cmluZyA9ICc8c3Bhbj48aDE+SHRtbFZpZXcgZGVtbyBpbiA8Zm9udCBjb2xvcj1cImJsdWVcIj5OYXRpdmVTY3JpcHQ8L2ZvbnQ+IEFwcDwvaDE+PC9zcGFuPic7XG4gICAgICAvL3RoaXMuaHRtbFN0cmluZyA9IHJlc3BvbnNlLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICBlcnJvciA9PiB7XG4gICAgICAvL3RoaXMuaHRtbFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGVycm9yKVxuICAgIH0pXG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG59XG5cbiAgXG59XG4iXX0=