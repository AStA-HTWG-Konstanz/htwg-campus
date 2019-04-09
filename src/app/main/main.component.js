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
        ];
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0Qsa0RBQW9EO0FBQ3BELDZEQUE0RDtBQUM1RCxzREFBa0Q7QUFDbEQsc0RBQXFEO0FBQ3JELG9FQUFrRTtBQUNsRSwwREFBbUQ7QUFDbkQsbUVBQXFFO0FBUXJFO0lBVUUsdUJBQW9CLGdCQUFrQyxFQUFVLEtBQW1CO1FBQS9ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBUm5GLFFBQUcsR0FBVyxtQkFBbUIsQ0FBQTtRQUNqQyw2REFBNkQ7UUFDN0QsZUFBVSxHQUF5RTtZQUNqRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFHLHFCQUFxQixFQUFFO1lBQ3RILEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUcsMEJBQTBCLEVBQUU7WUFDeEgsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRyx1QkFBdUIsRUFBRTtTQUMxSCxDQUFDO1FBR0EsR0FBRyxDQUFDLGNBQWMsQ0FBQyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLGdDQUFRLEdBQVI7UUFDRSxJQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO2dCQUMvRSxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLEVBQUMsVUFBQSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQUksQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUssQ0FBQyxFQUFDLFVBQUEsS0FBSyxJQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzFGO0lBQ0gsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtRQUExQyxDQUEwQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLGtJQUFrSTtRQUNsSSxJQUFJLGdCQUFLLEVBQUU7WUFDUCxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsSUFBUztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUE7SUFDaEgsQ0FBQztJQTlDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVdzQyx5QkFBZ0IsRUFBaUIsNEJBQVk7T0FWeEUsYUFBYSxDQStDekI7SUFBRCxvQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3InO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLW1haW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21haW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpbWc6IFN0cmluZyA9IFwifi9pbWFnZXMvaHR3Zy5qcGdcIlxuICAvL1RPRE86IEFkZCBuZXcgSlNPTi1JdGVtLCBpZiB5b3Ugd2FudCB0byBhZGQgYSBuZXcgY29tcG9uZW50XG4gIGNvbXBvbmVudHM6IHsgbmFtZTogc3RyaW5nLCBkZXNjOiBzdHJpbmcsIG5hdmlnYXRlOiBzdHJpbmcsIGltYWdlU3JjOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgbmFtZTogXCJDYW50ZWVuXCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcIml0ZW0tYS8wXCIsIGltYWdlU3JjOiAgXCJ+L2ltYWdlcy9jb2ZmZWUucG5nXCIgfSxcbiAgICB7IG5hbWU6IFwiR3JhZGVzXCIsIGRlc2M6IFwiVE9ETzogQWRkIHNob3J0IGRlc2NyaXB0aW9uIGhlcmUhXCIsIG5hdmlnYXRlOiBcImdyYWRlc1wiLCBpbWFnZVNyYzogIFwifi9pbWFnZXMvc3R1ZGVudF9oYXQucG5nXCIgfSxcbiAgICB7IG5hbWU6IFwiTGVjdHVyZXNcIiwgZGVzYzogXCJUT0RPOiBBZGQgc2hvcnQgZGVzY3JpcHRpb24gaGVyZSFcIiwgbmF2aWdhdGU6IFwic2NoZWR1bGVcIiwgaW1hZ2VTcmM6ICBcIn4vaW1hZ2VzL3NjaGVkdWxlLnBuZ1wiIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGxvZ2luOiBMb2dpblNlcnZpY2UpIHtcbiAgICBhcHAuc2V0Q3NzRmlsZU5hbWUoZW52aXJvbm1lbnQuc3R5bGUpO1xuICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gIH1cblxuICAvLyBUT0RPIHdvcmthcm91bmQgd2l0aCBsb2dpbiBzZXNzaW9uXG4gIG5nT25Jbml0KCkge1xuICAgIGlmKGFwcFNldHRpbmdzLmhhc0tleShcImFjY291bnRcIikpIHtcbiAgICAgIHRoaXMubG9naW4ubG9naW4oSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2NvdW50XCIpKSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0Qm9vbGVhbihcImlzTG9nZ2VkSW5cIiwgdHJ1ZSk7XG4gICAgICB9LGVycm9yID0+IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dpbi5sb2dpbihuZXcgVXNlcihcInRlc3RVc2VyXCIsXCJ0ZXN0UGFzczFcIikpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7fSxlcnJvciA9PiB7fSk7XG4gICAgfVxuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKCcvZGVmYXVsdCcpLnRoZW4oKCk9PlxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKSlcbiAgfVxuXG4gIG9uSXRlbUxvYWRpbmcoYXJncykge1xuICAgIC8vIGhhY2sgdG8gZ2V0IGFyb3VuZCBpc3N1ZSB3aXRoIFJhZExpc3RWaWV3IGlvcyBiYWNrZ3JvdW5kIGNvbG9yczogaHR0cHM6Ly9naXRodWIuY29tL3RlbGVyaWsvbmF0aXZlc2NyaXB0LXVpLWZlZWRiYWNrL2lzc3Vlcy8xOTZcbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgdmFyIG5ld2NvbG9yID0gbmV3IENvbG9yKFwiI2U2ZTZlNlwiKTtcbiAgICAgICAgYXJncy5pb3MuYmFja2dyb3VuZFZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3Y29sb3IuaW9zO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY29tcG9uZW50c1thcmdzLmluZGV4XS5uYXZpZ2F0ZSx7IHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlTGVmdCcgfX0pXG4gIH1cbn1cbiJdfQ==