"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var action_button_component_1 = require("../../action-button/action-button.component");
var router_1 = require("nativescript-angular/router");
var canteen_service_1 = require("~/app/services/canteen/canteen.service");
var CanteenComponent = /** @class */ (function () {
    function CanteenComponent(routerExtensions, canteenService) {
        this.routerExtensions = routerExtensions;
        this.canteenService = canteenService;
    }
    CanteenComponent.prototype.ngOnInit = function () {
    };
    CanteenComponent.prototype.ngAfterViewInit = function () {
        this._buttonRef.makeArrow();
    };
    CanteenComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CanteenComponent.prototype.navigateBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    __decorate([
        core_1.ViewChild("actionButton"),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], CanteenComponent.prototype, "_buttonRef", void 0);
    CanteenComponent = __decorate([
        core_1.Component({
            selector: 'ns-canteen',
            templateUrl: './canteen.component.html',
            styleUrls: ['./canteen.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, canteen_service_1.CanteenService])
    ], CanteenComponent);
    return CanteenComponent;
}());
exports.CanteenComponent = CanteenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudGVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW50ZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUU1RSxrREFBb0Q7QUFDcEQsdUZBQW9GO0FBQ3BGLHNEQUErRDtBQUMvRCwwRUFBdUU7QUFRdkU7SUFJRSwwQkFBb0IsZ0JBQWtDLEVBQVUsY0FBOEI7UUFBMUUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFFbkcsbUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFZLEdBQVo7UUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBbEJBO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ2QsK0NBQXFCO3dEQUFDO0lBSHZCLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLc0MseUJBQWdCLEVBQTBCLGdDQUFjO09BSm5GLGdCQUFnQixDQXVCNUI7SUFBRCx1QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBDYW50ZWVuU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9jYW50ZWVuL2NhbnRlZW4uc2VydmljZVwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNhbnRlZW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FudGVlbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbnRlZW4uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDYW50ZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKFwiYWN0aW9uQnV0dG9uXCIpXG4gIF9idXR0b25SZWY6IEFjdGlvbkJ1dHRvbkNvbXBvbmVudDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGNhbnRlZW5TZXJ2aWNlOiBDYW50ZWVuU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fYnV0dG9uUmVmLm1ha2VBcnJvdygpO1xuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgbmF2aWdhdGVCYWNrKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKVxuXHR9XG5cbn1cbiJdfQ==