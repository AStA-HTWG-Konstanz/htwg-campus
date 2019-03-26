"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _CURRENT_USER = "_CURRENT_USER";
var appSettings = require("tns-core-modules/application-settings");
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.prototype.isUserLoggedIn = function () {
        return appSettings.getBoolean("isLoggedIn");
    };
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUN0QyxtRUFBcUU7QUFHckU7SUFBQTtJQU1BLENBQUM7SUFKVSx1Q0FBYyxHQUFyQjtRQUVJLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBTFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQU0xQjtJQUFELHFCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCJcbmNvbnN0IF9DVVJSRU5UX1VTRVIgPSBcIl9DVVJSRU5UX1VTRVJcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cbiAgICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG5cbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldEJvb2xlYW4oXCJpc0xvZ2dlZEluXCIpO1xuICAgIH1cbn0iXX0=