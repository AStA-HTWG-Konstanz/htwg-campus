"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELHNEQUErRDtBQUMvRCxrREFBb0Q7QUFTcEQ7SUFRRSwyQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOdEQsV0FBTSxHQUFrQjtZQUN0QixNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPO1lBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSztTQUNuRCxDQUFDO0lBR3dELENBQUM7SUFFM0Qsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxnREFBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUM5QixJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBekJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FTc0MseUJBQWdCO09BUjNDLGlCQUFpQixDQTJCN0I7SUFBRCx3QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXNldHRpbmdzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdGhlbWVzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgIFwiYXF1YVwiLFwiYmx1ZVwiLFwiYnJvd25cIiwgXCJkYXJrXCIsIFwiZm9yZXN0XCIsIFwiZ3JleVwiLCBcImxlbW9uXCIsXG4gICAgXCJsaWdodFwiLCBcImxpbWVcIiwgXCJvcmFuZ2VcIiwgXCJwdXJwbGVcIiwgXCJydWJ5XCIsIFwic2t5XCJcbiAgXTtcbiAgcGlja2VkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMucGlja2VkID0gdGhpcy50aGVtZXNbcGlja2VyLnNlbGVjdGVkSW5kZXhdO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUoKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoJy9tYWluJywgeyBjbGVhckhpc3Rvcnk6IHRydWV9KVxuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbn1cbiJdfQ==