"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var backend_service_1 = require("~/app/services/backend/backend.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(backendService, routerExtensions) {
        this.backendService = backendService;
        this.routerExtensions = routerExtensions;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.backendService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.routerExtensions.navigateByUrl("/login");
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_service_1.BackendService, router_1.RouterExtensions])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoR3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxzREFBK0Q7QUFDL0QsMEVBQXdFO0FBR3hFO0lBQ0ksbUJBQW9CLGNBQThCLEVBQVUsZ0JBQWtDO1FBQTFFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRW5HLCtCQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU5QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFYUSxTQUFTO1FBRHJCLGlCQUFVLEVBQUU7eUNBRTJCLGdDQUFjLEVBQTRCLHlCQUFnQjtPQURyRixTQUFTLENBWXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYmFja2VuZC9iYWNrZW5kLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5iYWNrZW5kU2VydmljZS5pc1VzZXJMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwiL2xvZ2luXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19