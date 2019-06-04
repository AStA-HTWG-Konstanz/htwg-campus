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
        // @ViewChild('pager', { static: true })
        // pager: ElementRef;
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
        core_1.ViewChild("actionButton", { static: false }),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], GradesComponent.prototype, "_buttonRef", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyYWRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5RUFBdUU7QUFFdkUsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUMvRCx1RkFBb0Y7QUFDcEYsbUVBQXFFO0FBWXJFO0lBUUUseUJBQW9CLGdCQUFrQyxFQUFVLFlBQTJCO1FBQXZFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUwzRix3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBYSxHQUFxQixFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN6RyxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLFVBQUMsUUFBYTtnQkFDWixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUM5Qyx3Q0FBd0M7WUFDMUMsQ0FBQyxFQUNELFVBQUMsUUFBYTtnQkFDWixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FDRixDQUFDO1NBQ0g7YUFBTTtZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFDRCx3Q0FBYyxHQUFkLFVBQWUsTUFBTTtRQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELGlDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBL0NEO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQ2pDLCtDQUFxQjt1REFBQztJQUZ2QixlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVNzQyx5QkFBZ0IsRUFBd0IsOEJBQWE7T0FSaEYsZUFBZSxDQWtEM0I7SUFBRCxzQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhZGVzU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvZ3JhZGVzL2dyYWRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbWVzdGVyR3JhZGVzIH0gZnJvbSAnLi8uLi8uLi9tb2RlbC9ncmFkZXMvc2VtZXN0ZXItZ3JhZGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgc2NoZWR1bGVVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvc2NoZWR1bGV1c2VyL3NjaGVkdWxldXNlci5tb2RlbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ncmFkZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhZGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JhZGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgR3JhZGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcImFjdGlvbkJ1dHRvblwiLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgX2J1dHRvblJlZjogQWN0aW9uQnV0dG9uQ29tcG9uZW50O1xuICAvLyBAVmlld0NoaWxkKCdwYWdlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIC8vIHBhZ2VyOiBFbGVtZW50UmVmO1xuICBjdXJyZW50UGFnZXJJbmRleCA9IDA7XG4gIG1heFBhZ2VJbmRleCA9IDA7XG4gIGN1cnJlbnRHcmFkZXM6IFNlbWVzdGVyR3JhZGVzW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGdyYWRlU2VydmljZTogR3JhZGVzU2VydmljZSkge1xuICAgIHRoaXMuZ2V0R3JhZGVzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5hdmlnYXRlQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChcIm1haW5cIiwgeyB0cmFuc2l0aW9uOiB7IG5hbWU6ICdzbGlkZVJpZ2h0JyB9LCBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgfVxuXG4gIGdldEdyYWRlcygpIHtcbiAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImlzTG9nZ2VkSW5cIikgJiYgYXBwU2V0dGluZ3MuaGFzS2V5KFwiYWNjb3VudFwiKSkge1xuICAgICAgdGhpcy5ncmFkZVNlcnZpY2UuZ2V0R3JhZGVzKCkudGhlbihcbiAgICAgICAgKHJlc29sdmVkOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRHcmFkZXMgPSAocmVzb2x2ZWQpID8gcmVzb2x2ZWQgOiBudWxsO1xuICAgICAgICAgIHRoaXMubWF4UGFnZUluZGV4ID0gdGhpcy5jdXJyZW50R3JhZGVzLmxlbmd0aDtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc29sdmVkKSk7XG4gICAgICAgIH0sXG4gICAgICAgIChyZWplY3RlZDogYW55KSA9PiB7XG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkocmVqZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoXCJ1c2VyIGlzbnQgbG9naW5cIikpO1xuICAgIH1cbiAgfVxuICBvbkluZGV4Q2hhbmdlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlckluZGV4ID0gJGV2ZW50LnZhbHVlO1xuICB9XG4gIG9uTGVmdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRQYWdlckluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5jdXJyZW50UGFnZXJJbmRleCAtIDEpO1xuICB9XG4gIG9uUmlnaHQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZXJJbmRleCA9IE1hdGgubWluKHRoaXMuY3VycmVudFBhZ2VySW5kZXggKyAxLCB0aGlzLm1heFBhZ2VJbmRleCAtIDEpO1xuICB9XG4gIGdldEhlaWdodChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gKGluZGV4ICogMjApICsgMTtcbiAgfVxufVxuIl19