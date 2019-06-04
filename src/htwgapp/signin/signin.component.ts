import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { User } from "~/htwgapp/model/user/user.model";
import { LoginService } from "~/htwgapp/services/login/login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { environment } from '~/htwgapp/environment/environment';
import { Page } from "tns-core-modules/ui/page";
import { TextField } from "tns-core-modules/ui/text-field";
import * as appSettings from "tns-core-modules/application-settings";


@Component({
  selector: 'ns-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  moduleId: module.id,
})
export class SigninComponent implements OnInit {

  user: User;
  processing: boolean = false;
  error: boolean = false;

  constructor(
    private loginservice: LoginService,
    private routerExtensions: RouterExtensions,
    private page: Page
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.user = new User("","");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  login() {
    this.processing = true;
    this.error = false;
    this.loginservice.login(this.user).subscribe(
      response => {
        appSettings.setBoolean("isLoggedIn", true);
        appSettings.setString("account",JSON.stringify(this.user))
        appSettings.setString("username",this.user.username)
        this.processing = false;
        this.routerExtensions.navigateByUrl("main", {clearHistory: true});
      },
      error => {
        this.error = true;
        this.processing = false;
      }
    )
  }

  onNameChange(args: any) {
    let textField = <TextField>args.object;
    this.user.username = textField.text;
  }

  onPasswordChange(args: any) {
    let textField = <TextField>args.object;
    this.user.password = textField.text;
  }

}
