"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var DepartmentInformatikComponent = /** @class */ (function () {
    function DepartmentInformatikComponent(routerExtensions, activatedRoute) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
    }
    DepartmentInformatikComponent.prototype.ngOnInit = function () {
    };
    DepartmentInformatikComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    DepartmentInformatikComponent = __decorate([
        core_1.Component({
            selector: 'ns-department-informatik',
            templateUrl: './department-informatik.component.html',
            styleUrls: ['./department-informatik.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], DepartmentInformatikComponent);
    return DepartmentInformatikComponent;
}());
exports.DepartmentInformatikComponent = DepartmentInformatikComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwYXJ0bWVudC1pbmZvcm1hdGlrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGFydG1lbnQtaW5mb3JtYXRpay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsc0RBQStEO0FBQy9ELDBDQUFpRDtBQVNqRDtJQUVFLHVDQUNVLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUosZ0RBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvREFBWSxHQUFaO1FBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckcsQ0FBQztJQVpVLDZCQUE2QjtRQU56QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1lBQ3BELFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUk0Qix5QkFBZ0I7WUFDbEIsdUJBQWM7T0FKN0IsNkJBQTZCLENBY3pDO0lBQUQsb0NBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICd+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRlcGFydG1lbnQtaW5mb3JtYXRpaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXBhcnRtZW50LWluZm9ybWF0aWsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXBhcnRtZW50LWluZm9ybWF0aWsuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEZXBhcnRtZW50SW5mb3JtYXRpa0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5hdmlnYXRlQmFjaygpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChcIm1haW5cIiwgeyB0cmFuc2l0aW9uOiB7IG5hbWU6ICdzbGlkZVJpZ2h0JyB9LGNsZWFySGlzdG9yeTogdHJ1ZX0pXG4gIH1cblxufVxuIl19