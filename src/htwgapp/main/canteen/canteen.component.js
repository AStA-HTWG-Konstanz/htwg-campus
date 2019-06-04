"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var action_button_component_1 = require("../../action-button/action-button.component");
var router_1 = require("nativescript-angular/router");
var canteen_service_1 = require("~/app/services/canteen/canteen.service");
var router_2 = require("@angular/router");
var CanteenComponent = /** @class */ (function () {
    function CanteenComponent(routerExtensions, canteenService, activatedRoute) {
        this.routerExtensions = routerExtensions;
        this.canteenService = canteenService;
        this.activatedRoute = activatedRoute;
        this.container = 'a';
        this.currentSlideNum = 0;
        this.slideCount = 3;
    }
    CanteenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params['id'];
        //this.item = this.itemService.getItem(id);
        this.canteenService.getMenu().then(function (resolved) {
            _this.menu = resolved.menu[id];
            _this.date = new Date(_this.menu.date).toLocaleDateString();
            _this.currentSlideNum = id;
            _this.slideCount = resolved.menu.length;
        }, function (rejected) {
            alert(rejected.toString());
        });
    };
    Object.defineProperty(CanteenComponent.prototype, "detailsPath", {
        get: function () {
            return (this.container === 'a') ? '/item-b' : '/item-a';
        },
        enumerable: true,
        configurable: true
    });
    CanteenComponent.prototype.getStyle = function (index) {
        if (index == this.currentSlideNum) {
            return "black";
        }
        return "#bbb";
    };
    CanteenComponent.prototype.ngAfterViewInit = function () {
    };
    CanteenComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    CanteenComponent.prototype.onSwipe = function (args) {
        if (args.direction === 2) {
            if (this.currentSlideNum == this.slideCount - 1) {
                this.navigateRight(0);
            }
            else {
                this.navigateRight(this.currentSlideNum + 1);
            }
        }
        else if (args.direction === 1) {
            if (this.currentSlideNum === 0) {
                this.navigateLeft(this.slideCount - 1);
            }
            else {
                this.navigateLeft(this.currentSlideNum - 1);
            }
        }
    };
    CanteenComponent.prototype.navigateRight = function (id) {
        this.routerExtensions.navigate([this.detailsPath, id], {
            transition: {
                name: 'slideLeft',
                duration: 300
            }, clearHistory: true
        });
    };
    CanteenComponent.prototype.navigateLeft = function (id) {
        this.routerExtensions.navigate([this.detailsPath, id], {
            transition: {
                name: 'slideRight',
                duration: 300
            },
            clearHistory: true
        });
    };
    __decorate([
        core_1.ViewChild("actionButton", { static: false }),
        __metadata("design:type", action_button_component_1.ActionButtonComponent)
    ], CanteenComponent.prototype, "_buttonRef", void 0);
    return CanteenComponent;
}());
exports.CanteenComponent = CanteenComponent;
var ItemDetailComponentA = /** @class */ (function (_super) {
    __extends(ItemDetailComponentA, _super);
    function ItemDetailComponentA(routerExtensions, canteenService, activatedRoute) {
        var _this = _super.call(this, routerExtensions, canteenService, activatedRoute) || this;
        _this.container = 'a';
        return _this;
    }
    ItemDetailComponentA = __decorate([
        core_1.Component({
            selector: 'ns-details-a',
            moduleId: module.id,
            templateUrl: './canteen.component.html',
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            canteen_service_1.CanteenService,
            router_2.ActivatedRoute])
    ], ItemDetailComponentA);
    return ItemDetailComponentA;
}(CanteenComponent));
exports.ItemDetailComponentA = ItemDetailComponentA;
var ItemDetailComponentB = /** @class */ (function (_super) {
    __extends(ItemDetailComponentB, _super);
    function ItemDetailComponentB(routerExtensions, canteenService, activatedRoute) {
        var _this = _super.call(this, routerExtensions, canteenService, activatedRoute) || this;
        _this.container = 'b';
        return _this;
    }
    ItemDetailComponentB = __decorate([
        core_1.Component({
            selector: 'ns-details-b',
            moduleId: module.id,
            templateUrl: './canteen.component.html',
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            canteen_service_1.CanteenService,
            router_2.ActivatedRoute])
    ], ItemDetailComponentB);
    return ItemDetailComponentB;
}(CanteenComponent));
exports.ItemDetailComponentB = ItemDetailComponentB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudGVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW50ZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUM1RSx1RkFBb0Y7QUFDcEYsc0RBQStEO0FBQy9ELDBFQUF1RTtBQUl2RSwwQ0FBaUQ7QUFJakQ7SUFZRSwwQkFDVSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVjlCLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFFbEIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsZUFBVSxHQUFHLENBQUMsQ0FBQztJQVN2QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBaUI7WUFDbkQsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFELEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDeEMsQ0FBQyxFQUFFLFVBQUMsUUFBYTtZQUNmLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENB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eUJBQWdCO1lBQ2xCLGdDQUFjO1lBQ2QsdUJBQWM7T0FMckIsb0JBQW9CLENBVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVZELENBQTBDLGdCQUFnQixHQVV6RDtBQVZZLG9EQUFvQjtBQWlCakM7SUFBMEMsd0NBQWdCO0lBRXhELDhCQUNFLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixjQUE4QjtRQUhoQyxZQUtFLGtCQUFNLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsU0FFeEQ7UUFEQyxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzs7SUFDdkIsQ0FBQztJQVRVLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7U0FDeEMsQ0FBQzt5Q0FJb0IseUJBQWdCO1lBQ2xCLGdDQUFjO1lBQ2QsdUJBQWM7T0FMckIsb0JBQW9CLENBVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVZELENBQTBDLGdCQUFnQixHQVV6RDtBQVZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2FudGVlblNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvY2FudGVlbi9jYW50ZWVuLnNlcnZpY2VcIlxuaW1wb3J0IHsgQ2FudGVlbiB9IGZyb20gJ34vYXBwL21vZGVsL2NhbnRlZW4vY2FudGVlbic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnfi9hcHAvbW9kZWwvY2FudGVlbi9tZW51L21lbnUnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnfi9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBDYW50ZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKFwiYWN0aW9uQnV0dG9uXCIsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBfYnV0dG9uUmVmOiBBY3Rpb25CdXR0b25Db21wb25lbnQ7XG5cbiAgcHJvdGVjdGVkIGNvbnRhaW5lciA9ICdhJztcblxuICBwcml2YXRlIGN1cnJlbnRTbGlkZU51bTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMztcbiAgbWVudTogTWVudTtcbiAgZGF0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGNhbnRlZW5TZXJ2aWNlOiBDYW50ZWVuU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGlkID0gK3RoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xuICAgIC8vdGhpcy5pdGVtID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKTtcbiAgICB0aGlzLmNhbnRlZW5TZXJ2aWNlLmdldE1lbnUoKS50aGVuKChyZXNvbHZlZDogQ2FudGVlbikgPT4ge1xuICAgICAgdGhpcy5tZW51ID0gcmVzb2x2ZWQubWVudVtpZF07XG4gICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLm1lbnUuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZU51bSA9IGlkO1xuICAgICAgdGhpcy5zbGlkZUNvdW50ID0gcmVzb2x2ZWQubWVudS5sZW5ndGhcbiAgICB9LCAocmVqZWN0ZWQ6IGFueSkgPT4ge1xuICAgICAgYWxlcnQocmVqZWN0ZWQudG9TdHJpbmcoKSlcbiAgICB9KVxuICB9XG5cbiAgZ2V0IGRldGFpbHNQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbnRhaW5lciA9PT0gJ2EnKSA/ICcvaXRlbS1iJyA6ICcvaXRlbS1hJ1xuICB9XG5cbiAgZ2V0U3R5bGUoaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA9PSB0aGlzLmN1cnJlbnRTbGlkZU51bSkge1xuICAgICAgcmV0dXJuIFwiYmxhY2tcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiI2JiYlwiO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gIH1cblxuICBuYXZpZ2F0ZUJhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXCJtYWluXCIsIHsgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGVSaWdodCcgfSwgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXG4gIH1cblxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIGlmIChhcmdzLmRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlTnVtID09IHRoaXMuc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVJpZ2h0KDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hdmlnYXRlUmlnaHQodGhpcy5jdXJyZW50U2xpZGVOdW0gKyAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFyZ3MuZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGVOdW0gPT09IDApIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUxlZnQodGhpcy5zbGlkZUNvdW50IC0gMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVMZWZ0KHRoaXMuY3VycmVudFNsaWRlTnVtIC0gMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZVJpZ2h0KGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZGV0YWlsc1BhdGgsIGlkXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgfSwgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgbmF2aWdhdGVMZWZ0KGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZGV0YWlsc1BhdGgsIGlkXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiAnc2xpZGVSaWdodCcsXG4gICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgIH0sXG4gICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRldGFpbHMtYScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW50ZWVuLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudEEgZXh0ZW5kcyBDYW50ZWVuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIGNhbnRlZW5TZXJ2aWNlOiBDYW50ZWVuU2VydmljZSxcbiAgICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7XG4gICAgc3VwZXIocm91dGVyRXh0ZW5zaW9ucywgY2FudGVlblNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9ICdhJztcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kZXRhaWxzLWInLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FudGVlbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnRCIGV4dGVuZHMgQ2FudGVlbkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBjYW50ZWVuU2VydmljZTogQ2FudGVlblNlcnZpY2UsXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICAgIHN1cGVyKHJvdXRlckV4dGVuc2lvbnMsIGNhbnRlZW5TZXJ2aWNlLCBhY3RpdmF0ZWRSb3V0ZSk7XG4gICAgdGhpcy5jb250YWluZXIgPSAnYic7XG4gIH1cbn1cbiJdfQ==