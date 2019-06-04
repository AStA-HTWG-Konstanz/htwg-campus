import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private routerExtensions: RouterExtensions) { }

    canActivate() {
        if (this.isUserLoggedIn()) {
            return true;
        } else {
            this.routerExtensions.navigateByUrl("/login");

            return false;
        }
    }

    isUserLoggedIn() {
        return appSettings.getBoolean("isLoggedIn");
    }
}