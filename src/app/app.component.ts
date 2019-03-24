import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer"
import * as app from "tns-core-modules/application";

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
 }
