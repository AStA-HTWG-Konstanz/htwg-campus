import { Component, OnInit, ViewChild } from '@angular/core';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { environment } from "~/app/environment/environment";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id,
})
export class SettingsComponent implements OnInit {

  themes: Array<string>;
  picked: string;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.themes = environment.style.map(x =>x.name);
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.themes[picker.selectedIndex];
  }

  changeTheme() {
    this.routerExtensions.navigateByUrl('/main', { clearHistory: true})
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  navigateBack() {
		this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true})
  }

}
