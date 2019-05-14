import { Injectable, Optional } from '@angular/core';
import { request } from "tns-core-modules/http";
import { scheduleUser } from '~/app/model/scheduleuser/scheduleuser.model';

import * as appSettings from "tns-core-modules/application-settings";
import * as app from "tns-core-modules/application";
import { User } from '~/app/model/user/user.model';
import { NoopNgZone } from '@angular/core/src/zone/ng_zone';

/**
 * Sends request to backend as loged in user
 */
@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {
  constructor() {}

  /**
   * Get the user model from enviroment
   */
  private getUser(): User {
    if (appSettings.hasKey("account")) {
      let storedUser: User = JSON.parse(appSettings.getString("account"));
      return new scheduleUser(storedUser.username, storedUser.password, true);
    } else {
      return null;
    }
  }

  /**
   * Send request with user as payload to backend
   * @param serverUrl backend request url
   * return reject if no user is loged in
   */
  request(serverUrl: string): Promise<Object> {
      let user = this.getUser();
      if (user == null) return new Promise((reject) => reject(JSON.stringify("user hasn`t login")));
      let headers = { "Content-Type": "application/json" };
      return request({
          url: serverUrl,
          method: "POST",
          headers: headers,
          content: JSON.stringify(user)
      });
  }

}
