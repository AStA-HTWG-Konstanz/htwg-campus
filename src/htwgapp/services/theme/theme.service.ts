import { Theme } from "../../model/theme/theme.model";
import { Injectable, EventEmitter } from "@angular/core";
import * as app from "tns-core-modules/application";
import { environment } from "~/htwgapp/environment/environment";
import * as appSettings from "tns-core-modules/application-settings";
import { Observable } from "tns-core-modules/ui/page/page";
import { Subject } from "rxjs";

const themes = require('nativescript-themes');

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private currentTheme: Theme;

    constructor() {
        this.currentTheme = this.getSavedTheme();
        themes.applyTheme(themes.getAppliedTheme(this.currentTheme.path));
    }

    private getSavedTheme(): Theme {
        if (appSettings.hasKey("theme")) {
            return JSON.parse(appSettings.getString("theme"));
        } else {
            return environment.style[0];
        }
    }

    public getCurrentTheme(): Theme {
        return this.currentTheme;
    }

    public getCurrentThemePath(): string {
        return this.currentTheme.path;
    }

    public setCurrentTheme(themeName: string): boolean {
        var foundTheme = environment.style.find(x => x.name === themeName);
        if (foundTheme) {
            this.currentTheme = foundTheme;
            themes.applyTheme(foundTheme.path);
            this.saveTheme();
            console.log("current Theme " + this.currentTheme.name);
            return true;
        }
        return false;
    }
    private saveTheme() {
        appSettings.setString("theme", JSON.stringify(this.currentTheme));
    }
}
