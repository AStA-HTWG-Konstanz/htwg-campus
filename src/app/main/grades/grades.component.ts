import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SemesterGrades } from '~/app/model/grades/semester-grades';
import { RouterExtensions } from 'nativescript-angular/router';
import { GradesService } from '~/app/service/grades/grades.service';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';
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
    private gradeService: GradesService,
    private cacheService: CacheService) {
  }

  ngOnInit() {
    if (this.cacheService.isGradesInCache()) {
      this.currentGrades = this.cacheService.getGradesFromCache().grades
    } else {
      alert("Lectures current not available")
    }
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }

  changeIdentifier(name: string) {
    if (name.startsWith("Wintersemester")) {
      return name.replace("Wintersemester", "WS")
    } else {
      return name.replace("Sommersemester", "SS")
    }
  }
}
