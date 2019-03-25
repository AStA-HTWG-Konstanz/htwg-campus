import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { User } from "~/app/model/user/user.model";
import { LoginService } from "~/app/services/login/login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { environment } from '~/app/environment/environment';
import { Page } from "tns-core-modules/ui/page";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: 'ns-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  moduleId: module.id,
})
export class SigninComponent implements OnInit {

  user: User;

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
    this.loginservice.login(this.user).subscribe(
      response => {
        environment.user.isLoggedIn = true;
        this.routerExtensions.navigateByUrl("main", {clearHistory: true});
      },
      error => alert(JSON.stringify(error))
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
