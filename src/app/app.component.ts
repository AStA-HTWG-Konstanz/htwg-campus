import { Component } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition, RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import * as dialogsModule from "tns-core-modules/ui/dialogs";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { 
    private _sideDrawerTransition: DrawerTransitionBase;
    userNameInSideBar: String = "user"
    
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        if (appSettings.hasKey("username")) {
            this.userNameInSideBar = appSettings.getString("username")
        }
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    closeDrawer() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    logout() {
        appSettings.remove("isLoggedIn");
        appSettings.remove("account");
        appSettings.remove("username");
        //appSettings.clear();
        this.closeDrawer()
    }
}
