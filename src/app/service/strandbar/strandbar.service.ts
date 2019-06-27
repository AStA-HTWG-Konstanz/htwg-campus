import { Injectable } from '@angular/core';

import { request, getFile, getImage, getJSON, getString, HttpResponse } from "tns-core-modules/http";
import { BackendRequestService } from '../backend-request/backend-request.service';
import { Strandbar } from '~/app/model/strandbar/strandbar';

@Injectable({
  providedIn: 'root'
})
export class StrandbarService {
  private serverUrl = "https://app.asta.htwg-konstanz.de/api/strandbar"

  constructor(private backendRequest: BackendRequestService) { }

  private strandBarRequest(): Promise<Object> {
    return this.backendRequest.safe_get_request(this.serverUrl, 1)
  }

  getIsOpen(): Promise<Strandbar> {
    return new Promise((resolve, reject) => {
      this.strandBarRequest().then(
        (response: HttpResponse) => {
          if (response.statusCode !== 200) {
            return reject("strandbar service reject: " + response.statusCode);
          }
          if (response.content.toString().length > 0) {
            if (response.content.toJSON() as boolean) {
              return resolve(response.content.toJSON());
            } else {
              reject(response)
            }
          } else {
            reject(response)
          }
        },
        (err) => reject(err)
      );
    })
  }
}
