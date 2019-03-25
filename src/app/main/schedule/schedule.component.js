"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var htwgschedule_service_1 = require("~/app/services/schedule/htwgschedule.service");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(client) {
        this.client = client;
        this.htmlString = "test";
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFGQUFtRjtBQUVuRixrREFBb0Q7QUFDcEQsNkRBQTREO0FBUTVEO0lBRUUsMkJBQXFCLE1BQTJCO1FBQTNCLFdBQU0sR0FBTixNQUFNLENBQXFCO1FBS2hELGVBQVUsR0FBVyxNQUFNLENBQUM7UUFKMUIsR0FBRyxDQUFDLGNBQWMsQ0FBQyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBSUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMxQyx3R0FBd0c7WUFDeEcsd0NBQXdDO1FBQzFDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCx5Q0FBeUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTFCWSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBRzZCLDBDQUFtQjtPQUZyQyxpQkFBaUIsQ0E2QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR3Z3NjaGVkdWxlU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9zY2hlZHVsZS9odHdnc2NoZWR1bGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCJ+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zY2hlZHVsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGNsaWVudDogSHR3Z3NjaGVkdWxlU2VydmljZSApIHsgXG4gICAgYXBwLnNldENzc0ZpbGVOYW1lKGVudmlyb25tZW50LnN0eWxlKTtcbiAgICBhcHAubG9hZEFwcENzcygpO1xuICB9XG5cbiAgaHRtbFN0cmluZzogU3RyaW5nID0gXCJ0ZXN0XCI7XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmdldFNjaGVkdWxlKClcbiAgfVxuXG4gIGdldFNjaGVkdWxlKCkge1xuICAgIHRoaXMuY2xpZW50LmdldFNjaGVkdWxlKCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vdGhpcy5odG1sU3RyaW5nID0gJzxzcGFuPjxoMT5IdG1sVmlldyBkZW1vIGluIDxmb250IGNvbG9yPVwiYmx1ZVwiPk5hdGl2ZVNjcmlwdDwvZm9udD4gQXBwPC9oMT48L3NwYW4+JztcbiAgICAgIC8vdGhpcy5odG1sU3RyaW5nID0gcmVzcG9uc2UudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIGVycm9yID0+IHtcbiAgICAgIC8vdGhpcy5odG1sU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbn1cblxuICBcbn1cbiJdfQ==