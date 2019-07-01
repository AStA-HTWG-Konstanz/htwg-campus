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
  ) { }


  ngOnInit() {
    if (!this.cacheService.isUserInCache()) {
      this.routerExtensions.navigateByUrl("login", { transition: { name: 'slideRight' } })
    }
    this.refreshDashBoard();
    this.refreshCache();
    this.updateCanteena()
    this.updatePrintTile()
    this.updateStrandBar()
    this.updateLectures();
    this.refreshTile()
  }
  ngOnChanges() {
    this.refreshDashBoard();
    this.refreshTile()
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
      this.refreshCache();
      this.cacheService.loadDashBoardInCache(this.components);
    }
  }
  async refreshCache() {
    console.log("refresh cache")
    if (!this.cacheService.isCanteenInCache() || !this.cacheService.cantennFromToday()) {
      this.canteenService.getMenu().then((canteen: Canteen) => {
        this.cacheService.loadCanteenInCache(canteen)
        console.log("loaded Canteen")
      }, (rejected: any) => {
        console.log("canteen error: " + JSON.stringify(rejected))
      })
    }
    if (!this.cacheService.isLecturesInCache() || !this.cacheService.lecturesFromToday()) {
      this.scheduleService.getTimeTable().then(
        (resolved: Schedule) => {
          this.cacheService.loadLecturesInCache(resolved)
          console.log("loaded Lectures")
        }, (rejected: any) => {
          console.log("lectures error: " + JSON.stringify(rejected))
        }
      );
    }
    if (!this.cacheService.isEventsInCache() || !this.cacheService.eventsFromToday()) {
      this.semesterEventService.getIsOpen().then(
        (resolved: SemesterEvents) => {
          this.cacheService.loadEventsInCache(resolved);
          console.log("loaded Events")
        }, (rejected: any) => {
          console.log("events error: " + JSON.stringify(rejected))
        }
      )
    }
    if (!this.cacheService.isEndlichtInCache() || !this.cacheService.endlichtFromToday()) {
      this.endlichtService.getEndlicht().then(
        (resolved: Endlicht) => {
          this.cacheService.loadEndlichtInCache(resolved);
          console.log("loaded Endlicht")
        }, (rejected: any) => {
          console.log("endlicht error: " + JSON.stringify(rejected))
        }
      )
    }
    if (this.cacheService.getUserFromCache().student && (!this.cacheService.isGradesInCache() || !this.cacheService.gradesFromToday())) {
      this.gradeService.getGrades().then(
        (resolved: Grades) => {
          this.cacheService.loadGradesInCache(resolved)
          console.log("loaded Grades")
        }, (rejected: any) => {
          console.log("grades error: " + JSON.stringify(rejected))
        }
      );
    }
    if (!this.cacheService.isPrintBalanceInCache() || !this.cacheService.printBalanceFromToday()) {
      this.balanceService.getBalance().then(
        (resolved: Balance) => {
          this.cacheService.loadPrintBalanceInCache(resolved)
          console.log("loaded print balance")
        }, (rejected: any) => {
          console.log("print balance error: " + JSON.stringify(rejected))
        }
      );
    }
    if (!this.cacheService.isStrandbarInCache() || !this.cacheService.strandbarFromCurrentHour()) {
      this.strandbarService.getIsOpen().then(
        (resolve: Strandbar) => {
          this.cacheService.loadStrandbarInCache(resolve)
          console.log("loaded strandbar")
        }, (rejected: any) => {
          console.log("strandbar error: " + JSON.stringify(rejected))
        }
      )
    }
    this.refreshTile();
  }

  async refreshTile() {
    console.log("refresh tiles")
    if (this.cacheService.isCanteenInCache()) {
      this.updateTileOpacity("dashboard.canteen", false)
    } else {
      this.updateTileOpacity("dashboard.canteen", true)
    }

    if (this.cacheService.isLecturesInCache()) {
      this.updateTileOpacity("dashboard.lectures", false)
    } else {
      this.updateTileOpacity("dashboard.lectures", true)
    }

    if (this.cacheService.isEventsInCache()) {
      this.updateTileOpacity("dashboard.events", false)
    } else {
      this.updateTileOpacity("dashboard.events", true)
    }

    if (this.cacheService.isEndlichtInCache()) {
      this.updateTileOpacity("dashboard.endlicht", false)
    } else {
      this.updateTileOpacity("dashboard.endlicht", true)
    }

    if (this.cacheService.getUserFromCache().student && this.cacheService.isGradesInCache()) {
      this.updateTileOpacity("dashboard.grades", false)
    } else {
      this.updateTileOpacity("dashboard.grades", true)
    }

    if (this.cacheService.isPrintBalanceInCache()) {
      this.updateTileOpacity("dashboard.balance", false)
    } else {
      this.updateTileOpacity("dashboard.balance", true)
    }

    if (this.cacheService.isStrandbarInCache()) {
      this.updateTileOpacity("dashboard.strandbar", false)
    } {
      this.updateTileOpacity("dashboard.strandbar", true)
    }
    this.cacheService.loadDashBoardInCache(this.components);
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
    this.cacheService.loadDashBoardInCache(this.components)
    //console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
  }

  async updatePrintTile() {
    console.log("refresh print balance")
    if (this.cacheService.isPrintBalanceInCache()) {
      let balance: Balance = this.cacheService.getPrintBalanceFromCache()
      let balanceIndex = this.components.tiles.findIndex(x => x.navigate == "balance")
      if (balanceIndex !== -1) {
        let foundPrint = this.components.tiles[balanceIndex]
        foundPrint.desc = balance.print + "€"
        this.components.tiles[balanceIndex] = foundPrint
      }
    }
  }
  async updateStrandBar() {
    console.log("refresh stranbar")
    if (this.cacheService.isStrandbarInCache()) {
      let strandbar: Strandbar = this.cacheService.getStrandbarFromCache()
      let strandBarIndex = this.components.tiles.findIndex(x => x.navigate == "strandbar")
      if (strandBarIndex !== -1) {
        let foundStrandbar = this.components.tiles[strandBarIndex]
        let showTileDesc = strandbar.isOpen ? "strandbar.open" : "strandbar.close"
        foundStrandbar.desc = showTileDesc
        this.components.tiles[strandBarIndex] = foundStrandbar
      }
    }
  }
  async updateCanteena() {
    console.log("refresh canteena")
    let canteenIndex = this.components.tiles.findIndex(x => x.navigate == "canteen")
    let foundCanteena = this.components.tiles[canteenIndex]
    if (this.cacheService.isCanteenInCache()) {
      let canteen: Canteen = this.cacheService.getCanteenFromCache()
      foundCanteena.desc = canteen.menu[0].meals[0].title.split("|")[0].split("(")[0]
      foundCanteena.secDesc = canteen.menu[0].meals[0].ctgry + " | " + canteen.menu[0].meals[0].priceStud + "€"
    } else {
      foundCanteena.desc = "canteen.preview"
      foundCanteena.secDesc = "";
    }
    foundCanteena.hasSecDesc = true;
    this.components.tiles[canteenIndex] = foundCanteena
  }
  async updateLectures() {
    console.log("refresh lectures")

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
            compareTime.setHours(Number(htime[0]) - Number(htime[1]), 0, 0)
            return compareTime.getTime() - currentDate.getTime() > 0
          }).map(eachLecture => {
            eachLecture.name = eachLecture.name.split(" ").splice(2).join(" ")
            eachLecture.startTime = this.dateFormatService.getDayOfWeekAsString(new Date(this.reformDate(lecturesPerday.date))) + " " + eachLecture.startTime.split(":").slice(0, 2).join(":")
            return eachLecture
          })
          return filteredLectures
        }).filter(x => x.length > 0).reduce(x => x)
      let headLecture = nextLecture[0]
      foundLectures.desc = headLecture.name
      foundLectures.secDesc = headLecture.room + " | " + headLecture.startTime
    } else {
      foundLectures.desc = "no lecture found";
      foundLectures.secDesc = "";
    }
    foundLectures.hasSecDesc = true;
    this.components.tiles[lecturesIndex] = foundLectures
  }
  async updateTileOpacity(name: string, deactivate: boolean) {
    let searchIndex = this.components.tiles.findIndex(x => x.name.startsWith(name))
    if (searchIndex < 0) return
    let foundTile: MainTile = this.components.tiles[searchIndex]
    if (!foundTile) return
    if (deactivate) {
      foundTile.deactivate = true
    } else {
      foundTile.deactivate = false
    }
    this.components.tiles[searchIndex] = foundTile
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
