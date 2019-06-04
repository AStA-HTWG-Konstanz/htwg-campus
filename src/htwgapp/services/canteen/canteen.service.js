"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { HttpClient, HttpHeaders } from "@angular/common/http";
var http_1 = require("tns-core-modules/http");
var CanteenService = /** @class */ (function () {
    function CanteenService() {
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/canteen/en/menu";
        this.header = { "Content-Type": "application/json" };
    }
    CanteenService.prototype.getCanteen = function () {
        return http_1.getJSON({ url: this.serverUrl, method: "GET", headers: this.header });
    };
    CanteenService.prototype.getMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.canteen && new Date(_this.canteen.menu[0].date) > new Date()) {
                resolve(_this.canteen);
            }
            else {
                _this.getCanteen().then(function (response) {
                    var today = new Date();
                    for (var i = 0; i < response.menu.length; ++i) {
                        var date = new Date(response.menu[i].date);
                        if (today < date) {
                            response.menu = response.menu.slice(i);
                            break;
                        }
                    }
                    _this.canteen = response;
                    return resolve(_this.canteen);
                }, function (err) { return reject(err); });
            }
        });
    };
    CanteenService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CanteenService);
    return CanteenService;
}());
exports.CanteenService = CanteenService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudGVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FudGVlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFpRTtBQUNqRSw4Q0FBcUc7QUFNckc7SUFNSTtRQUxRLGNBQVMsR0FBRyx1REFBdUQsQ0FBQTtRQUNuRSxXQUFNLEdBQUcsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQTtJQUlyQyxDQUFDO0lBRVQsbUNBQVUsR0FBbEI7UUFDSSxPQUFPLGNBQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQUEsaUJBc0JDO1FBckJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFHLEtBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRTtnQkFDakUsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUNsQixVQUFDLFFBQWlCO29CQUNkLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ3ZCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDMUMsSUFBRyxLQUFLLEdBQUcsSUFBSSxFQUFFOzRCQUNiLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7NEJBQ3RDLE1BQU07eUJBQ1Q7cUJBQ0o7b0JBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7b0JBQ3hCLE9BQU8sT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUNELFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDdkIsQ0FBQzthQUNMO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbENRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTs7T0FDQSxjQUFjLENBbUMxQjtJQUFELHFCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbnRlZW4gfSBmcm9tIFwifi9hcHAvbW9kZWwvY2FudGVlbi9jYW50ZWVuXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbnRlZW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcHAuYXN0YS5odHdnLWtvbnN0YW56LmRlL2FwaS9jYW50ZWVuL2VuL21lbnVcIlxuICAgIHByaXZhdGUgaGVhZGVyID0ge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgIFxuICAgIGNhbnRlZW46IENhbnRlZW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHJpdmF0ZSBnZXRDYW50ZWVuKCk6IFByb21pc2U8T2JqZWN0PiB7XG4gICAgICAgIHJldHVybiBnZXRKU09OKHt1cmw6IHRoaXMuc2VydmVyVXJsLCBtZXRob2Q6IFwiR0VUXCIsaGVhZGVyczogdGhpcy5oZWFkZXJ9KTtcbiAgICB9XG5cbiAgICBnZXRNZW51KCk6IFByb21pc2U8Q2FudGVlbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5jYW50ZWVuICYmIG5ldyBEYXRlKHRoaXMuY2FudGVlbi5tZW51WzBdLmRhdGUpID4gbmV3IERhdGUoKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5jYW50ZWVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYW50ZWVuKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBDYW50ZWVuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHJlc3BvbnNlLm1lbnUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHJlc3BvbnNlLm1lbnVbaV0uZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0b2RheSA8IGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UubWVudSA9IHJlc3BvbnNlLm1lbnUuc2xpY2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW50ZWVuID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLmNhbnRlZW4pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==