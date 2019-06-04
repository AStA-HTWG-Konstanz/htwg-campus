"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("tns-core-modules/http");
var scheduleuser_model_1 = require("~/app/model/scheduleuser/scheduleuser.model");
var appSettings = require("tns-core-modules/application-settings");
//import { NoopNgZone } from '@angular/core/src/zone/ng_zone';
/**
 * Sends request to backend as loged in user
 */
var BackendRequestService = /** @class */ (function () {
    function BackendRequestService() {
    }
    /**
     * Get the user model from enviroment
     */
    BackendRequestService.prototype.getUser = function () {
        if (appSettings.hasKey("account")) {
            var storedUser = JSON.parse(appSettings.getString("account"));
            return new scheduleuser_model_1.scheduleUser(storedUser.username, storedUser.password, true);
        }
        else {
            return null;
        }
    };
    /**
     * Send request with user as payload to backend
     * @param serverUrl backend request url
     * return reject if no user is loged in
     */
    BackendRequestService.prototype.request = function (serverUrl) {
        var user = this.getUser();
        if (user == null)
            return new Promise(function (reject) { return reject(JSON.stringify("user hasn`t login")); });
        var headers = { "Content-Type": "application/json" };
        return http_1.request({
            url: serverUrl,
            method: "POST",
            headers: headers,
            content: JSON.stringify(user)
        });
    };
    BackendRequestService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BackendRequestService);
    return BackendRequestService;
}());
exports.BackendRequestService = BackendRequestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZW5kLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUNyRCw4Q0FBZ0Q7QUFDaEQsa0ZBQTJFO0FBRTNFLG1FQUFxRTtBQUdyRSw4REFBOEQ7QUFFOUQ7O0dBRUc7QUFJSDtJQUNFO0lBQWdCLENBQUM7SUFFakI7O09BRUc7SUFDSyx1Q0FBTyxHQUFmO1FBQ0UsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksVUFBVSxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sSUFBSSxpQ0FBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUNBQU8sR0FBUCxVQUFRLFNBQWlCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO1FBQzlGLElBQUksT0FBTyxHQUFHLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUM7UUFDckQsT0FBTyxjQUFPLENBQUM7WUFDYixHQUFHLEVBQUUsU0FBUztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5QlUscUJBQXFCO1FBSGpDLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUNXLHFCQUFxQixDQWdDakM7SUFBRCw0QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IHsgc2NoZWR1bGVVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvc2NoZWR1bGV1c2VyL3NjaGVkdWxldXNlci5tb2RlbCc7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L2FwcC9tb2RlbC91c2VyL3VzZXIubW9kZWwnO1xuLy9pbXBvcnQgeyBOb29wTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvem9uZS9uZ196b25lJztcblxuLyoqXG4gKiBTZW5kcyByZXF1ZXN0IHRvIGJhY2tlbmQgYXMgbG9nZWQgaW4gdXNlclxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCYWNrZW5kUmVxdWVzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIgbW9kZWwgZnJvbSBlbnZpcm9tZW50XG4gICAqL1xuICBwcml2YXRlIGdldFVzZXIoKTogVXNlciB7XG4gICAgaWYgKGFwcFNldHRpbmdzLmhhc0tleShcImFjY291bnRcIikpIHtcbiAgICAgIGxldCBzdG9yZWRVc2VyOiBVc2VyID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2NvdW50XCIpKTtcbiAgICAgIHJldHVybiBuZXcgc2NoZWR1bGVVc2VyKHN0b3JlZFVzZXIudXNlcm5hbWUsIHN0b3JlZFVzZXIucGFzc3dvcmQsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggdXNlciBhcyBwYXlsb2FkIHRvIGJhY2tlbmRcbiAgICogQHBhcmFtIHNlcnZlclVybCBiYWNrZW5kIHJlcXVlc3QgdXJsXG4gICAqIHJldHVybiByZWplY3QgaWYgbm8gdXNlciBpcyBsb2dlZCBpblxuICAgKi9cbiAgcmVxdWVzdChzZXJ2ZXJVcmw6IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG4gICAgbGV0IHVzZXIgPSB0aGlzLmdldFVzZXIoKTtcbiAgICBpZiAodXNlciA9PSBudWxsKSByZXR1cm4gbmV3IFByb21pc2UoKHJlamVjdCkgPT4gcmVqZWN0KEpTT04uc3RyaW5naWZ5KFwidXNlciBoYXNuYHQgbG9naW5cIikpKTtcbiAgICBsZXQgaGVhZGVycyA9IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfTtcbiAgICByZXR1cm4gcmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZlclVybCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=