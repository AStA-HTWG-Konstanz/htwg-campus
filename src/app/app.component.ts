import { Component } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition, RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import * as dialogsModule from "tns-core-modules/ui/dialogs";
import { CacheService } from "./service/cache/cache.service";
import { User } from "./model/user/user.model"
import { CanteenService } from "./service/canteen/canteen.service";
import { Canteen } from "./model/canteen/canteen";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    private _sideDrawerTransition: DrawerTransitionBase;
    userNameInSideBar: String = "user"
    
    constructor(
        private routerExtensions: RouterExtensions,
        private cacheService: CacheService
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        if(this.cacheService.isUserInCache())
            this.userNameInSideBar = this.cacheService.getUserFromCache().username
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    closeDrawer() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    logout() {
        this.cacheService.clearCache()
        this.closeDrawer()
    }
}
