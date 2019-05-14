import { Component, OnInit } from '@angular/core';

import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from '~/app/environment/environment';

@Component({
  selector: 'ns-department-informatik',
  templateUrl: './department-informatik.component.html',
  styleUrls: ['./department-informatik.component.css'],
  moduleId: module.id,
})
export class DepartmentInformatikComponent implements OnInit {

  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  navigateBack() {
		this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true})
  }

}
