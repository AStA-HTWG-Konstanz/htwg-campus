"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("tns-core-modules/application-settings");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var print_balance_service_1 = require("~/app/services/balance/print-balance.service");
var scheduleuser_model_1 = require("~/app/model/scheduleuser/scheduleuser.model");
var PrintBalanceComponent = /** @class */ (function () {
    function PrintBalanceComponent(routerExtensions, activatedRoute, printBalanceService) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.printBalanceService = printBalanceService;
        // app.setCssFileName(environment.style);
        // app.loadAppCss();
    }
    PrintBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
            var storedUser = JSON.parse(appSettings.getString("account"));
            var user = new scheduleuser_model_1.scheduleUser(storedUser.username, storedUser.password, true);
            this.printBalanceService.getBalance().then(function (resolved) {
                _this.balance = (resolved == null) ? "Not Lectures found" : resolved;
                //console.log(JSON.stringify(resolved));
            }, function (rejected) {
                alert(JSON.stringify(rejected));
            });
        }
        else {
            alert(JSON.stringify("user isnt login"));
        }
    };
    PrintBalanceComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    PrintBalanceComponent = __decorate([
        core_1.Component({
            selector: 'ns-print-balance',
            templateUrl: './print-balance.component.html',
            styleUrls: ['./print-balance.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            print_balance_service_1.PrintBalanceService])
    ], PrintBalanceComponent);
    return PrintBalanceComponent;
}());
exports.PrintBalanceComponent = PrintBalanceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtYmFsYW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmludC1iYWxhbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxtRUFBcUU7QUFFckUsc0RBQStEO0FBQy9ELDBDQUFpRDtBQUVqRCxzRkFBbUY7QUFFbkYsa0ZBQTJFO0FBUTNFO0lBSUUsK0JBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLG1CQUF3QztRQUZ4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRWhELHlDQUF5QztRQUN6QyxvQkFBb0I7SUFDdEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6RSxJQUFJLFVBQVUsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLElBQUksR0FBRyxJQUFJLGlDQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLFVBQUMsUUFBYTtnQkFDVixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUNsRSx3Q0FBd0M7WUFDNUMsQ0FBQyxFQUNELFVBQUMsUUFBYTtnQkFDVixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FDSixDQUFDO1NBQ1A7YUFBTTtZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztTQUMxQztJQUNDLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckcsQ0FBQztJQWpDVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FNNEIseUJBQWdCO1lBQ2xCLHVCQUFjO1lBQ1QsMkNBQW1CO09BUHZDLHFCQUFxQixDQW1DakM7SUFBRCw0QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICd+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBQcmludEJhbGFuY2VTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvYmFsYW5jZS9wcmludC1iYWxhbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ34vYXBwL21vZGVsL3VzZXIvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBzY2hlZHVsZVVzZXIgfSBmcm9tICd+L2FwcC9tb2RlbC9zY2hlZHVsZXVzZXIvc2NoZWR1bGV1c2VyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcHJpbnQtYmFsYW5jZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmludC1iYWxhbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJpbnQtYmFsYW5jZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFByaW50QmFsYW5jZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgYmFsYW5jZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcHJpbnRCYWxhbmNlU2VydmljZTogUHJpbnRCYWxhbmNlU2VydmljZVxuICApIHsgXG4gICAgLy8gYXBwLnNldENzc0ZpbGVOYW1lKGVudmlyb25tZW50LnN0eWxlKTtcbiAgICAvLyBhcHAubG9hZEFwcENzcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJpc0xvZ2dlZEluXCIpICYmIGFwcFNldHRpbmdzLmhhc0tleShcImFjY291bnRcIikpIHtcbiAgICAgIHZhciBzdG9yZWRVc2VyOiBVc2VyID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2NvdW50XCIpKTtcbiAgICAgIHZhciB1c2VyID0gbmV3IHNjaGVkdWxlVXNlcihzdG9yZWRVc2VyLnVzZXJuYW1lLCBzdG9yZWRVc2VyLnBhc3N3b3JkLCB0cnVlKTtcbiAgICAgIHRoaXMucHJpbnRCYWxhbmNlU2VydmljZS5nZXRCYWxhbmNlKCkudGhlbihcbiAgICAgICAgICAocmVzb2x2ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSAocmVzb2x2ZWQgPT0gbnVsbCk/IFwiTm90IExlY3R1cmVzIGZvdW5kXCI6IHJlc29sdmVkO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc29sdmVkKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAocmVqZWN0ZWQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShyZWplY3RlZCkpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG59IGVsc2Uge1xuICBhbGVydChKU09OLnN0cmluZ2lmeShcInVzZXIgaXNudCBsb2dpblwiKSk7XG59XG4gIH1cblxuICBuYXZpZ2F0ZUJhY2soKSB7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXCJtYWluXCIsIHsgdHJhbnNpdGlvbjogeyBuYW1lOiAnc2xpZGVSaWdodCcgfSxjbGVhckhpc3Rvcnk6IHRydWV9KVxuICB9XG5cbn1cbiJdfQ==