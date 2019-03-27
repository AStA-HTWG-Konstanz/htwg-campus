"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var platform_1 = require("tns-core-modules/platform");
var color_1 = require("tns-core-modules/color/color");
var MainComponent = /** @class */ (function () {
    function MainComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.img = "~/images/htwg.jpg";
        //TODO: Add new JSON-Item, if you want to add a new component
        this.components = [
            { name: "Canteen", desc: "TODO: Add short description here!", navigate: "canteen", imageSrc: "~/images/coffee.png" },
            { name: "Grades", desc: "TODO: Add short description here!", navigate: "grades", imageSrc: "~/images/student_hat.png" },
            { name: "Lecture", desc: "TODO: Add short description here!", navigate: "schedule", imageSrc: "~/images/schedule.png" }
        ];
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
    }
    MainComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0Qsa0RBQW9EO0FBQ3BELDZEQUE0RDtBQUM1RCxzREFBa0Q7QUFDbEQsc0RBQXFEO0FBUXJEO0lBVUUsdUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUnRELFFBQUcsR0FBVyxtQkFBbUIsQ0FBQTtRQUNqQyw2REFBNkQ7UUFDN0QsZUFBVSxHQUF5RTtZQUNqRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFHLHFCQUFxQixFQUFFO1lBQ3JILEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUcsMEJBQTBCLEVBQUU7WUFDeEgsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRyx1QkFBdUIsRUFBRTtTQUN6SCxDQUFDO1FBR0EsR0FBRyxDQUFDLGNBQWMsQ0FBQyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckQsT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7UUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixrSUFBa0k7UUFDbEksSUFBSSxnQkFBSyxFQUFFO1lBQ1AsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCLFVBQTJCLElBQVM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUMsQ0FBQyxDQUFBO0lBQ2hILENBQUM7SUF0Q1UsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FXc0MseUJBQWdCO09BVjNDLGFBQWEsQ0F1Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCJ+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbWFpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbi5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGltZzogU3RyaW5nID0gXCJ+L2ltYWdlcy9odHdnLmpwZ1wiXG4gIC8vVE9ETzogQWRkIG5ldyBKU09OLUl0ZW0sIGlmIHlvdSB3YW50IHRvIGFkZCBhIG5ldyBjb21wb25lbnRcbiAgY29tcG9uZW50czogeyBuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgbmF2aWdhdGU6IHN0cmluZywgaW1hZ2VTcmM6IHN0cmluZyB9W10gPSBbXG4gICAgeyBuYW1lOiBcIkNhbnRlZW5cIiwgZGVzYzogXCJUT0RPOiBBZGQgc2hvcnQgZGVzY3JpcHRpb24gaGVyZSFcIiwgbmF2aWdhdGU6IFwiY2FudGVlblwiLCBpbWFnZVNyYzogIFwifi9pbWFnZXMvY29mZmVlLnBuZ1wiIH0sXG4gICAgeyBuYW1lOiBcIkdyYWRlc1wiLCBkZXNjOiBcIlRPRE86IEFkZCBzaG9ydCBkZXNjcmlwdGlvbiBoZXJlIVwiLCBuYXZpZ2F0ZTogXCJncmFkZXNcIiwgaW1hZ2VTcmM6ICBcIn4vaW1hZ2VzL3N0dWRlbnRfaGF0LnBuZ1wiIH0sXG4gICAgeyBuYW1lOiBcIkxlY3R1cmVcIiwgZGVzYzogXCJUT0RPOiBBZGQgc2hvcnQgZGVzY3JpcHRpb24gaGVyZSFcIiwgbmF2aWdhdGU6IFwic2NoZWR1bGVcIiwgaW1hZ2VTcmM6ICBcIn4vaW1hZ2VzL3NjaGVkdWxlLnBuZ1wiIH1cbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICBhcHAuc2V0Q3NzRmlsZU5hbWUoZW52aXJvbm1lbnQuc3R5bGUpO1xuICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybCgnL2RlZmF1bHQnKS50aGVuKCgpPT5cbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCkpXG4gIH1cblxuICBvbkl0ZW1Mb2FkaW5nKGFyZ3MpIHtcbiAgICAvLyBoYWNrIHRvIGdldCBhcm91bmQgaXNzdWUgd2l0aCBSYWRMaXN0VmlldyBpb3MgYmFja2dyb3VuZCBjb2xvcnM6IGh0dHBzOi8vZ2l0aHViLmNvbS90ZWxlcmlrL25hdGl2ZXNjcmlwdC11aS1mZWVkYmFjay9pc3N1ZXMvMTk2XG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcihcIiNlNmU2ZTZcIik7XG4gICAgICAgIGFyZ3MuaW9zLmJhY2tncm91bmRWaWV3LmJhY2tncm91bmRDb2xvciA9IG5ld2NvbG9yLmlvcztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGVCeVVybCh0aGlzLmNvbXBvbmVudHNbYXJncy5pbmRleF0ubmF2aWdhdGUseyB0cmFuc2l0aW9uOiB7IG5hbWU6ICdzbGlkZUxlZnQnIH19KVxuICB9XG59XG4iXX0=