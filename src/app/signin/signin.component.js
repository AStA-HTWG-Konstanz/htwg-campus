"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var user_model_1 = require("~/app/model/user/user.model");
var login_service_1 = require("~/app/services/login/login.service");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var appSettings = require("tns-core-modules/application-settings");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(loginservice, routerExtensions, page) {
        this.loginservice = loginservice;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.processing = false;
        this.error = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User("", "");
    };
    SigninComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SigninComponent.prototype.login = function () {
        var _this = this;
        this.processing = true;
        this.error = false;
        this.loginservice.login(this.user).subscribe(function (response) {
            appSettings.setBoolean("isLoggedIn", true);
            _this.processing = false;
            _this.routerExtensions.navigateByUrl("main", { clearHistory: true });
        }, function (error) {
            _this.error = true;
            _this.processing = false;
        });
    };
    SigninComponent.prototype.onNameChange = function (args) {
        var textField = args.object;
        this.user.username = textField.text;
    };
    SigninComponent.prototype.onPasswordChange = function (args) {
        var textField = args.object;
        this.user.password = textField.text;
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'ns-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.RouterExtensions,
            page_1.Page])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBQ3BELDBEQUFtRDtBQUNuRCxvRUFBa0U7QUFDbEUsc0RBQStEO0FBRS9ELGlEQUFnRDtBQUVoRCxtRUFBcUU7QUFTckU7SUFNRSx5QkFDVSxZQUEwQixFQUMxQixnQkFBa0MsRUFDbEMsSUFBVTtRQUZWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5wQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFVBQUssR0FBWSxLQUFLLENBQUM7SUFNbkIsQ0FBQztJQUVMLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxRQUFRO1lBQ04sV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLElBQVM7UUFDcEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBUztRQUN4QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQTlDVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVF3Qiw0QkFBWTtZQUNSLHlCQUFnQjtZQUM1QixXQUFJO09BVFQsZUFBZSxDQWdEM0I7SUFBRCxzQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9sb2dpbi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICd+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zaWduaW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmluLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyOiBVc2VyO1xuICBwcm9jZXNzaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dpbnNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoXCJcIixcIlwiKTtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xuICAgIHRoaXMubG9naW5zZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRCb29sZWFuKFwiaXNMb2dnZWRJblwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwibWFpblwiLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgb25OYW1lQ2hhbmdlKGFyZ3M6IGFueSkge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMudXNlci51c2VybmFtZSA9IHRleHRGaWVsZC50ZXh0O1xuICB9XG5cbiAgb25QYXNzd29yZENoYW5nZShhcmdzOiBhbnkpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSB0ZXh0RmllbGQudGV4dDtcbiAgfVxuXG59XG4iXX0=