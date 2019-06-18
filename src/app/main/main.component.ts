import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { isIOS } from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color/color';
import { User } from '~/app/model/user/user.model';
import { LoginService } from '../service/login/login.service';
import { CacheService } from '../service/cache/cache.service';
import { CanteenService } from '../service/canteen/canteen.service';
import { Canteen } from '../model/canteen/canteen';
import * as appSettings from "tns-core-modules/application-settings";
import { HtwgscheduleService } from '../service/schedule/htwgschedule.service';
import { Schedule } from '../model/schedule/Schedule';
import { SemestereventService } from '../service/semesterevents/semesterevent.service';
import { SemesterEvents } from '../model/events/semesterevents';

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {
  constructor(
    private routerExtensions: RouterExtensions,
    private loginService: LoginService,
    private cacheService: CacheService,
    private canteenService: CanteenService,
    private scheduleService: HtwgscheduleService,
    private semesterEventService: SemestereventService
    ) {
  }

  components: { name: string, desc: string, navigate: string, imageSrc: string }[] = [
    { name: "Lectures", desc: "TODO: Add short description here!", navigate: "schedule", imageSrc: "~/images/schedule.png" },
    { name: "Grades", desc: "TODO: Add short description here!", navigate: "grades", imageSrc: "~/images/student_hat.png" },
    { name: "Canteen", desc: "TODO: Add short description here!", navigate: "canteen", imageSrc: "~/images/coffee.png" },
    { name: "Strandbar", desc: "TODO: Add short description here!", navigate: "strandbar", imageSrc: "~/images/wine.png" },
    { name: "Endlicht", desc: "TODO: Add short description here!", navigate: "endlicht", imageSrc: "~/images/endlicht_white.png" },
    { name: "Events", desc: "TODO: Add short description here!", navigate: "events", imageSrc: "~/images/events.png" },
    { name: "Balance", desc: "TODO: Add short description here!", navigate: "balance", imageSrc: "~/images/balance.png" },
  ]

  // TODO workaround with login session
  ngOnInit() {
    if (!this.cacheService.isUserInCache()) {
      this.routerExtensions.navigateByUrl("login", { transition: { name: 'slideRight' } })
    }
    if(!this.cacheService.isCanteenInCache() || !this.cacheService.cantennFromToday()) {
      this.canteenService.getMenu().then((resolved: Canteen) => {
          this.cacheService.loadCanteenInCache(resolved)
          console.log("loaded Canteen")
        }, (rejected: any) => {
          alert(rejected.toString())
        })
    }

    if(!this.cacheService.isLecturesInCache() || !this.cacheService.lecturesFromToday()) {
      this.scheduleService.getTimeTable().then(
        (resolved: Schedule) => {
            this.cacheService.loadLecturesInCache(resolved)
            console.log("loaded Lectures")
        },
        (rejected: any) => {
            alert(JSON.stringify(rejected));
        }
      );
    }

    if(!this.cacheService.isEventsInCache() || !this.cacheService.eventsFromToday()) {
      this.semesterEventService.getIsOpen().then(
        (resolved: SemesterEvents) => {
          this.cacheService.loadEventsInCache(resolved);
          console.log("loaded Events")
        },
        (rejected: any) => {
          console.log(JSON.stringify(rejected))
        }
      )
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  reload(): void {
  }

  onItemLoading(args) {
  }

  public onNavigationItemTap(args: any) {
    this.routerExtensions.navigateByUrl(this.components[args.index].navigate, { transition: { name: 'slideLeft' } })
  }

}
