import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { isIOS } from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color/color';
import { User } from '~/app/model/user/user.model';
import * as appSettings from 'tns-core-modules/application-settings';
import { LoginService } from '../service/login/login.service';
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
    { name: "Lectures", desc: "TODO: Add short description here!", navigate: "schedule", imageSrc:  "~/images/schedule.png" },
    { name: "Grades", desc: "TODO: Add short description here!", navigate: "grades", imageSrc:  "~/images/student_hat.png" },
    { name: "Canteen", desc: "TODO: Add short description here!", navigate: "canteen", imageSrc:  "~/images/coffee.png" },
  ] 

  // TODO workaround with login session
  ngOnInit() {
    if(appSettings.hasKey("account")) {
      this.login.login(JSON.parse(appSettings.getString("account"))).subscribe(response => {
        appSettings.setBoolean("isLoggedIn", true);
      },error => {});
    } else {
      this.routerExtensions.navigateByUrl("login",{ transition: { name: 'slideRight' }})
      //this.login.login(new User("testUser","testPass1")).then((response) => {},error => {});
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  reload(): void {
    // this.routerExtensions.navigateByUrl('/default').then(()=>
    // this.routerExtensions.backToPreviousPage())
  }

  onItemLoading(args) {
    // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
    // if (isIOS) {
    //     var newcolor = new Color("#334152");
    //     args.ios.backgroundView.backgroundColor = newcolor.ios;
    // }
  }

  public onNavigationItemTap(args: any) {
    this.routerExtensions.navigateByUrl(this.components[args.index].navigate,{ transition: { name: 'slideLeft' }})
  }

}
