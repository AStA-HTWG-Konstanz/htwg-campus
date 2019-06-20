import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user.model';
import { LoginService } from '../service/login/login.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { TextField } from "tns-core-modules/ui/text-field";
import * as app from "tns-core-modules/application";
import { CacheService } from '../service/cache/cache.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {
  user: User;
  processing: boolean = false;
  error: boolean = false;

  constructor(
    private loginservice: LoginService,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.user = new User("", "");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  login() {
    this.processing = true;
    this.error = false;
    this.loginservice.login(this.user).then(
      (resolved: any) => {
        this.cacheService.loadUserInCache(this.user)
        this.processing = false;
        this.routerExtensions.navigateByUrl("main", { clearHistory: true });
      },
      (rejected: any) => {
        this.error = true;
        this.processing = false;
        console.log(JSON.stringify(rejected))
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
