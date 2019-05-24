"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backend_request_service_1 = require("./../backend-request/backend-request.service");
var core_1 = require("@angular/core");
var PrintBalanceService = /** @class */ (function () {
    function PrintBalanceService(backendRequest) {
        this.backendRequest = backendRequest;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/balance";
    }
    PrintBalanceService.prototype.getBalance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.latestRequest && _this.latestRequest.getUTCDate == new Date().getUTCDate) {
                console.log("already requested today" + JSON.stringify(_this.latestRequest.getUTCDate));
                resolve(_this.storedResponse);
            }
            else {
                _this.backendRequest.request(_this.serverUrl).then(function (response) {
                    if (response.length > 0) {
                        console.log("balance response: ");
                        _this.latestRequest = new Date();
                        _this.storedResponse = response;
                        resolve(response);
                    }
                    else {
                        reject("empty response from balance request");
                    }
                }, function (error) { return reject(error); });
            }
        });
    };
    PrintBalanceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [backend_request_service_1.BackendRequestService])
    ], PrintBalanceService);
    return PrintBalanceService;
}());
exports.PrintBalanceService = PrintBalanceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtYmFsYW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJpbnQtYmFsYW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0ZBQXFGO0FBQ3JGLHNDQUEyQztBQU8zQztJQUtJLDZCQUFvQixjQUFxQztRQUFyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFKbkQsY0FBUyxHQUFHLG9EQUFvRCxDQUFDO0lBSVgsQ0FBQztJQUU3RCx3Q0FBVSxHQUFWO1FBQUEsaUJBcUJDO1FBcEJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLEtBQUksQ0FBQyxhQUFhLElBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzdFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDNUMsVUFBQyxRQUFnQjtvQkFDYixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDckI7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7cUJBQ2pEO2dCQUNMLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLENBQ3pCLENBQUM7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVCUSxtQkFBbUI7UUFIL0IsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBTXNDLCtDQUFxQjtPQUxoRCxtQkFBbUIsQ0E2Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWNrZW5kUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuLy4uL2JhY2tlbmQtcmVxdWVzdC9iYWNrZW5kLXJlcXVlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVVzZXIgfSBmcm9tIFwifi9hcHAvbW9kZWwvc2NoZWR1bGV1c2VyL3NjaGVkdWxldXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJpbnRCYWxhbmNlU2VydmljZSB7XG4gIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2FwcC5hc3RhLmh0d2cta29uc3RhbnouZGUvYXBpL3VzZXIvYmFsYW5jZVwiO1xuXG4gICAgbGF0ZXN0UmVxdWVzdDogRGF0ZTtcbiAgICBzdG9yZWRSZXNwb25zZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFJlcXVlc3Q6IEJhY2tlbmRSZXF1ZXN0U2VydmljZSkge31cblxuICAgIGdldEJhbGFuY2UoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhdGVzdFJlcXVlc3QgJiZ0aGlzLmxhdGVzdFJlcXVlc3QuZ2V0VVRDRGF0ZSA9PSBuZXcgRGF0ZSgpLmdldFVUQ0RhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFscmVhZHkgcmVxdWVzdGVkIHRvZGF5XCIgK0pTT04uc3RyaW5naWZ5KHRoaXMubGF0ZXN0UmVxdWVzdC5nZXRVVENEYXRlKSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0b3JlZFJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZW5kUmVxdWVzdC5yZXF1ZXN0KHRoaXMuc2VydmVyVXJsKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGFuY2UgcmVzcG9uc2U6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiZW1wdHkgcmVzcG9uc2UgZnJvbSBiYWxhbmNlIHJlcXVlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=