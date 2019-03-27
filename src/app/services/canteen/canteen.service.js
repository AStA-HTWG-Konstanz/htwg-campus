"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CanteenService = /** @class */ (function () {
    function CanteenService(http) {
        this.http = http;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/canteen/en/menu";
    }
    CanteenService.prototype.getMenu = function () {
        return this.http.get(this.serverUrl);
    };
    CanteenService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CanteenService);
    return CanteenService;
}());
exports.CanteenService = CanteenService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudGVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FudGVlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUkvRDtJQUdJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGNBQVMsR0FBRyx1REFBdUQsQ0FBQTtJQUVuQyxDQUFDO0lBRXpDLGdDQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBUFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUlpQixpQkFBVTtPQUgzQixjQUFjLENBUzFCO0lBQUQscUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbnRlZW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcHAuYXN0YS5odHdnLWtvbnN0YW56LmRlL2FwaS9jYW50ZWVuL2VuL21lbnVcIlxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBnZXRNZW51KCk6IE9ic2VydmFibGU8T2JqZWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsKTtcbiAgICB9XG4gICAgXG59Il19