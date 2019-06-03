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
        core_1.ViewChild("actionButton"),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], ScheduleComponent.prototype, "_buttonRef", void 0);
    __decorate([
        core_1.ViewChild('scheduleView'),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQTJEO0FBRTNELHNDQUF5RTtBQUN6RSxxRkFBbUY7QUFJbkYsc0RBQStEO0FBSS9ELHVGQUFvRjtBQUVwRiwwQ0FBaUQ7QUFTakQ7SUFjSSwyQkFDWSxlQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsY0FBOEI7UUFGOUIsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVDFDLG9CQUFlLEdBQWEsSUFBSSxtQkFBUSxDQUF3QixFQUFFLENBQUMsQ0FBQztRQUNwRSxnQkFBVyxHQUFrQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXpDLGFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBcUI7SUFDekIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFVBQUMsUUFBYTtZQUNWLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUM5QyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4Qix3Q0FBd0M7UUFDNUMsQ0FBQyxFQUNELFVBQUMsUUFBYTtZQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0QsbUNBQU8sR0FBUCxVQUFRLEtBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxLQUFLLEVBQVYsQ0FBVSxDQUFDLEVBQUM7WUFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFDRCxxQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBdkREO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ2QsK0NBQXFCO3lEQUFDO0lBR2xDO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ1osaUJBQVU7MkRBQUM7SUFOaEIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQWdCK0IsMENBQW1CO1lBQ2xCLHlCQUFnQjtZQUNsQix1QkFBYztPQWpCakMsaUJBQWlCLENBMkQ3QjtJQUFELHdCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZWR1bGUgfSBmcm9tICcuLy4uLy4uL21vZGVsL3NjaGVkdWxlL1NjaGVkdWxlJztcbmltcG9ydCB7IExlY3R1cmVzUGVyRGF5fSBmcm9tICcuLy4uLy4uL21vZGVsL3NjaGVkdWxlL2xlY3R1cmVzL0xlY3R1cmVzUGVyRGF5J1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHdnc2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NjaGVkdWxlL2h0d2dzY2hlZHVsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC9zY2hlZHVsZXVzZXIvc2NoZWR1bGV1c2VyLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zY2hlZHVsZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2NoZWR1bGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2NoZWR1bGUuY29tcG9uZW50LmNzc1wiXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIilcbiAgICBfYnV0dG9uUmVmOiBBY3Rpb25CdXR0b25Db21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdzY2hlZHVsZVZpZXcnKSBcbiAgICBzY2hlZHVsZVZpZXc6IEVsZW1lbnRSZWY7XG5cbiAgICBjdXJyZW50U2NoZWR1bGU6IFNjaGVkdWxlID0gbmV3IFNjaGVkdWxlKDxBcnJheTxMZWN0dXJlc1BlckRheT4+W10pO1xuICAgIGNsaWNrZWRMaXN0OiBBcnJheTxudW1iZXI+ID0gbmV3IEFycmF5KCk7XG5cbiAgICBsZWN0dXJlczogTGVjdHVyZXNQZXJEYXlbXSA9IFtdO1xuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHNjaGVkdWxlU2VydmljZTogSHR3Z3NjaGVkdWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRTY2hlZHVsZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTY2hlZHVsZSA9IG51bGw7XG4gICAgICAgIC8vdGhpcy5nZXRTY2hlZHVsZSgpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlQmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXCJtYWluXCIsIHsgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGVSaWdodCcgfSxjbGVhckhpc3Rvcnk6IHRydWV9KTtcbiAgICB9XG5cbiAgICBnZXRTY2hlZHVsZSgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVNlcnZpY2UuZ2V0VGltZVRhYmxlKCkudGhlbihcbiAgICAgICAgICAgIChyZXNvbHZlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NoZWR1bGUgPSAocmVzb2x2ZWQpPyByZXNvbHZlZDogbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmxlY3R1cmVzID0gdGhpcy5jdXJyZW50U2NoZWR1bGUubGVjdHVyZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNvbHZlZCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZWplY3RlZDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVqZWN0ZWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTsgICAgICAgIFxuICAgIH1cbiAgICBjbGlja2VkKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZExpc3Quc29tZShpID0+IGkgPT0gaW5kZXgpKXtcbiAgICAgICAgICAgIGxldCB0bXAgPSB0aGlzLmNsaWNrZWRMaXN0LmluZGV4T2YoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkTGlzdC5zcGxpY2UodG1wLDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkTGlzdC5wdXNoKGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1Zpc2libGUoaXRlbTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmNsaWNrZWRMaXN0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja2VkTGlzdC5zb21lKGkgPT4gaSA9PSBpdGVtKT8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==