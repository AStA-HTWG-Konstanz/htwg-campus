"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var platform_1 = require("tns-core-modules/platform");
var color_1 = require("tns-core-modules/color/color");
var login_service_1 = require("~/app/services/login/login.service");
var user_model_1 = require("~/app/model/user/user.model");
var MainComponent = /** @class */ (function () {
    function MainComponent(routerExtensions, login) {
        this.routerExtensions = routerExtensions;
        this.login = login;
        this.img = "~/images/htwg.jpg";
        //TODO: Add new JSON-Item, if you want to add a new component
        this.components = [
            { name: "Canteen", desc: "TODO: Add short description here!", navigate: "item-a/0", imageSrc: "~/images/coffee.png" },
            { name: "Grades", desc: "TODO: Add short description here!", navigate: "grades", imageSrc: "~/images/student_hat.png" },
            { name: "Lecture", desc: "TODO: Add short description here!", navigate: "schedule", imageSrc: "~/images/schedule.png" }
        ];
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
    }
    MainComponent.prototype.ngOnInit = function () {
        this.login.login(new user_model_1.User("testUser", "testPass1")).subscribe(function (response) { }, function (error) { });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0Qsa0RBQW9EO0FBQ3BELDZEQUE0RDtBQUM1RCxzREFBa0Q7QUFDbEQsc0RBQXFEO0FBQ3JELG9FQUFrRTtBQUNsRSwwREFBbUQ7QUFRbkQ7SUFVRSx1QkFBb0IsZ0JBQWtDLEVBQVUsS0FBbUI7UUFBL0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWM7UUFSbkYsUUFBRyxHQUFXLG1CQUFtQixDQUFBO1FBQ2pDLDZEQUE2RDtRQUM3RCxlQUFVLEdBQXlFO1lBQ2pGLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUcscUJBQXFCLEVBQUU7WUFDdEgsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRywwQkFBMEIsRUFBRTtZQUN4SCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFHLHVCQUF1QixFQUFFO1NBQ3pILENBQUM7UUFHQSxHQUFHLENBQUMsY0FBYyxDQUFDLHlCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBSSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSyxDQUFDLEVBQUMsVUFBQSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtRQUExQyxDQUEwQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLGtJQUFrSTtRQUNsSSxJQUFJLGdCQUFLLEVBQUU7WUFDUCxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsSUFBUztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUE7SUFDaEgsQ0FBQztJQXZDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVdzQyx5QkFBZ0IsRUFBaUIsNEJBQVk7T0FWeEUsYUFBYSxDQXdDekI7SUFBRCxvQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3InO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbWFpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGltZzogU3RyaW5nID0gXCJ+L2ltYWdlcy9odHdnLmpwZ1wiXG4gIC8vVE9ETzogQWRkIG5ldyBKU09OLUl0ZW0sIGlmIHlvdSB3YW50IHRvIGFkZCBhIG5ldyBjb21wb25lbnRcbiAgY29tcG9uZW50czogeyBuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgbmF2aWdhdGU6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZyB9W10gPSBbXG4gICAgeyBuYW1lOiBcIkNhbnRlZW5cIiwgZGVzYzogXCJUT0RPOiBBZGQgc2hvcnQgZGVzY3JpcHRpb24gaGVyZSFcIiwgbmF2aWdhdGU6IFwiaXRlbS1hLzBcIiwgaW1hZ2VTcmM6ICBcIn4vaW1hZ2VzL2NvZmZlZS5wbmdcIiB9LFxuICAgIHsgbmFtZTogXCJHcmFkZXNcIiwgZGVzYzogXCJUT0RPOiBBZGQgc2hvcnQgZGVzY3JpcHRpb24gaGVyZSFcIiwgbmF2aWdhdGU6IFwiZ3JhZGVzXCIsIGltYWdlU3JjOiAgXCJ+L2ltYWdlcy9zdHVkZW50X2hhdC5wbmdcIiB9LFxuICAgIHsgbmFtZTogXCJMZWN0dXJlXCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcInNjaGVkdWxlXCIsIGltYWdlU3JjOiAgXCJ+L2ltYWdlcy9zY2hlZHVsZS5wbmdcIiB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luOiBMb2dpblNlcnZpY2UpIHtcbiAgICBhcHAuc2V0Q3NzRmlsZU5hbWUoZW52aXJvbm1lbnQuc3R5bGUpO1xuICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvZ2luLmxvZ2luKG5ldyBVc2VyKFwidGVzdFVzZXJcIixcInRlc3RQYXNzMVwiKSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHt9LGVycm9yID0+IHt9KTtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybCgnL2RlZmF1bHQnKS50aGVuKCgpPT5cbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCkpXG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGFyZ3MpIHtcbiAgICAvLyBoYWNrIHRvIGdldCBhcm91bmQgaXNzdWUgd2l0aCBSYWRMaXN0VmlldyBpb3MgYmFja2dyb3VuZCBjb2xvcnM6IGh0dHBzOi8vZ2l0aHViLmNvbS90ZWxlcmlrL25hdGl2ZXNjcmlwdC11aS1mZWVkYmFjay9pc3N1ZXMvMTk2XG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcihcIiNlNmU2ZTZcIik7XG4gICAgICAgIGFyZ3MuaW9zLmJhY2tncm91bmRWaWV3LmJhY2tncm91bmRDb2xvciA9IG5ld2NvbG9yLmlvcztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybCh0aGlzLmNvbXBvbmVudHNbYXJncy5pbmRleF0ubmF2aWdhdGUseyB0cmFuc2l0aW9uOiB7IG5hbWU6ICdzbGlkZUxlZnQnIH19KVxuICB9XG59XG4iXX0=