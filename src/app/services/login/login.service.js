"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth";
    }
    /*login(user: User): Observable<Object> {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers, responseType: 'text' });
    }*/
    LoginService.prototype.login = function (user) {
        return this.http.post(this.serverUrl, JSON.stringify(user));
    };
    LoginService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
        //"Content-Type": "text/html",
        });
        return headers;
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBTS9EO0lBRUksc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFENUIsY0FBUyxHQUFHLGlEQUFpRCxDQUFBO0lBQzdCLENBQUM7SUFFekM7OztPQUdHO0lBRUgsNEJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTywwQ0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1FBQzFCLDhCQUE4QjtTQUNoQyxDQUFDLENBQUM7UUFFSixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBcEJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsWUFBWSxDQXNCeEI7SUFBRCxtQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWxcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3NNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcHAuYXN0YS5odHdnLWtvbnN0YW56LmRlL2FwaS91c2VyL2F1dGhcIlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICAvKmxvZ2luKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybCwgeyBoZWFkZXJzOiBoZWFkZXJzLCByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KTtcbiAgICB9Ki9cblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAvL1wiQ29udGVudC1UeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG4gICAgXG59Il19