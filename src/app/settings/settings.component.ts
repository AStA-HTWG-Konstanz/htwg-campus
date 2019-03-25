import { Component, OnInit } from '@angular/core';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { environment } from "~/app/environment/environment";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  moduleId: module.id,
})
export class SettingsComponent implements OnInit {

  themes: Array<string> = [
    "aqua","blue","brown", "dark", "forest", "grey", "lemon",
    "light", "lime", "orange", "purple", "ruby", "sky"
  ];
  picked: string;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  public selectedIndexChanged(args) {
    let picker = <ListPicker>args.object;
    this.picked = this.themes[picker.selectedIndex];
  }

  changeTheme() {
    environment.style = "~/themes/" + this.picked + ".css";
    this.routerExtensions.navigateByUrl('/main', { clearHistory: true})
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

}
