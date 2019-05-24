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
        this.clickedList = [];
        this.lectures = [];
        this.selectedIndex = 1;
        this.staticList = [
            { item: "1" },
            { item: "2" },
            { item: "3" },
            { item: "4" },
        ];
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
            //console.log(JSON.stringify(resolved));
        }, function (rejected) {
            alert(JSON.stringify(rejected));
        });
    };
    ScheduleComponent.prototype.showResponse = function () {
        return JSON.stringify(this.lectures);
    };
    ScheduleComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
    };
    ScheduleComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    ScheduleComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    ScheduleComponent.prototype.clicked = function (index) {
        console.log("triggered");
        if (this.clickedList.find(function (i) { return i == index; })) {
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
        return this.clickedList.find(function (i) { return i == item; }) ? true : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQTJEO0FBRTNELHNDQUF5RTtBQUN6RSxxRkFBbUY7QUFJbkYsc0RBQStEO0FBSS9ELHVGQUFvRjtBQUVwRiwwQ0FBaUQ7QUFVakQ7SUFvQkksMkJBQ1ksZUFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRjlCLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWYxQyxvQkFBZSxHQUFhLElBQUksbUJBQVEsQ0FBd0IsRUFBRSxDQUFDLENBQUM7UUFDcEUsZ0JBQVcsR0FBa0IsRUFBRSxDQUFDO1FBRWhDLGFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGVBQVUsR0FBRztZQUNULEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQztZQUNYLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQztZQUNYLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQztZQUNYLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQztTQUNkLENBQUE7UUFPRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBcUI7SUFDekIsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFVBQUMsUUFBYTtZQUNWLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztZQUM5Qyx3Q0FBd0M7UUFDNUMsQ0FBQyxFQUNELFVBQUMsUUFBYTtZQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0Qsd0NBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBbUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBeUMsSUFBSSxDQUFDLFFBQVEsWUFBTyxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLG1DQUFPLEdBQWQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELG1DQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxLQUFLLEVBQVYsQ0FBVSxDQUFDLEVBQUM7WUFDdkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFDRCxxQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBMUVEO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ2QsK0NBQXFCO3lEQUFDO0lBR2xDO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ1osaUJBQVU7MkRBQUM7SUFOaEIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQXNCK0IsMENBQW1CO1lBQ2xCLHlCQUFnQjtZQUNsQix1QkFBYztPQXZCakMsaUJBQWlCLENBOEU3QjtJQUFELHdCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZWR1bGUgfSBmcm9tICcuLy4uLy4uL21vZGVsL3NjaGVkdWxlL1NjaGVkdWxlJztcbmltcG9ydCB7IExlY3R1cmVzUGVyRGF5fSBmcm9tICcuLy4uLy4uL21vZGVsL3NjaGVkdWxlL2xlY3R1cmVzL0xlY3R1cmVzUGVyRGF5J1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHdnc2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NjaGVkdWxlL2h0d2dzY2hlZHVsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC9zY2hlZHVsZXVzZXIvc2NoZWR1bGV1c2VyLm1vZGVsXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1zY2hlZHVsZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2NoZWR1bGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2NoZWR1bGUuY29tcG9uZW50LmNzc1wiXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIilcbiAgICBfYnV0dG9uUmVmOiBBY3Rpb25CdXR0b25Db21wb25lbnQ7XG5cbiAgICBAVmlld0NoaWxkKCdzY2hlZHVsZVZpZXcnKSBcbiAgICBzY2hlZHVsZVZpZXc6IEVsZW1lbnRSZWY7XG5cbiAgICBjdXJyZW50U2NoZWR1bGU6IFNjaGVkdWxlID0gbmV3IFNjaGVkdWxlKDxBcnJheTxMZWN0dXJlc1BlckRheT4+W10pO1xuICAgIGNsaWNrZWRMaXN0OiBBcnJheTxudW1iZXI+ID0gW107XG5cbiAgICBsZWN0dXJlczogTGVjdHVyZXNQZXJEYXlbXSA9IFtdO1xuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDE7XG4gICAgc3RhdGljTGlzdCA9IFtcbiAgICAgICAge2l0ZW06IFwiMVwifSxcbiAgICAgICAge2l0ZW06IFwiMlwifSxcbiAgICAgICAge2l0ZW06IFwiM1wifSxcbiAgICAgICAge2l0ZW06IFwiNFwifSxcbiAgICBdXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZVNlcnZpY2U6IEh0d2dzY2hlZHVsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZ2V0U2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2NoZWR1bGUgPSBudWxsO1xuICAgICAgICAvL3RoaXMuZ2V0U2NoZWR1bGUoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwibWFpblwiLCB7IHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlUmlnaHQnIH0sY2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgZ2V0U2NoZWR1bGUoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVTZXJ2aWNlLmdldFRpbWVUYWJsZSgpLnRoZW4oXG4gICAgICAgICAgICAocmVzb2x2ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNjaGVkdWxlID0gKHJlc29sdmVkKT8gcmVzb2x2ZWQ6IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWN0dXJlcyA9IHRoaXMuY3VycmVudFNjaGVkdWxlLmxlY3R1cmVzO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzb2x2ZWQpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAocmVqZWN0ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlamVjdGVkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7ICAgICAgICBcbiAgICB9XG4gICAgc2hvd1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5sZWN0dXJlcylcbiAgICB9XG4gICAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fWApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIGNsb3NlZC5cIik7XG4gICAgfVxuICAgIGNsaWNrZWQoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyaWdnZXJlZFwiKVxuICAgICAgICBpZiAodGhpcy5jbGlja2VkTGlzdC5maW5kKGkgPT4gaSA9PSBpbmRleCkpe1xuICAgICAgICAgICAgbGV0IHRtcCA9IHRoaXMuY2xpY2tlZExpc3QuaW5kZXhPZihpbmRleCk7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRMaXN0LnNwbGljZSh0bXAsMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrZWRMaXN0LnB1c2goaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzVmlzaWJsZShpdGVtOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZExpc3QubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWNrZWRMaXN0LmZpbmQoaSA9PiBpID09IGl0ZW0pID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==