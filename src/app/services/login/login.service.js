"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("tns-core-modules/http");
var LoginService = /** @class */ (function () {
    function LoginService() {
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth";
        this.header = { "Content-Type": "application/json" };
    }
    LoginService.prototype.login = function (user) {
        return rxjs_1.from(http_1.request({
            url: this.serverUrl,
            method: "POST",
            headers: this.header,
            content: this.getRequestBody(user)
        }));
    };
    LoginService.prototype.getRequestBody = function (user) {
        return JSON.stringify({ username: user.username, password: user.password });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXdDO0FBRXhDLDhDQUFnRDtBQUdoRDtJQUlJO1FBSFEsY0FBUyxHQUFHLGlEQUFpRCxDQUFBO1FBQzdELFdBQU0sR0FBRyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFBO0lBRXJDLENBQUM7SUFFakIsNEJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixPQUFPLFdBQUksQ0FBQyxjQUFPLENBQUM7WUFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ25CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztTQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNQLENBQUM7SUFFTyxxQ0FBYyxHQUF0QixVQUF1QixJQUFVO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUM3RSxDQUFDO0lBakJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcHAuYXN0YS5odHdnLWtvbnN0YW56LmRlL2FwaS91c2VyL2F1dGhcIlxuICAgIHByaXZhdGUgaGVhZGVyID0ge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBsb2dpbih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcbiAgICAgICAgcmV0dXJuIGZyb20ocmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMuc2VydmVyVXJsLCBcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2V0UmVxdWVzdEJvZHkodXNlcilcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXF1ZXN0Qm9keSh1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkfSlcbiAgICB9XG4gICAgXG59Il19