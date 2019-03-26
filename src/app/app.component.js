"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var app = require("tns-core-modules/application");
var dialogsModule = require("tns-core-modules/ui/dialogs");
var appSettings = require("tns-core-modules/application-settings");
var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.closeDrawer = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.logout = function () {
        appSettings.remove("isLoggedIn");
        this.closeDrawer();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
function alert(message) {
    return dialogsModule.alert({
        title: "Groceries",
        okButtonText: "OK",
        message: message
    });
}
exports.alert = alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQStEO0FBQy9ELHlFQUF3RztBQUN4RyxrREFBb0Q7QUFDcEQsMkRBQTZEO0FBQzdELG1FQUFxRTtBQVFyRTtJQUdJLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsRCxvREFBb0Q7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELGtDQUFXLEdBQVg7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUF2QlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FJd0MseUJBQWdCO09BSDdDLFlBQVksQ0F3QnZCO0lBQUQsbUJBQUM7Q0FBQSxBQXhCRixJQXdCRTtBQXhCVyxvQ0FBWTtBQTBCeEIsU0FBZ0IsS0FBSyxDQUFDLE9BQWU7SUFDbEMsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLE9BQU8sRUFBRSxPQUFPO0tBQ25CLENBQUMsQ0FBQztBQUNQLENBQUM7QUFOQSxzQkFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIlxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBjbG9zZURyYXdlcigpIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICBhcHBTZXR0aW5ncy5yZW1vdmUoXCJpc0xvZ2dlZEluXCIpO1xuICAgICAgICB0aGlzLmNsb3NlRHJhd2VyKClcbiAgICB9XG4gfVxuIFxuIGV4cG9ydCBmdW5jdGlvbiBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZGlhbG9nc01vZHVsZS5hbGVydCh7XG4gICAgICAgIHRpdGxlOiBcIkdyb2Nlcmllc1wiLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xufVxuIl19