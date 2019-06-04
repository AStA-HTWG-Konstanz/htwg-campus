import { Component, OnInit } from '@angular/core';

import * as appSettings from "tns-core-modules/application-settings";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from '~/htwgapp/environment/environment';
import { PrintBalanceService } from '~/htwgapp/services/balance/print-balance.service';
import { User } from '~/htwgapp/model/user/user.model';
import { scheduleUser } from '~/htwgapp/model/scheduleuser/scheduleuser.model';

@Component({
  selector: 'ns-print-balance',
  templateUrl: './print-balance.component.html',
  styleUrls: ['./print-balance.component.css'],
  moduleId: module.id,
})
export class PrintBalanceComponent implements OnInit {

  balance: string

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private printBalanceService: PrintBalanceService
  ) { 
    // app.setCssFileName(environment.style);
    // app.loadAppCss();
  }

  ngOnInit() {
    if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
      var storedUser: User = JSON.parse(appSettings.getString("account"));
      var user = new scheduleUser(storedUser.username, storedUser.password, true);
      this.printBalanceService.getBalance().then(
          (resolved: any) => {
              this.balance = (resolved == null)? "Not Lectures found": resolved;
              //console.log(JSON.stringify(resolved));
          },
          (rejected: any) => {
              alert(JSON.stringify(rejected));
          }
      );
} else {
  alert(JSON.stringify("user isnt login"));
}
  }

  navigateBack() {
		this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true})
  }

}
