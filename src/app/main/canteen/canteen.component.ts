import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActionButtonComponent } from "../../action-button/action-button.component";
import { RouterExtensions } from "nativescript-angular/router";
import { CanteenService } from "~/app/services/canteen/canteen.service"

@Component({
  selector: 'ns-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css'],
  moduleId: module.id,
})
export class CanteenComponent implements OnInit, AfterViewInit {

  @ViewChild("actionButton")
  _buttonRef: ActionButtonComponent;
  constructor(private routerExtensions: RouterExtensions, private canteenService: CanteenService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this._buttonRef.makeArrow();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  navigateBack() {
		this.routerExtensions.backToPreviousPage()
	}

}
