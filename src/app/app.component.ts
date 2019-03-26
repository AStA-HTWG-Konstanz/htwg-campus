import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer"
import * as app from "tns-core-modules/application";
import * as dialogsModule from "tns-core-modules/ui/dialogs";
import * as appSettings from "tns-core-modules/application-settings";


@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
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
        this.closeDrawer()
    }
 }
 
 export function alert(message: string) {
    return dialogsModule.alert({
        title: "Groceries",
        okButtonText: "OK",
        message: message
    });
}
