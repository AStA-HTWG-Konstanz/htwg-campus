import { Component, OnInit, OnChanges } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { LoginService } from '../service/login/login.service';
import { CacheService } from '../service/cache/cache.service';
import { CanteenService } from '../service/canteen/canteen.service';
import { Canteen } from '../model/canteen/canteen';
import { HtwgscheduleService } from '../service/schedule/htwgschedule.service';
import { Schedule } from '../model/schedule/Schedule';
import { SemestereventService } from '../service/semesterevents/semesterevent.service';
import { SemesterEvents } from '../model/events/semesterevents';
import { GradesService } from '../service/grades/grades.service';
import { Grades } from '../model/grades/grades';
import { EndlichtService } from '../service/endlicht/endlicht.service';
import { Endlicht } from '../model/endlicht/endlicht';
import { ListViewEventData, RadListView } from 'nativescript-ui-listview';
import { PrintBalanceService } from '../service/balance/print-balance.service';
import { Balance } from '../model/balance/balance';
import { MainTile } from '../model/dashboard/mainTile/mainTile';
import { Dashboard } from '../model/dashboard/Dashboard';
import { StrandbarService } from '../service/strandbar/strandbar.service';
import { Strandbar } from '../model/strandbar/strandbar';
import { isIOS, isAndroid, Color, Page } from 'tns-core-modules/ui/page/page';
import { Lecture } from '../model/schedule/lectures/lecture/Lecture';
import { TranslateService } from '@ngx-translate/core';
import { DateFromatService } from '../service/dateFormat/date-fromat.service';
import { GradesRefreshService } from '../service/grades/grades-refresh.service';
declare var CGSizeMake
@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit, OnChanges {

  components: Dashboard = null;

  constructor(
    private routerExtensions: RouterExtensions,
    private cacheService: CacheService,
    private canteenService: CanteenService,
    private scheduleService: HtwgscheduleService,
    private semesterEventService: SemestereventService,
    private gradeService: GradesService,
    private endlichtService: EndlichtService,
    private balanceService: PrintBalanceService,
    private strandbarService: StrandbarService,
    private dateFormatService: DateFromatService,
    private translate: TranslateService,
    private gradeRefreshService: GradesRefreshService
  ) { }


  ngOnInit() {
    if (!this.cacheService.isUserInCache()) {
      this.routerExtensions.navigateByUrl("login", { transition: { name: 'slideRight' } })
    }
    if (this.cacheService.isLanguageInCache()) {
      this.translate.use(this.cacheService.getLanguageFromCache())
    } else {
      this.cacheService.loadLanguageInCache("de");
      this.translate.use("de")
    }
    this.refreshDashBoard();
    this.refreshCache();
  }
  ngOnChanges() {
    this.refreshDashBoard();
    this.refreshCache();
  }
  async refreshDashBoard() {
    if (this.cacheService.isDashBoardInCache()) {
      this.components = this.cacheService.getDashBoardFromCache();
    } else {
      if (this.cacheService.getUserFromCache().student) {
        this.components = new Dashboard([
          new MainTile("dashboard.lectures", "", "schedule", "~/images/schedule.png", false),
          new MainTile("dashboard.grades", "", "grades", "~/images/student_hat.png", false),
          new MainTile("dashboard.canteen", "", "canteen", "~/images/coffee.png", false),
          new MainTile("dashboard.strandbar", "", "strandbar", "~/images/wine.png", true),
          new MainTile("dashboard.endlicht", "", "endlicht", "~/images/endlicht_white.png", false),
          new MainTile("dashboard.events", "", "events", "~/images/schedule.png", false),
          new MainTile("dashboard.balance", "", "balance", "~/images/balance.png", true)
        ]);
      } else {
        this.components = new Dashboard([
          new MainTile("dashboard.lectures", "", "schedule", "~/images/schedule.png", false),
          new MainTile("dashboard.canteen", "", "canteen", "~/images/coffee.png", false),
          new MainTile("dashboard.strandbar", "", "strandbar", "~/images/wine.png", true),
          new MainTile("dashboard.endlicht", "", "endlicht", "~/images/endlicht_white.png", false),
          new MainTile("dashboard.events", "", "events", "~/images/schedule.png", false),
          new MainTile("dashboard.balance", "", "balance", "~/images/balance.png", true)
        ]);
      }
      this.cacheService.loadDashBoardInCache(this.components);
    }
  }
  async refreshCache() {
    if (!this.cacheService.isCanteenInCache() || !this.cacheService.cantennFromToday()) {
      this.canteenService.getMenu().then((resolved: Canteen) => {
        this.cacheService.loadCanteenInCache(resolved)
      }, (rejected: any) => {
      })
    }
    if (!this.cacheService.isLecturesInCache() || !this.cacheService.lecturesFromToday()) {
      this.scheduleService.getTimeTable().then(
        (resolved: Schedule) => {
          this.cacheService.loadLecturesInCache(resolved)
        }, (rejected: any) => {
        }
      );
    }
    if (!this.cacheService.isEventsInCache() || !this.cacheService.eventsFromToday()) {
      this.semesterEventService.getIsOpen().then(
        (resolved: SemesterEvents) => {
          this.cacheService.loadEventsInCache(resolved);
        }, (rejected: any) => {
        }
      )
    }
    if (!this.cacheService.isEndlichtInCache() || !this.cacheService.endlichtFromToday()) {
      this.endlichtService.getEndlicht().then(
        (resolved: Endlicht) => {
          this.cacheService.loadEndlichtInCache(resolved);

        }, (rejected: any) => {

        }
      )
    }
    if (!this.cacheService.isPrintBalanceInCache() || !this.cacheService.printBalanceFromToday()) {
      this.balanceService.getBalance().then(
        (resolved: Balance) => {
          this.cacheService.loadPrintBalanceInCache(resolved)

        }, (rejected: any) => {

        }
      );
    }
    if (!this.cacheService.isStrandbarInCache() || !this.cacheService.strandbarFromCurrentHour()) {
      this.strandbarService.getIsOpen().then(
        (resolve: Strandbar) => {
          this.cacheService.loadStrandbarInCache(resolve)

        }, (rejected: any) => {

        }
      )
    }
    this.updateCanteena()
    this.updatePrintTile()
    this.updateStrandBar()
    this.updateLectures();
    this.refreshGrades();
  }

  onPullToRefreshInitiated(args: any) {
    this.refreshCache();
    setTimeout(function () {
      const listView = args.object;
      listView.notifyPullToRefreshFinished();
    }, 3000);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  async onItemLoading(args: ListViewEventData) {
    const listView = args.object
    if (isIOS) {
      listView.ios.layer.shadowOpacity = 1.0;
      listView.ios.layer.shadowRadius = 3.0;
      listView.ios.layer.shadowColor = new Color('rgba(128, 128, 128,0.7)').ios.CGColor;
      listView.ios.layer.shadowOffset = CGSizeMake(2.0, 5.0);
    }
    if (isAndroid) {
      args.view.androidElevation = 10;
      args.view.borderWidth = "0.7";
    }
  }
  public onItemReordered(args: ListViewEventData) {
    this.refreshCache();
  }

  async updatePrintTile() {

    let balanceIndex = this.components.tiles.findIndex(x => x.navigate == "balance")
    let foundPrint = this.components.tiles[balanceIndex]
    if (this.cacheService.isPrintBalanceInCache()) {
      let balance: Balance = this.cacheService.getPrintBalanceFromCache()
      foundPrint.desc = balance.print + "€"
    } else {
      foundPrint.desc = "";
    }
    this.components.tiles[balanceIndex] = foundPrint
  }
  async updateStrandBar() {

    let strandBarIndex = this.components.tiles.findIndex(x => x.navigate == "strandbar")
    let foundStrandbar = this.components.tiles[strandBarIndex]
    if (this.cacheService.isStrandbarInCache()) {
      let strandbar: Strandbar = this.cacheService.getStrandbarFromCache()
      let showTileDesc = strandbar.open ? "strandbar.open" : "strandbar.close"
      foundStrandbar.desc = showTileDesc
    } else {
      foundStrandbar.desc = ""
    }
    this.components.tiles[strandBarIndex] = foundStrandbar
  }
  async updateCanteena() {
    let canteenIndex = this.components.tiles.findIndex(x => x.navigate == "canteen")
    let foundCanteena = this.components.tiles[canteenIndex]
    if (this.cacheService.isCanteenInCache()) {
      let canteen: Canteen = this.cacheService.getCanteenFromCache()
      let currentDate: Date = new Date()
      currentDate.setHours(0, 0, 0, 0)
      let currentMenus = canteen.menu.filter(menu => {
        let menuDate = new Date(this.reformDate(menu.date))
        menuDate.setHours(0, 0, 0, 0)
        return currentDate.getTime() == menuDate.getTime()
      })
      if (currentMenus.length == 0) {
        foundCanteena.desc = "dashboard.preview"
        foundCanteena.secDesc = "";
        if (currentDate.getDay() == 0 || currentDate.getDay() == 6) {
          foundCanteena.desc = "canteen.weekend"
          foundCanteena.secDesc = "";
        }
      } else {
        foundCanteena.desc = currentMenus[0].meals[0].title.split("|")[0].split("(")[0]
        foundCanteena.secDesc = currentMenus[0].meals[0].ctgry
        if (!(foundCanteena.desc.startsWith("geschlossen") || foundCanteena.desc.startsWith("closed"))) {
          foundCanteena.secDesc += " | " + currentMenus[0].meals[0].priceStud + "€"
        }
      }
    } else {
      foundCanteena.desc = "dashboard.preview"
      foundCanteena.secDesc = "";
    }
    foundCanteena.hasSecDesc = true;
    this.components.tiles[canteenIndex] = foundCanteena
  }

  async getGrades() {
    console.log("get grades")
    if (this.cacheService.getUserFromCache().student && (!this.cacheService.isGradesInCache() || !this.cacheService.gradesFromToday())) {
      if (this.cacheService.isGradesRefreshInCache()) {
        this.gradeService.getGrades().then(
          (resolved: Grades) => {
            this.cacheService.loadGradesInCache(resolved)
          }, (rejected: number) => {
            this.gradeRefreshService.resetToken()
            this.refreshGrades();
            this.gradeService.getGrades().then(
              (resolved: Grades) => {
                this.cacheService.loadGradesInCache(resolved)
              })
          }
        );
      }
    }
  }

  async refreshGrades() {
    console.log("refresh grades")
    if (!this.cacheService.getUserFromCache().student) return;
    if (!this.cacheService.isGradesRefreshInCache() || !this.cacheService.gradesRefreshLastHour()) {
      this.gradeRefreshService.getGrades().then(
        (resolved: boolean) => {
          this.cacheService.loadGradesRefreshInCache()
          if ((!this.cacheService.isGradesInCache() || !this.cacheService.gradesFromToday())) {
            this.getGrades();
          }
        }, (rejected: any) => {
        }
      )
    }
  }

  async updateLectures() {
    let lecturesIndex = this.components.tiles.findIndex(x => x.name == "dashboard.lectures")
    let foundLectures = this.components.tiles[lecturesIndex]
    if (this.cacheService.isLecturesInCache()) {
      let lectures: Schedule = this.cacheService.getLecturesFromCache()
      let currentDate: Date = new Date()
      let nextLecture = lectures.lectures
        .map(lecturesPerday => {
          let filteredLectures = lecturesPerday.lectures.filter(eachLecture => {
            let htime = eachLecture.startTime.split(":")
            let compareTime = new Date(this.reformDate(lecturesPerday.date))
            compareTime.setHours(Number(htime[0]), Number(htime[1]), 0, 0)
            return currentDate.getTime() <= compareTime.getTime()
          }).map(eachLecture => {
            eachLecture.name = eachLecture.name.split(" ").splice(2).join(" ")
            eachLecture.startTime = this.dateFormatService.getDayOfWeekAsString(new Date(this.reformDate(lecturesPerday.date))) + " " + eachLecture.startTime.split(":").slice(0, 2).join(":")
            return eachLecture
          })
          return filteredLectures
        }).filter(x => x.length > 0)
      if (nextLecture.length == 0) {
        foundLectures.desc = "LSF.noneLectures";
        foundLectures.secDesc = "";
        if (currentDate.getDay() == 0 || currentDate.getDay() == 6) {
          foundLectures.desc = "canteen.weekend"
          foundLectures.secDesc = "";
        }
      } else {
        foundLectures.desc = nextLecture.length > 0 ? nextLecture[0][0].name : "dashboard.preview";
        foundLectures.secDesc = nextLecture.length > 0 ? nextLecture[0][0].room + " | " + nextLecture[0][0].startTime : "";
      }
    } else {
      foundLectures.desc = "dashboard.preview";
      foundLectures.secDesc = "";
    }
    foundLectures.hasSecDesc = true;
    this.components.tiles[lecturesIndex] = foundLectures
  }

  public showTileBackgroundColor(item: MainTile) {
    return item.inactive ? '#eee' : '#334152';
  }

  public onNavigationItemTap(args: ListViewEventData) {
    this.cacheService.loadDashBoardInCache(this.components);
    let item = this.components.tiles[args.index]
    if (item.deactivate || item.inactive) return
    this.routerExtensions.navigateByUrl(item.navigate, { transition: { name: 'slideLeft' } })
  }

  private reformDate(dateAsString: string): string {
    let tmp = dateAsString.split("-")
    let year = tmp[0]
    let month = tmp[1].length == 1 ? "0" + tmp[1] : tmp[1]
    let day = tmp[2].length == 1 ? "0" + tmp[2] : tmp[2]
    return year + "-" + month + "-" + day
  }
}
