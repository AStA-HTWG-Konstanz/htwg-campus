"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var HtwgscheduleService = /** @class */ (function () {
    function HtwgscheduleService(http) {
        this.http = http;
        this.serverUrl = "https://google.com";
    }
    HtwgscheduleService.prototype.getSchedule = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers, responseType: 'text' });
    };
    HtwgscheduleService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
        //"Content-Type": "text/html",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR3Z3NjaGVkdWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHdnc2NoZWR1bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFJL0Q7SUFFSSw2QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUQ1QixjQUFTLEdBQUcsb0JBQW9CLENBQUE7SUFDQSxDQUFDO0lBRXpDLHlDQUFXLEdBQVg7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTyxpREFBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1FBQzFCLDhCQUE4QjtTQUNoQyxDQUFDLENBQUM7UUFFSixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBaEJRLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixtQkFBbUIsQ0FpQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHdnc2NoZWR1bGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9nb29nbGUuY29tXCJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgZ2V0U2NoZWR1bGUoKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwsIHsgaGVhZGVyczogaGVhZGVycywgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgLy9cIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvaHRtbFwiLFxuICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufSJdfQ==