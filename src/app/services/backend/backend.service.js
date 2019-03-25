"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("~/app/environment/environment");
var _CURRENT_USER = "_CURRENT_USER";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.prototype.isUserLoggedIn = function () {
        return environment_1.environment.user.isLoggedIn;
    };
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUEyRDtBQUMzRCxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFHdEM7SUFBQTtJQU1BLENBQUM7SUFKVSx1Q0FBYyxHQUFyQjtRQUVJLE9BQU8seUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFMUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBTTFCO0lBQUQscUJBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwifi9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnRcIlxuY29uc3QgX0NVUlJFTlRfVVNFUiA9IFwiX0NVUlJFTlRfVVNFUlwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xuXG4gICAgcHVibGljIGlzVXNlckxvZ2dlZEluKCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIHJldHVybiBlbnZpcm9ubWVudC51c2VyLmlzTG9nZ2VkSW47XG4gICAgfVxufSJdfQ==