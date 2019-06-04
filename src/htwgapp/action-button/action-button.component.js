"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
        this.tap = new core_1.EventEmitter();
    }
    ActionButtonComponent.prototype.onTap = function (args) {
        this.tap.next(args);
    };
    ActionButtonComponent.prototype.updateTop = function (element, animate) {
        if (animate) {
            if (this.isArrow) {
                element.animate({
                    rotate: -45,
                    scale: { x: 0.45, y: 1 },
                    translate: { x: -5, y: 3 },
                    duration: 200
                }).catch(function () { });
            }
            else {
                this.animateToHamburger(element);
            }
        }
        else {
            element.rotate = -45;
            element.scaleX = 0.45;
            element.translateX = -5;
            element.translateY = 3;
        }
    };
    ActionButtonComponent.prototype.updateCenter = function (element, animate) {
        if (animate) {
            if (this.isArrow) {
                element.animate({
                    rotate: 0,
                    scale: { x: 0.9, y: 1 },
                    translate: { x: 1, y: 0 },
                    duration: 200
                }).catch(function () { });
            }
            else {
                this.animateToHamburger(element);
            }
        }
        else {
            element.rotate = 0;
            element.scaleX = 0.9;
            element.translateX = 1;
            element.translateY = 0;
        }
    };
    ActionButtonComponent.prototype.updateBottom = function (element, animate) {
        if (animate) {
            if (this.isArrow) {
                element.animate({
                    rotate: 45,
                    scale: { x: 0.45, y: 1 },
                    translate: { x: -5, y: -3 },
                    duration: 200
                }).catch(function () { });
            }
            else {
                this.animateToHamburger(element);
            }
        }
        else {
            element.rotate = 45;
            element.scaleX = 0.45;
            element.translateX = -5;
            element.translateY = -3;
        }
    };
    ActionButtonComponent.prototype.animateToHamburger = function (element) {
        element.animate({
            rotate: 0,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: 200
        }).catch(function () { });
    };
    ActionButtonComponent.prototype.makeArrow = function () {
        this.updateTop(this._lineTopRef.nativeElement, false);
        this.updateCenter(this._lineCenterRef.nativeElement, false);
        this.updateBottom(this._lineBottomRef.nativeElement, false);
    };
    __decorate([
        core_1.Input('isArrow'),
        __metadata("design:type", Boolean)
    ], ActionButtonComponent.prototype, "isArrow", void 0);
    __decorate([
        core_1.Output("tap"),
        __metadata("design:type", core_1.EventEmitter)
    ], ActionButtonComponent.prototype, "tap", void 0);
    __decorate([
        core_1.ViewChild('lineTop', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ActionButtonComponent.prototype, "_lineTopRef", void 0);
    __decorate([
        core_1.ViewChild('lineCenter', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ActionButtonComponent.prototype, "_lineCenterRef", void 0);
    __decorate([
        core_1.ViewChild('lineBottom', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], ActionButtonComponent.prototype, "_lineBottomRef", void 0);
    ActionButtonComponent = __decorate([
        core_1.Component({
            selector: "ActionButton",
            moduleId: module.id,
            templateUrl: "./action-button.component.html",
            styleUrls: ['./action-button.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ActionButtonComponent);
    return ActionButtonComponent;
}());
exports.ActionButtonComponent = ActionButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RjtBQVU5RjtJQVVDO1FBTmUsUUFBRyxHQUFtQyxJQUFJLG1CQUFZLEVBQW9CLENBQUM7SUFPMUYsQ0FBQztJQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFzQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLE9BQWEsRUFBRSxPQUFnQjtRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZixNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDeEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzFCLFFBQVEsRUFBRSxHQUFHO2lCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7U0FDRDthQUFNO1lBQ04sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxPQUFhLEVBQUUs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QkFBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztrQ0FBaUIsaUJBQVU7aUVBQUM7SUFDM0I7UUFBM0MsZ0JBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0NBQWlCLGlCQUFVO2lFQUFDO0lBUjNELHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDNUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0EyRmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQWN0aW9uQnV0dG9uXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25Db21wb25lbnQge1xuXG5cdEBJbnB1dCgnaXNBcnJvdycpIGlzQXJyb3c6IGJvb2xlYW47XG5cblx0QE91dHB1dChcInRhcFwiKSB0YXA6IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4oKTtcblxuXHRAVmlld0NoaWxkKCdsaW5lVG9wJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9saW5lVG9wUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKCdsaW5lQ2VudGVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9saW5lQ2VudGVyUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKCdsaW5lQm90dG9tJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9saW5lQm90dG9tUmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuXHRcdHRoaXMudGFwLm5leHQoYXJncyk7XG5cdH1cblxuXHR1cGRhdGVUb3AoZWxlbWVudDogVmlldywgYW5pbWF0ZTogYm9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiAtNDUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC40NSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogMyB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IC00NTtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC40NTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IC01O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gMztcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVDZW50ZXIoZWxlbWVudDogVmlldywgYW5pbWF0ZTogYm9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiAwLFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuOSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAxLCB5OiAwIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gMDtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC45O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gMTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQm90dG9tKGVsZW1lbnQ6IFZpZXcsIGFuaW1hdGU6IGJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogNDUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC40NSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogLTMgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSA0NTtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC40NTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IC01O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gLTM7XG5cdFx0fVxuXHR9XG5cblx0YW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQ6IFZpZXcpIHtcblx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0cm90YXRlOiAwLFxuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcblx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHR9XG5cblx0bWFrZUFycm93KCkge1xuXHRcdHRoaXMudXBkYXRlVG9wKHRoaXMuX2xpbmVUb3BSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlQ2VudGVyKHRoaXMuX2xpbmVDZW50ZXJSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlQm90dG9tKHRoaXMuX2xpbmVCb3R0b21SZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHR9XG59Il19