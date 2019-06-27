import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { SemestereventService } from '~/app/service/semesterevents/semesterevent.service';
import { SemesterEvents } from '~/app/model/events/semesterevents';
import { CacheService } from '~/app/service/cache/cache.service';
@Component({
  selector: 'ns-semesterevents',
  templateUrl: './semesterevents.component.html',
  styleUrls: ['./semesterevents.component.css']
})
export class SemestereventsComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;
  semesterEvents: SemesterEvents;


  constructor(
    private routerExtensions: RouterExtensions,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    this.semesterEvents = this.cacheService.getEventsFromCache(); 
  }
  
  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }


}
