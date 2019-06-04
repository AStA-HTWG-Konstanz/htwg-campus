"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Schedule_1 = require("./../../model/schedule/Schedule");
var core_1 = require("@angular/core");
var htwgschedule_service_1 = require("~/app/services/schedule/htwgschedule.service");
var router_1 = require("nativescript-angular/router");
var action_button_component_1 = require("../../action-button/action-button.component");
var router_2 = require("@angular/router");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(scheduleService, routerExtensions, activatedRoute) {
        this.scheduleService = scheduleService;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.currentSchedule = new Schedule_1.Schedule([]);
        this.clickedList = new Array();
        this.lectures = [];
        this.selectedIndex = 0;
        this.processing = false;
        this.processing = true;
        this.getSchedule();
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.currentSchedule = null;
        //this.getSchedule();
    };
    ScheduleComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    ScheduleComponent.prototype.getSchedule = function () {
        var _this = this;
        this.scheduleService.getTimeTable().then(function (resolved) {
            _this.currentSchedule = (resolved) ? resolved : null;
            _this.lectures = _this.currentSchedule.lectures;
            _this.processing = false;
            //console.log(JSON.stringify(resolved));
        }, function (rejected) {
            alert(JSON.stringify(rejected));
        });
    };
    ScheduleComponent.prototype.clicked = function (index) {
        if (this.clickedList.some(function (i) { return i == index; })) {
            var tmp = this.clickedList.indexOf(index);
            this.clickedList.splice(tmp, 1);
        }
        else {
            this.clickedList.push(index);
        }
    };
    ScheduleComponent.prototype.isVisible = function (item) {
        if (this.clickedList.length < 1) {
            return false;
        }
        return this.clickedList.some(function (i) { return i == item; }) ? true : false;
    };
    __decorate([
        core_1.ViewChild("actionButton", { static: false }),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], ScheduleComponent.prototype, "_buttonRef", void 0);
    __decorate([
        core_1.ViewChild('scheduleView', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ScheduleComponent.prototype, "scheduleView", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQTJEO0FBRTNELHNDQUF5RTtBQUN6RSxxRkFBbUY7QUFJbkYsc0RBQStEO0FBSS9ELHVGQUFvRjtBQUVwRiwwQ0FBaUQ7QUFTakQ7SUFjSSwyQkFDWSxlQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsY0FBOEI7UUFGOUIsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVDFDLG9CQUFlLEdBQWEsSUFBSSxtQkFBUSxDQUF3QixFQUFFLENBQUMsQ0FBQztRQUNwRSxnQkFBVyxHQUFrQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXpDLGFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBcUI7SUFDekIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFVBQUMsUUFBYTtZQUNWLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUM5QyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4Qix3Q0FBd0M7UUFDNUMsQ0FBQyxFQUNELFVBQUMsUUFBYTtZQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0QsbUNBQU8sR0FBUCxVQUFRLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxLQUFLLEVBQVYsQ0FBVSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFDRCxxQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBdkREO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQ2pDLCtDQUFxQjt5REFBQztJQUdsQztRQURDLGdCQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2tDQUMvQixpQkFBVTsyREFBQztJQU5oQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBZ0IrQiwwQ0FBbUI7WUFDbEIseUJBQWdCO1lBQ2xCLHVCQUFjO09BakJqQyxpQkFBaUIsQ0EyRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4vLi4vLi4vbW9kZWwvc2NoZWR1bGUvU2NoZWR1bGUnO1xuaW1wb3J0IHsgTGVjdHVyZXNQZXJEYXkgfSBmcm9tICcuLy4uLy4uL21vZGVsL3NjaGVkdWxlL2xlY3R1cmVzL0xlY3R1cmVzUGVyRGF5J1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHdnc2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NjaGVkdWxlL2h0d2dzY2hlZHVsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC9zY2hlZHVsZXVzZXIvc2NoZWR1bGV1c2VyLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zY2hlZHVsZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2NoZWR1bGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2NoZWR1bGUuY29tcG9uZW50LmNzc1wiXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIiwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgX2J1dHRvblJlZjogQWN0aW9uQnV0dG9uQ29tcG9uZW50O1xuXG4gICAgQFZpZXdDaGlsZCgnc2NoZWR1bGVWaWV3JywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgc2NoZWR1bGVWaWV3OiBFbGVtZW50UmVmO1xuXG4gICAgY3VycmVudFNjaGVkdWxlOiBTY2hlZHVsZSA9IG5ldyBTY2hlZHVsZSg8QXJyYXk8TGVjdHVyZXNQZXJEYXk+PltdKTtcbiAgICBjbGlja2VkTGlzdDogQXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheSgpO1xuXG4gICAgbGVjdHVyZXM6IExlY3R1cmVzUGVyRGF5W10gPSBbXTtcbiAgICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZVNlcnZpY2U6IEh0d2dzY2hlZHVsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0U2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NoZWR1bGUgPSBudWxsO1xuICAgICAgICAvL3RoaXMuZ2V0U2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwibWFpblwiLCB7IHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlUmlnaHQnIH0sIGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBnZXRTY2hlZHVsZSgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVNlcnZpY2UuZ2V0VGltZVRhYmxlKCkudGhlbihcbiAgICAgICAgICAgIChyZXNvbHZlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NoZWR1bGUgPSAocmVzb2x2ZWQpID8gcmVzb2x2ZWQgOiBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubGVjdHVyZXMgPSB0aGlzLmN1cnJlbnRTY2hlZHVsZS5sZWN0dXJlcztcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc29sdmVkKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHJlamVjdGVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShyZWplY3RlZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBjbGlja2VkKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZExpc3Quc29tZShpID0+IGkgPT0gaW5kZXgpKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gdGhpcy5jbGlja2VkTGlzdC5pbmRleE9mKGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZExpc3Quc3BsaWNlKHRtcCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRMaXN0LnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzVmlzaWJsZShpdGVtOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZExpc3QubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWNrZWRMaXN0LnNvbWUoaSA9PiBpID09IGl0ZW0pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==