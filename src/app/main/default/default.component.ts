import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as app from "tns-core-modules/application";
import { environment } from "~/app/environment/environment";

@Component({
  selector: 'ns-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  moduleId: module.id,
})
export class DefaultComponent implements OnInit {

  constructor() {
    // app.setCssFileName(environment.style);
    // app.loadAppCss();
   }

  ngOnInit() {
  }

}
