"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("tns-core-modules/http");
var HtwgscheduleService = /** @class */ (function () {
    function HtwgscheduleService() {
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/lectures";
        this.header = { "Content-Type": "application/json" };
    }
    // TODO: changed response to schedule model
    HtwgscheduleService.prototype.getSchedule = function (body) {
        var headers = this.header;
        return http_1.request({
            url: this.serverUrl,
            method: "POST",
            headers: headers,
            content: JSON.stringify(body)
        });
    };
    HtwgscheduleService.prototype.getTimeTable = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.latestRequest &&
                _this.latestRequest.getUTCDate == new Date().getUTCDate) {
                console.log("already requested today" +
                    JSON.stringify(_this.latestRequest.getUTCDate));
                resolve(_this.storedResponse);
            }
            else {
                _this.getSchedule(body).then(function (response) {
                    if (response.length > 0) {
                        console.log("schedule response: ");
                        _this.latestRequest = new Date();
                        _this.storedResponse = response;
                        resolve(response);
                    }
                    else {
                        reject("empty response");
                    }
                }, function (error) { return reject(error); });
            }
        });
    };
    HtwgscheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HtwgscheduleService);
    return HtwgscheduleService;
}());
exports.HtwgscheduleService = HtwgscheduleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR3Z3NjaGVkdWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHdnc2NoZWR1bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw4Q0FBZ0Q7QUFHaEQ7SUFNSTtRQUxRLGNBQVMsR0FBRyxxREFBcUQsQ0FBQztRQUNsRSxXQUFNLEdBQUcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztJQUl6QyxDQUFDO0lBRWhCLDJDQUEyQztJQUMzQyx5Q0FBVyxHQUFYLFVBQVksSUFBa0I7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixPQUFPLGNBQU8sQ0FBQztZQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUztZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUNoQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLElBQWtCO1FBQS9CLGlCQTJCQztRQTFCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFDSSxLQUFJLENBQUMsYUFBYTtnQkFDbEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQ3hEO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQ1AseUJBQXlCO29CQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQ3BELENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDdkIsVUFBQyxRQUFnQjtvQkFDYixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDckI7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzVCO2dCQUNMLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLENBQ3pCLENBQUM7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTlDUSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTs7T0FDQSxtQkFBbUIsQ0ErQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQS9DRCxJQStDQztBQS9DWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gXCJ+L2FwcC9tb2RlbC9zY2hlZHVsZXVzZXIvc2NoZWR1bGV1c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR3Z3NjaGVkdWxlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vYXBwLmFzdGEuaHR3Zy1rb25zdGFuei5kZS9hcGkvdXNlci9sZWN0dXJlc1wiO1xuICAgIHByaXZhdGUgaGVhZGVyID0geyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9O1xuXG4gICAgbGF0ZXN0UmVxdWVzdDogRGF0ZTtcbiAgICBzdG9yZWRSZXNwb25zZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8vIFRPRE86IGNoYW5nZWQgcmVzcG9uc2UgdG8gc2NoZWR1bGUgbW9kZWxcbiAgICBnZXRTY2hlZHVsZShib2R5OiBzY2hlZHVsZVVzZXIpOiBQcm9taXNlPE9iamVjdD4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuaGVhZGVyO1xuICAgICAgICByZXR1cm4gcmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMuc2VydmVyVXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUaW1lVGFibGUoYm9keTogc2NoZWR1bGVVc2VyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QuZ2V0VVRDRGF0ZSA9PSBuZXcgRGF0ZSgpLmdldFVUQ0RhdGVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcImFscmVhZHkgcmVxdWVzdGVkIHRvZGF5XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5sYXRlc3RSZXF1ZXN0LmdldFVUQ0RhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RvcmVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNjaGVkdWxlKGJvZHkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGUgcmVzcG9uc2U6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiZW1wdHkgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=