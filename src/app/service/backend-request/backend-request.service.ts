import { Injectable, Optional } from '@angular/core';
import { request, HttpResponse } from "tns-core-modules/http";
import { scheduleUser } from '~/app/model/scheduleuser/scheduleuser.model';
import * as appSettings from "tns-core-modules/application-settings";
import * as app from "tns-core-modules/application";
import { User } from '~/app/model/user/user.model';
import { LoginService } from '../login/login.service';

/**
 * Sends request to backend
 */
@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {
  constructor(private login: LoginService) { }

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
   * Send POST request with user as payload to backend
   * @param serverUrl backend request url
   * return reject if no user is loged in
   */
  request(serverUrl: string): Promise<HttpResponse> {
    let user = this.getUser();
    if (user == null) return new Promise((resolve, reject) => reject("user hasn`t login"));
    return request({
      url: serverUrl,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(user)
    })
  }

  /**
   * Send GET request to backend
   * @param serverUrl backend request url
   */
  get_request(serverUrl: string): Promise<HttpResponse> {
    return request({
      url: serverUrl,
      method: "GET",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
  }
  /**
   * if the backend sends 'Forbidden' it will try to refresh the login session and repeate the request
   * @param serverUrl target url at the backend
   * @param times counter for how many tries to send the request again
   */
  safe_get_request(serverUrl: string, times?: number): Promise<HttpResponse> {
    console.log("found " + JSON.stringify(times) + " times")
    /* if times isn´t set, use the default of 2 repeats */
    if (!times) return this.safe_get_request(serverUrl, 2);
    /* if times is set to 0, it works like the function request */
    if (times == 0) return this.get_request(serverUrl);
    /* if the response is forbidden, it will start a new login session and start the GET request again */
    return this.get_request(serverUrl).then<HttpResponse>((response: HttpResponse) => {
      if (response.content.toString().startsWith("Forbidden")) {
        this.login.login(this.getUser());
        return this.safe_get_request(serverUrl, times - 1);
      } else {
        return response
      }
    })

  }

}
