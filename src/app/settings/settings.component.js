"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("~/app/environment/environment");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.themes = [
            "aqua", "blue", "brown", "dark", "forest", "grey", "lemon",
            "light", "lime", "orange", "purple", "ruby", "sky"
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = this.themes[picker.selectedIndex];
    };
    SettingsComponent.prototype.changeTheme = function () {
        environment_1.environment.style = "~/themes/" + this.picked + ".css";
        this.routerExtensions.navigateByUrl('/main', { clearHistory: true });
    };
    SettingsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'ns-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDZEQUE0RDtBQUM1RCxzREFBK0Q7QUFDL0Qsa0RBQW9EO0FBU3BEO0lBUUUsMkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTnRELFdBQU0sR0FBa0I7WUFDdEIsTUFBTSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTztZQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUs7U0FDbkQsQ0FBQztJQUd3RCxDQUFDO0lBRTNELG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0sZ0RBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDOUIsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UseUJBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUExQlUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVNzQyx5QkFBZ0I7T0FSM0MsaUJBQWlCLENBNEI3QjtJQUFELHdCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwifi9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aGVtZXM6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgXCJhcXVhXCIsXCJibHVlXCIsXCJicm93blwiLCBcImRhcmtcIiwgXCJmb3Jlc3RcIiwgXCJncmV5XCIsIFwibGVtb25cIixcbiAgICBcImxpZ2h0XCIsIFwibGltZVwiLCBcIm9yYW5nZVwiLCBcInB1cnBsZVwiLCBcInJ1YnlcIiwgXCJza3lcIlxuICBdO1xuICBwaWNrZWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICBsZXQgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XG4gICAgdGhpcy5waWNrZWQgPSB0aGlzLnRoZW1lc1twaWNrZXIuc2VsZWN0ZWRJbmRleF07XG4gIH1cblxuICBjaGFuZ2VUaGVtZSgpIHtcbiAgICBlbnZpcm9ubWVudC5zdHlsZSA9IFwifi90aGVtZXMvXCIgKyB0aGlzLnBpY2tlZCArIFwiLmNzc1wiO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKCcvbWFpbicsIHsgY2xlYXJIaXN0b3J5OiB0cnVlfSlcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG59XG4iXX0=