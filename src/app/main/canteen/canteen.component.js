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
        core_1.ViewChild("actionButton"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudGVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW50ZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSx1RkFBb0Y7QUFDcEYsc0RBQStEO0FBQy9ELDBFQUF1RTtBQUl2RSwwQ0FBaUQ7QUFJakQ7SUFZRSwwQkFDVSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVjlCLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFFbEIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsZUFBVSxHQUFHLENBQUMsQ0FBQztJQVN2QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsMkNBQTJDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBaUI7WUFDbkQsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFELEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDeEMsQ0FBQyxFQUFFLFVBQUMsUUFBYTtZQUNmLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENB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O09BTHJCLG9CQUFvQixDQVVoQztJQUFELDJCQUFDO0NBQUEsQUFWRCxDQUEwQyxnQkFBZ0IsR0FVekQ7QUFWWSxvREFBb0I7QUFpQmpDO0lBQTBDLHdDQUFnQjtJQUV4RCw4QkFDRSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsY0FBOEI7UUFIaEMsWUFLSSxrQkFBTSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLFNBRTFEO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7O0lBQ3pCLENBQUM7SUFUVSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7eUNBSW9CLHlCQUFnQjtZQUNsQixnQ0FBYztZQUNkLHVCQUFjO09BTHJCLG9CQUFvQixDQVVoQztJQUFELDJCQUFDO0NBQUEsQUFWRCxDQUEwQyxnQkFBZ0IsR0FVekQ7QUFWWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ2FudGVlblNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvY2FudGVlbi9jYW50ZWVuLnNlcnZpY2VcIlxuaW1wb3J0IHsgQ2FudGVlbiB9IGZyb20gJ34vYXBwL21vZGVsL2NhbnRlZW4vY2FudGVlbic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnfi9hcHAvbW9kZWwvY2FudGVlbi9tZW51L21lbnUnO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnfi9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBDYW50ZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKFwiYWN0aW9uQnV0dG9uXCIpXG4gIF9idXR0b25SZWY6IEFjdGlvbkJ1dHRvbkNvbXBvbmVudDtcblxuICBwcm90ZWN0ZWQgY29udGFpbmVyID0gJ2EnO1xuXG4gIHByaXZhdGUgY3VycmVudFNsaWRlTnVtOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHNsaWRlQ291bnQgPSAzO1xuICBtZW51OiBNZW51O1xuICBkYXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgY2FudGVlblNlcnZpY2U6IENhbnRlZW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgaWQgPSArdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2lkJ107XG4gICAgLy90aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuICAgICAgdGhpcy5jYW50ZWVuU2VydmljZS5nZXRNZW51KCkudGhlbigocmVzb2x2ZWQ6IENhbnRlZW4pID0+IHtcbiAgICAgICAgdGhpcy5tZW51ID0gcmVzb2x2ZWQubWVudVtpZF07XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHRoaXMubWVudS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVOdW0gPSBpZDtcbiAgICAgICAgdGhpcy5zbGlkZUNvdW50ID0gcmVzb2x2ZWQubWVudS5sZW5ndGhcbiAgICAgIH0sIChyZWplY3RlZDogYW55KSA9PiB7XG4gICAgICAgIGFsZXJ0KHJlamVjdGVkLnRvU3RyaW5nKCkpXG4gICAgICB9KVxuICB9XG5cbiAgZ2V0IGRldGFpbHNQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbnRhaW5lciA9PT0gJ2EnKSA/ICcvaXRlbS1iJyA6ICcvaXRlbS1hJ1xuICB9XG5cbiAgZ2V0U3R5bGUoaW5kZXg6IG51bWJlcikge1xuICAgIGlmKGluZGV4ID09IHRoaXMuY3VycmVudFNsaWRlTnVtKSB7XG4gICAgICByZXR1cm4gXCJibGFja1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCIjYmJiXCI7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgXG4gIH1cblxuICBuYXZpZ2F0ZUJhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXCJtYWluXCIsIHsgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGVSaWdodCcgfSxjbGVhckhpc3Rvcnk6IHRydWV9KVxuICB9XG5cbiAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcbiAgICBpZihhcmdzLmRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgaWYodGhpcy5jdXJyZW50U2xpZGVOdW0gPT0gdGhpcy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICB0aGlzLm5hdmlnYXRlUmlnaHQoMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVSaWdodCh0aGlzLmN1cnJlbnRTbGlkZU51bSArIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihhcmdzLmRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgaWYodGhpcy5jdXJyZW50U2xpZGVOdW0gPT09IDApIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZUxlZnQodGhpcy5zbGlkZUNvdW50IC0gMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGVMZWZ0KHRoaXMuY3VycmVudFNsaWRlTnVtIC0gMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZVJpZ2h0KGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZGV0YWlsc1BhdGgsIGlkXSwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiAnc2xpZGVMZWZ0JyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgfSwgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgbmF2aWdhdGVMZWZ0KGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW3RoaXMuZGV0YWlsc1BhdGgsIGlkXSwge1xuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiAnc2xpZGVSaWdodCcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGV0YWlscy1hJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbnRlZW4uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50QSBleHRlbmRzIENhbnRlZW5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgY2FudGVlblNlcnZpY2U6IENhbnRlZW5TZXJ2aWNlLFxuICAgIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgc3VwZXIocm91dGVyRXh0ZW5zaW9ucywgY2FudGVlblNlcnZpY2UsIGFjdGl2YXRlZFJvdXRlKTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gJ2EnO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRldGFpbHMtYicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW50ZWVuLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudEIgZXh0ZW5kcyBDYW50ZWVuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIGNhbnRlZW5TZXJ2aWNlOiBDYW50ZWVuU2VydmljZSxcbiAgICBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICAgIHN1cGVyKHJvdXRlckV4dGVuc2lvbnMsIGNhbnRlZW5TZXJ2aWNlLCBhY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9ICdiJztcbiAgfVxufVxuIl19