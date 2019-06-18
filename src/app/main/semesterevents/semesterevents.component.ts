import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { SemestereventService } from '~/app/service/semesterevents/semesterevent.service';
import { SemesterEvents } from '~/app/model/events/semesterevents';
@Component({
  selector: 'ns-semesterevents',
  templateUrl: './semesterevents.component.html',
  styleUrls: ['./semesterevents.component.css']
})
export class SemestereventsComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;
  semesterEvents: SemesterEvents;


  constructor(private routerExtensions: RouterExtensions, private semsterEventService: SemestereventService) { }

  ngOnInit() {
    this.semsterEventService.getIsOpen().then(
      (resolved: SemesterEvents) => {
        this.semesterEvents = resolved;
      },
      (rejected: any) => {
        console.log(JSON.stringify(rejected))
      }
    )
  }
  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }
  getEvents() {
    if (this.semesterEvents) {
      return this.semesterEvents.events
    }
    return null;
  }


}
