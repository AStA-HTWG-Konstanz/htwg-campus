"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var MainComponent = /** @class */ (function () {
    function MainComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.img = "~/images/htwg.jpg";
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    MainComponent.prototype.reload = function () {
        var _this = this;
        this.routerExtensions.navigateByUrl('/default').then(function () {
            return _this.routerExtensions.backToPreviousPage();
        });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'ns-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBK0Q7QUFDL0Qsa0RBQW9EO0FBQ3BELDZEQUE0RDtBQVE1RDtJQUlFLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxRQUFHLEdBQVcsbUJBQW1CLENBQUE7UUFHL0IsR0FBRyxDQUFDLGNBQWMsQ0FBQyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckQsT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7UUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFwQlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLc0MseUJBQWdCO09BSjNDLGFBQWEsQ0FxQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCJ+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaW1nOiBTdHJpbmcgPSBcIn4vaW1hZ2VzL2h0d2cuanBnXCJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICBhcHAuc2V0Q3NzRmlsZU5hbWUoZW52aXJvbm1lbnQuc3R5bGUpO1xuICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybCgnL2RlZmF1bHQnKS50aGVuKCgpPT5cbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCkpXG4gIH1cbn1cbiJdfQ==