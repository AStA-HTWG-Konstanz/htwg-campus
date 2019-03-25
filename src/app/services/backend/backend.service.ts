import { Injectable } from "@angular/core";
import { environment } from "~/app/environment/environment"
const _CURRENT_USER = "_CURRENT_USER";

@Injectable()
export class BackendService {

    public isUserLoggedIn(): boolean {

        return environment.user.isLoggedIn;
    }
}