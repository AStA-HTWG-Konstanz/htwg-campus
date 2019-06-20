import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TabView, SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import * as appSettings from "tns-core-modules/application-settings";
import { SemesterGrades } from '~/app/model/grades/semester-grades';
import { RouterExtensions } from 'nativescript-angular/router';
import { GradesService } from '~/app/service/grades/grades.service';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
@Component({
  selector: 'ns-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  moduleId: module.id,
})
export class GradesComponent implements OnInit {

  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;

  currentGrades: Array<SemesterGrades>;

  constructor(
    private routerExtensions: RouterExtensions,
    private gradeService: GradesService) {
    this.getGrades();
  }

  ngOnInit() {
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }

  getGrades() {
    if (appSettings.getBoolean("isLoggedIn") && appSettings.hasKey("account")) {
      this.gradeService.getGrades().then(
        (resolved: any) => {
          this.currentGrades = [];
          this.currentGrades = (resolved) ? resolved : null;
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
  changeIdentifier(name: string) {
    if (name.startsWith("Wintersemester")) {
      return name.replace("Wintersemester", "WS")
    } else {
      return name.replace("Sommersemester", "SS")
    }
  }
}
