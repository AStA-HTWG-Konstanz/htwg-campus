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
        core_1.ViewChild("lineTop"),
        __metadata("design:type", core_1.ElementRef)
    ], ActionButtonComponent.prototype, "_lineTopRef", void 0);
    __decorate([
        core_1.ViewChild("lineCenter"),
        __metadata("design:type", core_1.ElementRef)
    ], ActionButtonComponent.prototype, "_lineCenterRef", void 0);
    __decorate([
        core_1.ViewChild("lineBottom"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RjtBQVU5RjtJQVVDO1FBTmUsUUFBRyxHQUFtQyxJQUFJLG1CQUFZLEVBQW9CLENBQUM7SUFPMUYsQ0FBQztJQUVELHFDQUFLLEdBQUwsVUFBTSxJQUFzQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQseUNBQVMsR0FBVCxVQUFVLE9BQWEsRUFBQyxPQUFlO1FBQ3RDLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLENBQUMsT0FBTyxDQUFDO29CQUNmLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQ1gsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUN4QixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDMUIsUUFBUSxFQUFFLEdBQUc7aUJBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztTQUNEO2FBQU07WUFDTixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDO0lBRUQsNENBQVksR0FBWixVQUFhLE9BQWEsRUFBQyxP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aUVBQUM7SUFDM0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWlCLGlCQUFVO2lFQUFDO0lBUnhDLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDNUMsQ0FBQzs7T0FDVyxxQkFBcUIsQ0EyRmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQWN0aW9uQnV0dG9uXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25Db21wb25lbnQge1xuXG5cdEBJbnB1dCgnaXNBcnJvdycpIGlzQXJyb3c6IGJvb2xlYW47XG5cblx0QE91dHB1dChcInRhcFwiKSB0YXA6IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4oKTtcblxuXHRAVmlld0NoaWxkKFwibGluZVRvcFwiKSBfbGluZVRvcFJlZjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImxpbmVDZW50ZXJcIikgX2xpbmVDZW50ZXJSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJsaW5lQm90dG9tXCIpIF9saW5lQm90dG9tUmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuXHRcdHRoaXMudGFwLm5leHQoYXJncyk7XG5cdH1cblxuXHR1cGRhdGVUb3AoZWxlbWVudDogVmlldyxhbmltYXRlOmJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogLTQ1LFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuNDUsIHk6IDEgfSxcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogLTUsIHk6IDMgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSAtNDU7XG5cdFx0XHRlbGVtZW50LnNjYWxlWCA9IDAuNDU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVggPSAtNTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IDM7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQ2VudGVyKGVsZW1lbnQ6IFZpZXcsYW5pbWF0ZTpib29sZWFuKSB7XG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyb3cpIHtcblx0XHRcdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRyb3RhdGU6IDAsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC45LCB5OiAxIH0sXG5cdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IDEsIHk6IDAgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSAwO1xuXHRcdFx0ZWxlbWVudC5zY2FsZVggPSAwLjk7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVggPSAxO1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gMDtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVCb3R0b20oZWxlbWVudDogVmlldywgYW5pbWF0ZTpib29sZWFuKSB7XG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyb3cpIHtcblx0XHRcdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRyb3RhdGU6IDQ1LFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuNDUsIHk6IDEgfSxcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogLTUsIHk6IC0zIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gNDU7XG5cdFx0XHRlbGVtZW50LnNjYWxlWCA9IDAuNDU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVggPSAtNTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IC0zO1xuXHRcdH1cblx0fVxuXG5cdGFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50OiBWaWV3KSB7XG5cdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdHJvdGF0ZTogMCxcblx0XHRcdHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcblx0XHRcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG5cdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0fVxuXG5cdG1ha2VBcnJvdygpIHtcblx0XHR0aGlzLnVwZGF0ZVRvcCh0aGlzLl9saW5lVG9wUmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcblx0XHR0aGlzLnVwZGF0ZUNlbnRlcih0aGlzLl9saW5lQ2VudGVyUmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcblx0XHR0aGlzLnVwZGF0ZUJvdHRvbSh0aGlzLl9saW5lQm90dG9tUmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcblx0fVxufSJdfQ==