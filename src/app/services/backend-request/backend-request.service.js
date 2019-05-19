"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("tns-core-modules/http");
var scheduleuser_model_1 = require("~/app/model/scheduleuser/scheduleuser.model");
var appSettings = require("tns-core-modules/application-settings");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZW5kLXJlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUNyRCw4Q0FBZ0Q7QUFDaEQsa0ZBQTJFO0FBRTNFLG1FQUFxRTtBQUtyRTs7R0FFRztBQUlIO0lBQ0U7SUFBZSxDQUFDO0lBRWhCOztPQUVHO0lBQ0ssdUNBQU8sR0FBZjtRQUNFLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxJQUFJLFVBQVUsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwRSxPQUFPLElBQUksaUNBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekU7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVDQUFPLEdBQVAsVUFBUSxTQUFpQjtRQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQztRQUM5RixJQUFJLE9BQU8sR0FBRyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JELE9BQU8sY0FBTyxDQUFDO1lBQ1gsR0FBRyxFQUFFLFNBQVM7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUNoQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOUJVLHFCQUFxQjtRQUhqQyxpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxxQkFBcUIsQ0FnQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcbmltcG9ydCB7IHNjaGVkdWxlVXNlciB9IGZyb20gJ34vYXBwL21vZGVsL3NjaGVkdWxldXNlci9zY2hlZHVsZXVzZXIubW9kZWwnO1xuXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9hcHAvbW9kZWwvdXNlci91c2VyLm1vZGVsJztcbmltcG9ydCB7IE5vb3BOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy96b25lL25nX3pvbmUnO1xuXG4vKipcbiAqIFNlbmRzIHJlcXVlc3QgdG8gYmFja2VuZCBhcyBsb2dlZCBpbiB1c2VyXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRSZXF1ZXN0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyIG1vZGVsIGZyb20gZW52aXJvbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRVc2VyKCk6IFVzZXIge1xuICAgIGlmIChhcHBTZXR0aW5ncy5oYXNLZXkoXCJhY2NvdW50XCIpKSB7XG4gICAgICBsZXQgc3RvcmVkVXNlcjogVXNlciA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiKSk7XG4gICAgICByZXR1cm4gbmV3IHNjaGVkdWxlVXNlcihzdG9yZWRVc2VyLnVzZXJuYW1lLCBzdG9yZWRVc2VyLnBhc3N3b3JkLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIHVzZXIgYXMgcGF5bG9hZCB0byBiYWNrZW5kXG4gICAqIEBwYXJhbSBzZXJ2ZXJVcmwgYmFja2VuZCByZXF1ZXN0IHVybFxuICAgKiByZXR1cm4gcmVqZWN0IGlmIG5vIHVzZXIgaXMgbG9nZWQgaW5cbiAgICovXG4gIHJlcXVlc3Qoc2VydmVyVXJsOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuICAgICAgbGV0IHVzZXIgPSB0aGlzLmdldFVzZXIoKTtcbiAgICAgIGlmICh1c2VyID09IG51bGwpIHJldHVybiBuZXcgUHJvbWlzZSgocmVqZWN0KSA9PiByZWplY3QoSlNPTi5zdHJpbmdpZnkoXCJ1c2VyIGhhc25gdCBsb2dpblwiKSkpO1xuICAgICAgbGV0IGhlYWRlcnMgPSB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH07XG4gICAgICByZXR1cm4gcmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBzZXJ2ZXJVcmwsXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=