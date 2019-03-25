"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var user_model_1 = require("~/app/model/user/user.model");
var login_service_1 = require("~/app/services/login/login.service");
var router_1 = require("nativescript-angular/router");
var environment_1 = require("~/app/environment/environment");
var page_1 = require("tns-core-modules/ui/page");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(loginservice, routerExtensions, page) {
        this.loginservice = loginservice;
        this.routerExtensions = routerExtensions;
        this.page = page;
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
        this.loginservice.login(this.user).subscribe(function (response) {
            environment_1.environment.user.isLoggedIn = true;
            _this.routerExtensions.navigateByUrl("main", { clearHistory: true });
        }, function (error) { return alert(JSON.stringify(error)); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBQ3BELDBEQUFtRDtBQUNuRCxvRUFBa0U7QUFDbEUsc0RBQStEO0FBQy9ELDZEQUE0RDtBQUM1RCxpREFBZ0Q7QUFTaEQ7SUFJRSx5QkFDVSxZQUEwQixFQUMxQixnQkFBa0MsRUFDbEMsSUFBVTtRQUZWLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUNoQixDQUFDO0lBRUwsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUMxQyxVQUFBLFFBQVE7WUFDTix5QkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FDdEMsQ0FBQTtJQUNILENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsSUFBUztRQUNwQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixJQUFTO1FBQ3hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBdENVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTXdCLDRCQUFZO1lBQ1IseUJBQWdCO1lBQzVCLFdBQUk7T0FQVCxlQUFlLENBd0MzQjtJQUFELHNCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vYXBwL21vZGVsL3VzZXIvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ34vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduaW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXI6IFVzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dpbnNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoXCJcIixcIlwiKTtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMubG9naW5zZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxuICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICBlbnZpcm9ubWVudC51c2VyLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybChcIm1haW5cIiwge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IGFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycm9yKSlcbiAgICApXG4gIH1cblxuICBvbk5hbWVDaGFuZ2UoYXJnczogYW55KSB7XG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XG4gICAgdGhpcy51c2VyLnVzZXJuYW1lID0gdGV4dEZpZWxkLnRleHQ7XG4gIH1cblxuICBvblBhc3N3b3JkQ2hhbmdlKGFyZ3M6IGFueSkge1xuICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IHRleHRGaWVsZC50ZXh0O1xuICB9XG5cbn1cbiJdfQ==