"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var DepartmentInformatikComponent = /** @class */ (function () {
    function DepartmentInformatikComponent(routerExtensions, activatedRoute) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        // app.setCssFileName(environment.style);
        // app.loadAppCss();
    }
    DepartmentInformatikComponent.prototype.ngOnInit = function () {
    };
    DepartmentInformatikComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    DepartmentInformatikComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwYXJ0bWVudC1pbmZvcm1hdGlrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGFydG1lbnQtaW5mb3JtYXRpay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBQ3BELHNEQUErRDtBQUMvRCwwQ0FBaUQ7QUFVakQ7SUFFRSx1Q0FDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMseUNBQXlDO1FBQ3pDLG9CQUFvQjtJQUN0QixDQUFDO0lBRUQsZ0RBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvREFBWSxHQUFaO1FBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckcsQ0FBQztJQUNELHlEQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFuQlUsNkJBQTZCO1FBTnpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7WUFDcEQsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSTRCLHlCQUFnQjtZQUNsQix1QkFBYztPQUo3Qiw2QkFBNkIsQ0FxQnpDO0lBQUQsb0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICd+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kZXBhcnRtZW50LWluZm9ybWF0aWsnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVwYXJ0bWVudC1pbmZvcm1hdGlrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVwYXJ0bWVudC1pbmZvcm1hdGlrLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGVwYXJ0bWVudEluZm9ybWF0aWtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHsgXG4gICAgLy8gYXBwLnNldENzc0ZpbGVOYW1lKGVudmlyb25tZW50LnN0eWxlKTtcbiAgICAvLyBhcHAubG9hZEFwcENzcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuYXZpZ2F0ZUJhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXCJtYWluXCIsIHsgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGVSaWdodCcgfSxjbGVhckhpc3Rvcnk6IHRydWV9KVxuICB9XG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG59XG4iXX0=