import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActionButtonComponent } from "../../action-button/action-button.component";

@Component({
  selector: 'ns-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  moduleId: module.id,
})
export class GradesComponent implements OnInit {
  @ViewChild("actionButton")
  _buttonRef: ActionButtonComponent;
  constructor(private routerExtensions: RouterExtensions,) { }

  ngOnInit() {
  }

  navigateBack() {
		this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true})
  }

}
