"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var environment_1 = require("~/app/environment/environment");
var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
        app.setCssFileName(environment_1.environment.style);
        app.loadAppCss();
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        core_1.Component({
            selector: 'ns-default',
            templateUrl: './default.component.html',
            styleUrls: ['./default.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());
exports.DefaultComponent = DefaultComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrREFBb0Q7QUFDcEQsNkRBQTREO0FBUTVEO0lBRUU7UUFDRSxHQUFHLENBQUMsY0FBYyxDQUFDLHlCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRixtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVJVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxnQkFBZ0IsQ0FVNUI7SUFBRCx1QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVmYXVsdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RlZmF1bHQuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBhcHAuc2V0Q3NzRmlsZU5hbWUoZW52aXJvbm1lbnQuc3R5bGUpO1xuICAgIGFwcC5sb2FkQXBwQ3NzKCk7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19