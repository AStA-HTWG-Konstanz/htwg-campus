import { Component, OnInit } from '@angular/core';
import { HtwgscheduleService } from "~/app/services/schedule/htwgschedule.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { environment } from "~/app/environment/environment";

@Component({
  selector: 'ns-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  moduleId: module.id,
})
export class ScheduleComponent implements OnInit {

  constructor( private client: HtwgscheduleService ) { 
    app.setCssFileName(environment.style);
    app.loadAppCss();
  }

  htmlString: String = "test";
  
  ngOnInit() {
    this.getSchedule()
  }

  getSchedule() {
    this.client.getSchedule().subscribe(response => {
      //this.htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';
      //this.htmlString = response.toString();
    },
    error => {
      //this.htmlString = JSON.stringify(error)
    })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

  
}
