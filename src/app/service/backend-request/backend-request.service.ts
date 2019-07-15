import { Injectable, Optional } from '@angular/core';
import { request, HttpResponse } from "tns-core-modules/http";
import { scheduleUser } from '~/app/model/scheduleuser/scheduleuser.model';
import { User } from '~/app/model/user/user.model';
import { LoginService } from '../login/login.service';
import { CacheService } from '../cache/cache.service';
import * as randomToken from "random-token"

/**
 * Sends request to backend
 */
@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {
  constructor(
    private login: LoginService,
    private cacheService: CacheService
  ) { }

  /**
   * Get the user model from enviroment
   */
  private getUser(): User {
    if (this.cacheService.isUserInCache) {
      let storedUser: User = this.cacheService.getUserFromCache();
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
      content: JSON.stringify({ username: user.username, password: user.password, student: user.student })
    })
  }

  request_grades(serverUrl: string) {
    var token = randomToken(12);
    let user = this.getUser();
    if (user == null) return new Promise((resolve, reject) => reject("user hasn`t login"));
    return request({
      url: serverUrl,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ username: user.username, password: user.password, token: token })
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
    /* if times isn´t set, use the default of 2 repeats */
    if (!times) return this.safe_get_request(serverUrl, 2);
    /* if times is set to 0, it works like the function request */
    if (times == 0) return this.get_request(serverUrl);
    /* if the response is forbidden, it will start a new login session and start the GET request again */
    return this.get_request(serverUrl).then<HttpResponse>(
      (response: HttpResponse) => {
        if (response.content.toString().startsWith("Forbidden")) {
          this.login.login(this.getUser());
          return this.safe_get_request(serverUrl, times - 1);
        } else {
          return response
        }
      }
    )
  }
}
