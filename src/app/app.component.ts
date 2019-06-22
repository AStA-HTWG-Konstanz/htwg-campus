import { Component } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition, RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import { CacheService } from "./service/cache/cache.service";
import { TranslateService } from "@ngx-translate/core";
import * as dialogs from "tns-core-modules/ui/dialogs"
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
        private cacheService: CacheService,
        private translate: TranslateService
    ) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
        if (this.cacheService.isUserInCache()) {
            this.userNameInSideBar = this.cacheService.getUserFromCache().username
        }
        if (this.cacheService.isLanguageInCache()) {
            this.translate.use(this.cacheService.getLanguageFromCache())
        } else {
            this.cacheService.loadLanguageInCache("de");
            this.translate.use("de")
        }
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    selectLanguage() {
        var message = "Sprache auswählen"
        if(this.translate.currentLang === "en")
            message = "Choose a language"
        dialogs.action({
            message: message,
            cancelButtonText: "Schließen",
            actions: ["Deutsch", "English"]
        }).then(result => {
            if(result === "Deutsch") {
                this.cacheService.loadLanguageInCache("de");
                this.translate.use("de")
            }
            if(result === "English") {
                this.cacheService.loadLanguageInCache("en");
                this.translate.use("en")
            }
            this.closeDrawer()
        })
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
