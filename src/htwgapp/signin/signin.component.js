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
            appSettings.setString("account", JSON.stringify(_this.user));
            appSettings.setString("username", _this.user.username);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBQ3BELDBEQUFtRDtBQUNuRCxvRUFBa0U7QUFDbEUsc0RBQStEO0FBRS9ELGlEQUFnRDtBQUVoRCxtRUFBcUU7QUFTckU7SUFNRSx5QkFDVSxZQUEwQixFQUMxQixnQkFBa0MsRUFDbEMsSUFBVTtRQUZWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5wQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLFVBQUssR0FBWSxLQUFLLENBQUM7SUFNbkIsQ0FBQztJQUVMLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzFDLFVBQUEsUUFBUTtZQUNOLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDMUQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNwRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsSUFBUztRQUNwQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixJQUFTO1FBQ3hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBaERVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUXdCLDRCQUFZO1lBQ1IseUJBQWdCO1lBQzVCLFdBQUk7T0FUVCxlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vYXBwL21vZGVsL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ34vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduaW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXI6IFVzZXI7XG4gIHByb2Nlc3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2luc2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIlwiLFwiXCIpO1xuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgdGhpcy5sb2dpbnNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXG4gICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldEJvb2xlYW4oXCJpc0xvZ2dlZEluXCIsIHRydWUpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhY2NvdW50XCIsSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSlcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlcm5hbWVcIix0aGlzLnVzZXIudXNlcm5hbWUpXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChcIm1haW5cIiwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG9uTmFtZUNoYW5nZShhcmdzOiBhbnkpIHtcbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcbiAgICB0aGlzLnVzZXIudXNlcm5hbWUgPSB0ZXh0RmllbGQudGV4dDtcbiAgfVxuXG4gIG9uUGFzc3dvcmRDaGFuZ2UoYXJnczogYW55KSB7XG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gdGV4dEZpZWxkLnRleHQ7XG4gIH1cblxufVxuIl19