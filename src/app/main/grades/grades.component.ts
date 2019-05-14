import { GradesService } from './../../services/grades/grades.service';
import { SemesterGrades } from './../../model/grades/semester-grades';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActionButtonComponent } from "../../action-button/action-button.component";
import * as appSettings from "tns-core-modules/application-settings";
import { User } from '~/app/model/user/user.model';
import { scheduleUser } from '~/app/model/scheduleuser/scheduleuser.model';
import { BehaviorSubject} from 'rxjs';


@Component({
  selector: 'ns-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  moduleId: module.id,
})
export class GradesComponent implements OnInit {
  @ViewChild("actionButton")
  _buttonRef: ActionButtonComponent;
  @ViewChild('pager') 
  pager: ElementRef;
  currentPagerIndex = 0;
  maxPageIndex = 0;
  currentGrades: SemesterGrades[] = [];
  constructor(private routerExtensions: RouterExtensions,private gradeService: GradesService) {
    this.getGrades();
  }

  ngOnInit() {
  }

  navigateBack() {
		this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' },clearHistory: true})
  }

  getGrades() {
    if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
            this.gradeService.getGrades().then(
                (resolved: any) => {
                    this.currentGrades = (resolved) ? resolved: null;
                    this.maxPageIndex = this.currentGrades.length;
                    //console.log(JSON.stringify(resolved));
                },
                (rejected: any) => {
                    alert(JSON.stringify(rejected));
                }
            );
    } else {
        alert(JSON.stringify("user isnt login"));
    }
  }
  onIndexChanged($event) {
    this.currentPagerIndex = $event.value;
  }
  onLeft() {
    this.currentPagerIndex = Math.max(0,this.currentPagerIndex - 1);
  }
  onRight() {
    this.currentPagerIndex = Math.min(this.currentPagerIndex + 1,this.maxPageIndex - 1);
  }
  getHeight(index: number) {
    if (index == 0) {
      return 1;
    }
    return (index * 20) + 1;
  }
}
