"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var color_1 = require("tns-core-modules/color/color");
var login_service_1 = require("~/app/services/login/login.service");
var user_model_1 = require("~/app/model/user/user.model");
var appSettings = require("tns-core-modules/application-settings");
var MainComponent = /** @class */ (function () {
    function MainComponent(routerExtensions, login) {
        this.routerExtensions = routerExtensions;
        this.login = login;
        this.img = "~/images/htwg.jpg";
        //TODO: Add new JSON-Item, if you want to add a new component
        this.components = [
            { name: "Canteen", desc: "TODO: Add short description here!", navigate: "item-a/0", imageSrc: "~/images/coffee.png" },
            { name: "Grades", desc: "TODO: Add short description here!", navigate: "grades", imageSrc: "~/images/student_hat.png" },
            { name: "Lectures", desc: "TODO: Add short description here!", navigate: "schedule", imageSrc: "~/images/schedule.png" },
            { name: "ASTA", desc: "TODO: Add short description here!", navigate: "asta", imageSrc: "~/images/student_hat.png" },
            { name: "Department", desc: "TODO: Add short description here!", navigate: "department", imageSrc: "~/images/student_hat.png" },
            { name: "Balance", desc: "TODO: Add short description here!", navigate: "print-balance", imageSrc: "~/images/student_hat.png" }
        ];
    }
    // TODO workaround with login session
    MainComponent.prototype.ngOnInit = function () {
        if (appSettings.hasKey("account")) {
            this.login.login(JSON.parse(appSettings.getString("account"))).subscribe(function (response) {
                appSettings.setBoolean("isLoggedIn", true);
            }, function (error) { });
        }
        else {
            this.login.login(new user_model_1.User("testUser", "testPass1")).subscribe(function (response) { }, function (error) { });
        }
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
    MainComponent.prototype.onItemLoading = function (args) {
        // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
        if (platform_1.isIOS) {
            var newcolor = new color_1.Color("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    };
    MainComponent.prototype.onNavigationItemTap = function (args) {
        this.routerExtensions.navigateByUrl(this.components[args.index].navigate, { transition: { name: 'slideLeft' } });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'ns-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, login_service_1.LoginService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0Qsa0RBQW9EO0FBRXBELHNEQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsb0VBQWtFO0FBQ2xFLDBEQUFtRDtBQUNuRCxtRUFBcUU7QUFRckU7SUFhRSx1QkFBb0IsZ0JBQWtDLEVBQVUsS0FBbUI7UUFBL0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFYbkYsUUFBRyxHQUFXLG1CQUFtQixDQUFBO1FBQ2pDLDZEQUE2RDtRQUM3RCxlQUFVLEdBQXlFO1lBQ2pGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUcscUJBQXFCLEVBQUU7WUFDdEgsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRywwQkFBMEIsRUFBRTtZQUN4SCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFHLHVCQUF1QixFQUFFO1lBQ3pILEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUM7WUFDbEgsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBQztZQUM5SCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFDO1NBQy9ILENBQUM7SUFHRixDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLGdDQUFRLEdBQVI7UUFDRSxJQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO2dCQUMvRSxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQUMsVUFBQSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQUksQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUssQ0FBQyxFQUFDLFVBQUEsS0FBSyxJQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtRQUExQyxDQUEwQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLGtJQUFrSTtRQUNsSSxJQUFJLGdCQUFLLEVBQUU7WUFDUCxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsSUFBUztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUE7SUFDaEgsQ0FBQztJQS9DVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQWNzQyx5QkFBZ0IsRUFBaUIsNEJBQVk7T0FieEUsYUFBYSxDQWdEekI7SUFBRCxvQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy90aGVtZS90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ34vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3InO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaW1nOiBTdHJpbmcgPSBcIn4vaW1hZ2VzL2h0d2cuanBnXCJcbiAgLy9UT0RPOiBBZGQgbmV3IEpTT04tSXRlbSwgaWYgeW91IHdhbnQgdG8gYWRkIGEgbmV3IGNvbXBvbmVudFxuICBjb21wb25lbnRzOiB7IG5hbWU6IHN0cmluZywgZGVzYzogc3RyaW5nLCBuYXZpZ2F0ZTogc3RyaW5nLCBpbWFnZVNyYzogc3RyaW5nIH1bXSA9IFtcbiAgICB7IG5hbWU6IFwiQ2FudGVlblwiLCBkZXNjOiBcIlRPRE86IEFkZCBzaG9ydCBkZXNjcmlwdGlvbiBoZXJlIVwiLCBuYXZpZ2F0ZTogXCJpdGVtLWEvMFwiLCBpbWFnZVNyYzogIFwifi9pbWFnZXMvY29mZmVlLnBuZ1wiIH0sXG4gICAgeyBuYW1lOiBcIkdyYWRlc1wiLCBkZXNjOiBcIlRPRE86IEFkZCBzaG9ydCBkZXNjcmlwdGlvbiBoZXJlIVwiLCBuYXZpZ2F0ZTogXCJncmFkZXNcIiwgaW1hZ2VTcmM6ICBcIn4vaW1hZ2VzL3N0dWRlbnRfaGF0LnBuZ1wiIH0sXG4gICAgeyBuYW1lOiBcIkxlY3R1cmVzXCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcInNjaGVkdWxlXCIsIGltYWdlU3JjOiAgXCJ+L2ltYWdlcy9zY2hlZHVsZS5wbmdcIiB9LFxuICAgIHsgbmFtZTogXCJBU1RBXCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcImFzdGFcIiwgaW1hZ2VTcmM6IFwifi9pbWFnZXMvc3R1ZGVudF9oYXQucG5nXCJ9LFxuICAgIHsgbmFtZTogXCJEZXBhcnRtZW50XCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcImRlcGFydG1lbnRcIiwgaW1hZ2VTcmM6IFwifi9pbWFnZXMvc3R1ZGVudF9oYXQucG5nXCJ9LFxuICAgIHsgbmFtZTogXCJCYWxhbmNlXCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcInByaW50LWJhbGFuY2VcIiwgaW1hZ2VTcmM6IFwifi9pbWFnZXMvc3R1ZGVudF9oYXQucG5nXCJ9XG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luOiBMb2dpblNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIFRPRE8gd29ya2Fyb3VuZCB3aXRoIGxvZ2luIHNlc3Npb25cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYoYXBwU2V0dGluZ3MuaGFzS2V5KFwiYWNjb3VudFwiKSkge1xuICAgICAgdGhpcy5sb2dpbi5sb2dpbihKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFjY291bnRcIikpKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRCb29sZWFuKFwiaXNMb2dnZWRJblwiLCB0cnVlKTtcbiAgICAgIH0sZXJyb3IgPT4ge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ2luLmxvZ2luKG5ldyBVc2VyKFwidGVzdFVzZXJcIixcInRlc3RQYXNzMVwiKSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHt9LGVycm9yID0+IHt9KTtcbiAgICB9XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoJy9kZWZhdWx0JykudGhlbigoKT0+XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpKVxuICB9XG5cbiAgb25JdGVtTG9hZGluZyhhcmdzKSB7XG4gICAgLy8gaGFjayB0byBnZXQgYXJvdW5kIGlzc3VlIHdpdGggUmFkTGlzdFZpZXcgaW9zIGJhY2tncm91bmQgY29sb3JzOiBodHRwczovL2dpdGh1Yi5jb20vdGVsZXJpay9uYXRpdmVzY3JpcHQtdWktZmVlZGJhY2svaXNzdWVzLzE5NlxuICAgIGlmIChpc0lPUykge1xuICAgICAgICB2YXIgbmV3Y29sb3IgPSBuZXcgQ29sb3IoXCIjZTZlNmU2XCIpO1xuICAgICAgICBhcmdzLmlvcy5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwodGhpcy5jb21wb25lbnRzW2FyZ3MuaW5kZXhdLm5hdmlnYXRlLHsgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGVMZWZ0JyB9fSlcbiAgfVxufVxuIl19