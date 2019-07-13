import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user.model';
import { LoginService } from '../service/login/login.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { TextField } from "tns-core-modules/ui/text-field";
import * as app from "tns-core-modules/application";
import { CacheService } from '../service/cache/cache.service';
import { HttpResponse } from "tns-core-modules/http";

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
      (resolved: HttpResponse) => {
        this.processing = false;
        if (resolved.statusCode != 200) {
          this.error = true;
          return;
        }
        let responseBody: { student: boolean } = resolved.content as any;
        let newUser = new User(this.user.username, this.user.password, responseBody.student)
        this.cacheService.loadUserInCache(newUser)
        this.routerExtensions.navigateByUrl("main", { clearHistory: true });
      },
      (rejected: any) => {
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
