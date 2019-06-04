import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

import * as app from "tns-core-modules/application";
import { environment } from '~/htwgapp/environment/environment';

@Component({
  selector: 'ns-asta',
  templateUrl: './asta.component.html',
  styleUrls: ['./asta.component.css'],
  moduleId: module.id,
})
export class AstaComponent implements OnInit {

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute
  ) { 
    // app.setCssFileName(environment.style);
    // app.loadAppCss();
  }

  ngOnInit() {
  }

  navigateBack() {
		this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true})
  }

}
