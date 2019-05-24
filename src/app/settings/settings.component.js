"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("~/app/environment/environment");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var theme_service_1 = require("../services/theme/theme.service");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(routerExtensions, themeService) {
        this.routerExtensions = routerExtensions;
        this.themeService = themeService;
        this.currentActive = 0;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themes = environment_1.environment.style.map(function (x) { return x.name; });
        this.themes.forEach(function (value, index) {
            if (value === _this.themeService.getCurrentTheme.name) {
                _this.currentActive = index;
            }
        });
    };
    SettingsComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = this.themes[picker.selectedIndex];
        this.currentActive = picker.selectedIndex;
    };
    SettingsComponent.prototype.changeTheme = function () {
        this.themeService.setCurrentTheme(this.picked);
        this.routerExtensions.navigateByUrl('/main', { clearHistory: true });
    };
    SettingsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SettingsComponent.prototype.navigateBack = function () {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'ns-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, theme_service_1.ThemeService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQTZEO0FBRTdELDZEQUE0RDtBQUM1RCxzREFBK0Q7QUFDL0Qsa0RBQW9EO0FBR3BELGlFQUErRDtBQVEvRDtJQU1FLDJCQUFvQixnQkFBa0MsRUFBVSxZQUEwQjtRQUF0RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFIMUYsa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFJMUIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFHLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBQyxLQUFLO1lBQzlCLElBQUksS0FBSyxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRTtnQkFDcEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxnREFBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUM5QixJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFBO0lBQzNDLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNFLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDckcsQ0FBQztJQXBDVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBT3NDLHlCQUFnQixFQUF3Qiw0QkFBWTtPQU4vRSxpQkFBaUIsQ0FzQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vLi4vbW9kZWwvdGhlbWUvdGhlbWUubW9kZWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCJ+L2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90aGVtZS90aGVtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0aGVtZXM6IEFycmF5PHN0cmluZz47XG4gIGN1cnJlbnRBY3RpdmU6IG51bWJlciA9IDA7XG4gIHBpY2tlZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB0aGVtZVNlcnZpY2U6IFRoZW1lU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50aGVtZXMgPSBlbnZpcm9ubWVudC5zdHlsZS5tYXAoeCA9PngubmFtZSk7XG4gICAgdGhpcy50aGVtZXMuZm9yRWFjaCgodmFsdWUsaW5kZXgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy50aGVtZVNlcnZpY2UuZ2V0Q3VycmVudFRoZW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgIHRoaXMucGlja2VkID0gdGhpcy50aGVtZXNbcGlja2VyLnNlbGVjdGVkSW5kZXhdO1xuICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IHBpY2tlci5zZWxlY3RlZEluZGV4XG4gIH1cblxuICBjaGFuZ2VUaGVtZSgpIHtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5zZXRDdXJyZW50VGhlbWUodGhpcy5waWNrZWQpXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoJy9tYWluJywgeyBjbGVhckhpc3Rvcnk6IHRydWV9KVxuICB9XG5cbiAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG5cbiAgbmF2aWdhdGVCYWNrKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZUJ5VXJsKFwibWFpblwiLCB7IHRyYW5zaXRpb246IHsgbmFtZTogJ3NsaWRlUmlnaHQnIH0sY2xlYXJIaXN0b3J5OiB0cnVlfSlcbiAgfVxuXG59XG4iXX0=