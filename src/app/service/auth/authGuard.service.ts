import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { CacheService } from "../cache/cache.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private routerExtensions: RouterExtensions,
        private cacheService: CacheService) { }

    canActivate() {
        if (this.isUserLoggedIn()) {
            return true;
        } else {
            this.routerExtensions.navigateByUrl("/login");

            return false;
        }
    }

    isUserLoggedIn() {
        return this.cacheService.isUserInCache()
    }
}