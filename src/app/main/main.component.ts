import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { isIOS } from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color/color';
import { User } from '~/app/model/user/user.model';
import * as appSettings from 'tns-core-modules/application-settings';
import { LoginService } from '../service/login/login.service';
import { localize } from "nativescript-localize";
@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions, private login: LoginService) {
  }

  components: { name: string, desc: string, navigate: string, imageSrc: string }[] = [
    { name: localize("dashboard.lectures"), desc: "TODO: Add short description here!", navigate: "schedule", imageSrc: "~/images/schedule.png" },
    { name: localize("dashboard.grades"), desc: "TODO: Add short description here!", navigate: "grades", imageSrc: "~/images/student_hat.png" },
    { name: localize("dashboard.canteen"), desc: "TODO: Add short description here!", navigate: "canteen", imageSrc: "~/images/coffee.png" },
    { name: localize("dashboard.strandbar"), desc: "TODO: Add short description here!", navigate: "strandbar", imageSrc: "~/images/wine.png" },
    { name: localize("dashboard.endlicht"), desc: "TODO: Add short description here!", navigate: "endlicht", imageSrc: "~/images/endlicht_white.png" },
    { name: localize("dashboard.events"), desc: "TODO: Add short description here!", navigate: "events", imageSrc: "~/images/events.png" },
    { name: localize("dashboard.balance"), desc: "TODO: Add short description here!", navigate: "balance", imageSrc: "~/images/balance.png" },
  ]

  // TODO workaround with login session
  ngOnInit() {
    if (appSettings.hasKey("account")) {
      this.login.login(JSON.parse(appSettings.getString("account"))).then((resolved: any) => {
        appSettings.setBoolean("isLoggedIn", true);
      }, (rejected: any) => { console.log(JSON.stringify(rejected)) });
    } else {
      this.routerExtensions.navigateByUrl("login", { transition: { name: 'slideRight' } })
      //this.login.login(new User("testUser","testPass1")).then((response) => {},error => {});
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  reload(): void {
  }

  onItemLoading(args) {
  }

  public onNavigationItemTap(args: any) {
    this.routerExtensions.navigateByUrl(this.components[args.index].navigate, { transition: { name: 'slideLeft' } })
  }

}
