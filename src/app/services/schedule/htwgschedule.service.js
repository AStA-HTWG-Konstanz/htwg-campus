"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var HtwgscheduleService = /** @class */ (function () {
    function HtwgscheduleService(http) {
        this.http = http;
        this.serverUrl = 'https://app.asta.htwg-konstanz.de/api/user/lectures';
    }
    HtwgscheduleService.prototype.getSchedule = function (body) {
        var headers = this.createRequestHeader();
        return this.http.post(this.serverUrl, JSON.stringify(body), { headers: headers });
    };
    HtwgscheduleService.prototype.getTimeTable = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getSchedule(body).subscribe(function (response) {
                resolve(response);
            }, function (error) { return reject(error); });
        });
    };
    HtwgscheduleService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    HtwgscheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HtwgscheduleService);
    return HtwgscheduleService;
}());
exports.HtwgscheduleService = HtwgscheduleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR3Z3NjaGVkdWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHdnc2NoZWR1bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFLL0Q7SUFFSSw2QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUQ1QixjQUFTLEdBQUcscURBQXFELENBQUE7SUFDakMsQ0FBQztJQUV6Qyx5Q0FBVyxHQUFYLFVBQVksSUFBa0I7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLElBQWlCO1FBQTlCLGlCQU9DO1FBTkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtnQkFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTyxpREFBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUosT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXpCUSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsbUJBQW1CLENBMEIvQjtJQUFELDBCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2NoZWR1bGVVc2VyIH0gZnJvbSBcIn4vYXBwL21vZGVsL3NjaGVkdWxldXNlci9zY2hlZHVsZXVzZXIubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0d2dzY2hlZHVsZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgc2VydmVyVXJsID0gJ2h0dHBzOi8vYXBwLmFzdGEuaHR3Zy1rb25zdGFuei5kZS9hcGkvdXNlci9sZWN0dXJlcydcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgZ2V0U2NoZWR1bGUoYm9keTogc2NoZWR1bGVVc2VyKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsLEpTT04uc3RyaW5naWZ5KGJvZHkpLCB7IGhlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VGltZVRhYmxlKGJvZHk6c2NoZWR1bGVVc2VyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2NoZWR1bGUoYm9keSkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiByZWplY3QoZXJyb3IpKSBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xuICAgIH1cbn0iXX0=