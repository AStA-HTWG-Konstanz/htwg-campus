import { Injectable } from "@angular/core";
import { environment } from "~/app/environment/environment"
const _CURRENT_USER = "_CURRENT_USER";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable()
export class BackendService {

    public isUserLoggedIn(): boolean {

        return appSettings.getBoolean("isLoggedIn");
    }
}