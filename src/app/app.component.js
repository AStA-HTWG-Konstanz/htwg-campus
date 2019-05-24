"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_service_1 = require("./services/theme/theme.service");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var app = require("tns-core-modules/application");
var dialogsModule = require("tns-core-modules/ui/dialogs");
var appSettings = require("tns-core-modules/application-settings");
// Register custom elements from nativescript-slides plugin
var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions, themeService) {
        this.routerExtensions = routerExtensions;
        this.themeService = themeService;
        this.userNameInSideBar = "user";
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        if (appSettings.hasKey("username")) {
            this.userNameInSideBar = appSettings.getString("username");
        }
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
        appSettings.remove("account");
        appSettings.remove("username");
        this.closeDrawer();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            theme_service_1.ThemeService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRUFBOEQ7QUFDOUQsc0NBQWdFO0FBQ2hFLHNEQUErRDtBQUMvRCx5RUFBd0c7QUFDeEcsa0RBQW9EO0FBQ3BELDJEQUE2RDtBQUM3RCxtRUFBcUU7QUFFckUsMkRBQTJEO0FBUTNEO0lBSUksc0JBQW9CLGdCQUFrQyxFQUMxQyxZQUEwQjtRQURsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSHRDLHNCQUFpQixHQUFXLE1BQU0sQ0FBQTtRQUk5QixvREFBb0Q7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxtREFBc0IsRUFBRSxDQUFDO1FBQzFELElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUM3RDtJQUNMLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELGtDQUFXLEdBQVg7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN0QixDQUFDO0lBOUJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7eUNBS3dDLHlCQUFnQjtZQUM1Qiw0QkFBWTtPQUw3QixZQUFZLENBK0J2QjtJQUFELG1CQUFDO0NBQUEsQUEvQkYsSUErQkU7QUEvQlcsb0NBQVk7QUFpQ3pCLFNBQWdCLEtBQUssQ0FBQyxPQUFlO0lBQ2pDLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN2QixLQUFLLEVBQUUsV0FBVztRQUNsQixZQUFZLEVBQUUsSUFBSTtRQUNsQixPQUFPLEVBQUUsT0FBTztLQUNuQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTkQsc0JBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RoZW1lL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIlxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbi8vIFJlZ2lzdGVyIGN1c3RvbSBlbGVtZW50cyBmcm9tIG5hdGl2ZXNjcmlwdC1zbGlkZXMgcGx1Z2luXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudHtcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG4gICAgdXNlck5hbWVJblNpZGVCYXI6IFN0cmluZyA9IFwidXNlclwiXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHRoZW1lU2VydmljZTogVGhlbWVTZXJ2aWNlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICBpZiAoYXBwU2V0dGluZ3MuaGFzS2V5KFwidXNlcm5hbWVcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWVJblNpZGVCYXIgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VybmFtZVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGNsb3NlRHJhd2VyKCkge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcImlzTG9nZ2VkSW5cIik7XG4gICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcImFjY291bnRcIik7XG4gICAgICAgIGFwcFNldHRpbmdzLnJlbW92ZShcInVzZXJuYW1lXCIpO1xuICAgICAgICB0aGlzLmNsb3NlRHJhd2VyKClcbiAgICB9XG4gfVxuIFxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBkaWFsb2dzTW9kdWxlLmFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG59XG5cblxuIl19