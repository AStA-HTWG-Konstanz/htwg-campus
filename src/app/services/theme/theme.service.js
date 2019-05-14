"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("~/app/environment/environment");
var appSettings = require("tns-core-modules/application-settings");
var themes = require('nativescript-themes');
var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.currentTheme = this.getSavedTheme();
        themes.applyTheme(themes.getAppliedTheme(this.currentTheme.path));
    }
    ThemeService.prototype.getSavedTheme = function () {
        if (appSettings.hasKey("theme")) {
            return JSON.parse(appSettings.getString("theme"));
        }
        else {
            return environment_1.environment.style[0];
        }
    };
    ThemeService.prototype.getCurrentTheme = function () {
        return this.currentTheme;
    };
    ThemeService.prototype.getCurrentThemePath = function () {
        return this.currentTheme.path;
    };
    ThemeService.prototype.setCurrentTheme = function (themeName) {
        var foundTheme = environment_1.environment.style.find(function (x) { return x.name === themeName; });
        if (foundTheme) {
            this.currentTheme = foundTheme;
            themes.applyTheme(foundTheme.path);
            this.saveTheme();
            console.log("current Theme " + this.currentTheme.name);
            return true;
        }
        return false;
    };
    ThemeService.prototype.saveTheme = function () {
        appSettings.setString("theme", JSON.stringify(this.currentTheme));
    };
    ThemeService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBeUQ7QUFFekQsNkRBQTREO0FBQzVELG1FQUFxRTtBQUlyRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUs5QztJQUdJO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sb0NBQWEsR0FBckI7UUFDSSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsT0FBTyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFTSxzQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRU0sMENBQW1CLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU0sc0NBQWUsR0FBdEIsVUFBdUIsU0FBaUI7UUFDcEMsSUFBSSxVQUFVLEdBQUcseUJBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTyxnQ0FBUyxHQUFqQjtRQUNJLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQXJDUSxZQUFZO1FBSHhCLGlCQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDOztPQUNXLFlBQVksQ0FzQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIi4vLi4vLi4vbW9kZWwvdGhlbWUvdGhlbWUubW9kZWxcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIn4vYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbmNvbnN0IHRoZW1lcyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC10aGVtZXMnKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU2VydmljZSB7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGhlbWU6IFRoZW1lO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhpcy5nZXRTYXZlZFRoZW1lKCk7XG4gICAgICAgIHRoZW1lcy5hcHBseVRoZW1lKHRoZW1lcy5nZXRBcHBsaWVkVGhlbWUodGhpcy5jdXJyZW50VGhlbWUucGF0aCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U2F2ZWRUaGVtZSgpOiBUaGVtZSB7XG4gICAgICAgIGlmIChhcHBTZXR0aW5ncy5oYXNLZXkoXCJ0aGVtZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidGhlbWVcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGVudmlyb25tZW50LnN0eWxlWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEN1cnJlbnRUaGVtZSgpOiBUaGVtZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaGVtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFRoZW1lUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VGhlbWUucGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q3VycmVudFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBmb3VuZFRoZW1lID0gZW52aXJvbm1lbnQuc3R5bGUuZmluZCh4ID0+IHgubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICAgICAgaWYgKGZvdW5kVGhlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRoZW1lID0gZm91bmRUaGVtZTtcbiAgICAgICAgICAgIHRoZW1lcy5hcHBseVRoZW1lKGZvdW5kVGhlbWUucGF0aCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVUaGVtZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IFRoZW1lIFwiICsgdGhpcy5jdXJyZW50VGhlbWUubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgc2F2ZVRoZW1lKCkge1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0aGVtZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmN1cnJlbnRUaGVtZSkpO1xuICAgIH1cbn1cbiJdfQ==