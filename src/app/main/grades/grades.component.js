"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grades_service_1 = require("./../../services/grades/grades.service");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var action_button_component_1 = require("../../action-button/action-button.component");
var appSettings = require("tns-core-modules/application-settings");
var GradesComponent = /** @class */ (function () {
    function GradesComponent(routerExtensions, gradeService) {
        this.routerExtensions = routerExtensions;
        this.gradeService = gradeService;
        this.currentPagerIndex = 0;
        this.maxPageIndex = 0;
        this.currentGrades = [];
        this.getGrades();
    }
    GradesComponent.prototype.ngOnInit = function () {
    };
    GradesComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    GradesComponent.prototype.getGrades = function () {
        var _this = this;
        if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
            this.gradeService.getGrades().then(function (resolved) {
                _this.currentGrades = (resolved) ? resolved : null;
                _this.maxPageIndex = _this.currentGrades.length;
                //console.log(JSON.stringify(resolved));
            }, function (rejected) {
                alert(JSON.stringify(rejected));
            });
        }
        else {
            alert(JSON.stringify("user isnt login"));
        }
    };
    GradesComponent.prototype.onIndexChanged = function ($event) {
        this.currentPagerIndex = $event.value;
    };
    GradesComponent.prototype.onLeft = function () {
        this.currentPagerIndex = Math.max(0, this.currentPagerIndex - 1);
    };
    GradesComponent.prototype.onRight = function () {
        this.currentPagerIndex = Math.min(this.currentPagerIndex + 1, this.maxPageIndex - 1);
    };
    GradesComponent.prototype.getHeight = function (index) {
        if (index == 0) {
            return 1;
        }
        return (index * 20) + 1;
    };
    __decorate([
        core_1.ViewChild("actionButton"),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], GradesComponent.prototype, "_buttonRef", void 0);
    __decorate([
        core_1.ViewChild('pager'),
        __metadata("design:type", core_1.ElementRef)
    ], GradesComponent.prototype, "pager", void 0);
    GradesComponent = __decorate([
        core_1.Component({
            selector: 'ns-grades',
            templateUrl: './grades.component.html',
            styleUrls: ['./grades.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, grades_service_1.GradesService])
    ], GradesComponent);
    return GradesComponent;
}());
exports.GradesComponent = GradesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBdUU7QUFFdkUsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUMvRCx1RkFBb0Y7QUFDcEYsbUVBQXFFO0FBWXJFO0lBUUUseUJBQW9CLGdCQUFrQyxFQUFTLFlBQTJCO1FBQXRFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUgxRixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQWEsR0FBcUIsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckcsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFBQSxpQkFlQztRQWRDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUM5QixVQUFDLFFBQWE7Z0JBQ1YsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDakQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDOUMsd0NBQXdDO1lBQzVDLENBQUMsRUFDRCxVQUFDLFFBQWE7Z0JBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQ0osQ0FBQztTQUNUO2FBQU07WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBQ0Qsd0NBQWMsR0FBZCxVQUFlLE1BQU07UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELGdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxtQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQS9DRDtRQURDLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUNkLCtDQUFxQjt1REFBQztJQUVsQztRQURDLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUNaLGlCQUFVO2tEQUFDO0lBSlAsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FTc0MseUJBQWdCLEVBQXVCLDhCQUFhO09BUi9FLGVBQWUsQ0FrRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYWRlc1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2dyYWRlcy9ncmFkZXMuc2VydmljZSc7XG5pbXBvcnQgeyBTZW1lc3RlckdyYWRlcyB9IGZyb20gJy4vLi4vLi4vbW9kZWwvZ3JhZGVzL3NlbWVzdGVyLWdyYWRlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsJztcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gJ34vYXBwL21vZGVsL3NjaGVkdWxldXNlci9zY2hlZHVsZXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ncmFkZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhZGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JhZGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgR3JhZGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImFjdGlvbkJ1dHRvblwiKVxuICBfYnV0dG9uUmVmOiBBY3Rpb25CdXR0b25Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3BhZ2VyJykgXG4gIHBhZ2VyOiBFbGVtZW50UmVmO1xuICBjdXJyZW50UGFnZXJJbmRleCA9IDA7XG4gIG1heFBhZ2VJbmRleCA9IDA7XG4gIGN1cnJlbnRHcmFkZXM6IFNlbWVzdGVyR3JhZGVzW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLHByaXZhdGUgZ3JhZGVTZXJ2aWNlOiBHcmFkZXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5nZXRHcmFkZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmF2aWdhdGVCYWNrKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwibWFpblwiLCB7IHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlUmlnaHQnIH0sY2xlYXJIaXN0b3J5OiB0cnVlfSlcbiAgfVxuXG4gIGdldEdyYWRlcygpIHtcbiAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImlzTG9nZ2VkSW5cIikgJiYgYXBwU2V0dGluZ3MuaGFzS2V5KFwiYWNjb3VudFwiKSkge1xuICAgICAgICAgICAgdGhpcy5ncmFkZVNlcnZpY2UuZ2V0R3JhZGVzKCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzb2x2ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcmFkZXMgPSAocmVzb2x2ZWQpID8gcmVzb2x2ZWQ6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZUluZGV4ID0gdGhpcy5jdXJyZW50R3JhZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNvbHZlZCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHJlamVjdGVkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVqZWN0ZWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KFwidXNlciBpc250IGxvZ2luXCIpKTtcbiAgICB9XG4gIH1cbiAgb25JbmRleENoYW5nZWQoJGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZXJJbmRleCA9ICRldmVudC52YWx1ZTtcbiAgfVxuICBvbkxlZnQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZXJJbmRleCA9IE1hdGgubWF4KDAsdGhpcy5jdXJyZW50UGFnZXJJbmRleCAtIDEpO1xuICB9XG4gIG9uUmlnaHQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZXJJbmRleCA9IE1hdGgubWluKHRoaXMuY3VycmVudFBhZ2VySW5kZXggKyAxLHRoaXMubWF4UGFnZUluZGV4IC0gMSk7XG4gIH1cbiAgZ2V0SGVpZ2h0KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAoaW5kZXggKiAyMCkgKyAxO1xuICB9XG59XG4iXX0=