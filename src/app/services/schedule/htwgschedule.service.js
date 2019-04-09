"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HtwgscheduleService = /** @class */ (function () {
    function HtwgscheduleService(http) {
        this.http = http;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/lectures";
    }
    // TODO: changed response any to schedule model
    HtwgscheduleService.prototype.getSchedule = function (body) {
        var headers = this.createRequestHeader();
        return this.http
            .post(this.serverUrl, JSON.stringify(body), {
            headers: headers
        })
            .pipe(operators_1.tap(function (_) { return console.log("fetch schedule plan"); }), operators_1.catchError(this.handleError("getSchedule")));
    };
    HtwgscheduleService.prototype.getTimeTable = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.latestRequest != null &&
                _this.latestRequest.getUTCDate == new Date().getUTCDate) {
                console.log("already requested today" +
                    JSON.stringify(_this.latestRequest.getUTCDate));
                resolve(_this.storedResponse);
            }
            else {
                _this.getSchedule(body).subscribe(function (response) {
                    console.log("schedule resposne: " + JSON.stringify(response));
                    _this.latestRequest = new Date();
                    _this.storedResponse = response;
                    resolve(response);
                }, function (error) { return reject(error); });
            }
        });
    };
    HtwgscheduleService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HtwgscheduleService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.error(error);
            return rxjs_1.of(result);
        };
    };
    HtwgscheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HtwgscheduleService);
    return HtwgscheduleService;
}());
exports.HtwgscheduleService = HtwgscheduleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR3Z3NjaGVkdWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHdnc2NoZWR1bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFDL0QsNkJBQXNDO0FBRXRDLDRDQUFzRDtBQUd0RDtJQUtJLDZCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjVCLGNBQVMsR0FBRyxxREFBcUQsQ0FBQztJQUluQyxDQUFDO0lBRXhDLCtDQUErQztJQUMvQyx5Q0FBVyxHQUFYLFVBQVksSUFBa0I7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBTSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQzthQUNELElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEVBQWxDLENBQWtDLENBQUMsRUFDNUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFNLGFBQWEsQ0FBQyxDQUFDLENBQ25ELENBQUM7SUFDVixDQUFDO0lBRUQsMENBQVksR0FBWixVQUFhLElBQWtCO1FBQS9CLGlCQXlCQztRQXhCRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFDSSxLQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7Z0JBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsVUFBVSxFQUN4RDtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUNQLHlCQUF5QjtvQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUNwRCxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQzVCLFVBQUMsUUFBYTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUNQLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQ25ELENBQUM7b0JBQ0YsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNoQyxLQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztvQkFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUN6QixDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxpREFBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0sseUNBQVcsR0FBbkIsVUFBdUIsU0FBdUIsRUFBRSxNQUFVO1FBQW5DLDBCQUFBLEVBQUEsdUJBQXVCO1FBQzFDLE9BQU8sVUFBQyxLQUFVO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixPQUFPLFNBQUUsQ0FBQyxNQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDTixDQUFDO0lBbkVRLG1CQUFtQjtRQUQvQixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVTtPQUwzQixtQkFBbUIsQ0FvRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBzY2hlZHVsZVVzZXIgfSBmcm9tIFwifi9hcHAvbW9kZWwvc2NoZWR1bGV1c2VyL3NjaGVkdWxldXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0d2dzY2hlZHVsZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2FwcC5hc3RhLmh0d2cta29uc3RhbnouZGUvYXBpL3VzZXIvbGVjdHVyZXNcIjtcblxuICAgIGxhdGVzdFJlcXVlc3Q6IERhdGU7XG4gICAgc3RvcmVkUmVzcG9uc2U6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgICAvLyBUT0RPOiBjaGFuZ2VkIHJlc3BvbnNlIGFueSB0byBzY2hlZHVsZSBtb2RlbFxuICAgIGdldFNjaGVkdWxlKGJvZHk6IHNjaGVkdWxlVXNlcik6IE9ic2VydmFibGU8T2JqZWN0PiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJVcmwsIEpTT04uc3RyaW5naWZ5KGJvZHkpLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChfID0+IGNvbnNvbGUubG9nKFwiZmV0Y2ggc2NoZWR1bGUgcGxhblwiKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yPGFueT4oXCJnZXRTY2hlZHVsZVwiKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0VGltZVRhYmxlKGJvZHk6IHNjaGVkdWxlVXNlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RSZXF1ZXN0ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QuZ2V0VVRDRGF0ZSA9PSBuZXcgRGF0ZSgpLmdldFVUQ0RhdGVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcImFscmVhZHkgcmVxdWVzdGVkIHRvZGF5XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5sYXRlc3RSZXF1ZXN0LmdldFVUQ0RhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RvcmVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNjaGVkdWxlKGJvZHkpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2NoZWR1bGUgcmVzcG9zbmU6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RSZXF1ZXN0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIEh0dHAgb3BlcmF0aW9uIHRoYXQgZmFpbGVkLlxuICAgICAqIExldCB0aGUgYXBwIGNvbnRpbnVlLlxuICAgICAqIEBwYXJhbSBvcGVyYXRpb24gLSBuYW1lIG9mIHRoZSBvcGVyYXRpb24gdGhhdCBmYWlsZWRcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gb3B0aW9uYWwgdmFsdWUgdG8gcmV0dXJuIGFzIHRoZSBvYnNlcnZhYmxlIHJlc3VsdFxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRXJyb3I8VD4ob3BlcmF0aW9uID0gXCJvcGVyYXRpb25cIiwgcmVzdWx0PzogVCkge1xuICAgICAgICByZXR1cm4gKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPFQ+ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHJlc3VsdCBhcyBUKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=