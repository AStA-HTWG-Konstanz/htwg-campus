import { Component } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition, RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import { CacheService } from "./service/cache/cache.service";
import { TranslateService } from "@ngx-translate/core";
import * as dialogs from "tns-core-modules/ui/dialogs"
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
        private cacheService: CacheService,
        private translate: TranslateService,
        private canteenService: CanteenService
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
        let message = this.translate.currentLang === "en" ? "Choose a language" : "Sprache auswählen"
        dialogs.action({
            message: message,
            cancelButtonText: this.translate.currentLang === "en" ? "Close" : "Schließen",
            actions: ["Deutsch", "English"]
        }).then(result => {
            if (result === "Deutsch") {
                if (!(this.cacheService.isLanguageInCache() && this.cacheService.getLanguageFromCache() == "de")) {
                    this.cacheService.loadLanguageInCache("de");
                    this.translate.use("de")
                    this.refreshCanteenLocation()
                }
            }
            if (result === "English") {
                if (!(this.cacheService.isLanguageInCache() && this.cacheService.getLanguageFromCache() == "en")) {
                    this.cacheService.loadLanguageInCache("en");
                    this.translate.use("en")
                    this.refreshCanteenLocation()
                }
            }
            this.closeDrawer()
        })
    }

    refreshCanteenLocation() {
        this.canteenService.getMenu().then((canteen: Canteen) => {
            this.cacheService.loadCanteenInCache(canteen)
        }, (rejected: any) => {
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
