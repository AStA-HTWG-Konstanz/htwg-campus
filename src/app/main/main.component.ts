import { Component, OnInit } from '@angular/core';
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
declare var CGSizeMake
@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {

  components: Dashboard = null;
  menu: string;
  price: string;

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
    private page: Page
  ) {
  }

  ngOnInit() {
    // this.page.on('navigatingTo', (data) => {
    //   if (data.isBackNavigation) {
    //     this.ngOnInit()
    //   }
    // });
    if (!this.cacheService.isUserInCache()) {
      this.routerExtensions.navigateByUrl("login", { transition: { name: 'slideRight' } })
    }
    if (this.cacheService.isDashBoardInCache()) {
      this.components = this.cacheService.getDashBoardFromCache();
    } else {
      this.components = new Dashboard([
        new MainTile("dashboard.lectures", "", "schedule", "~/images/schedule.png", false),
        new MainTile("dashboard.grades", "", "grades", "~/images/student_hat.png", false),
        new MainTile("dashboard.canteen", "", "canteen", "~/images/coffee.png", false),
        new MainTile("dashboard.strandbar", "", "strandbar", "~/images/wine.png", true),
        new MainTile("dashboard.endlicht", "", "endlicht", "~/images/endlicht_white.png", false),
        new MainTile("dashboard.events", "", "events", "~/images/events.png", false),
        new MainTile("dashboard.balance", "", "balance", "~/images/balance.png", true)
      ]);
      this.cacheService.loadDashBoardInCache(this.components);
    }

    if (!this.cacheService.isCanteenInCache() || !this.cacheService.cantennFromToday()) {
      this.canteenService.getMenu().then((canteen: Canteen) => {
        this.cacheService.loadCanteenInCache(canteen)
        this.menu = canteen.menu[0].meals[0].title.split("|")[0]
        this.price = canteen.menu[0].meals[0].priceStud + "€"
        console.log("loaded Canteen")
      }, (rejected: any) => {
        console.log("canteen error: " + JSON.stringify(rejected))
        this.updateTileOpacity("dashboard.canteen", true)
      }
      )
    } else {
      var canteen: Canteen = this.cacheService.getCanteenFromCache()
      if (!canteen || canteen.menu.length == 0) return
      console.log(JSON.stringify(canteen))
      this.menu = canteen.menu[0].meals[0].title.split("|")[0]
      this.price = canteen.menu[0].meals[0].priceStud + "€"
    }

    if (!this.cacheService.isLecturesInCache() || !this.cacheService.lecturesFromToday()) {
      this.scheduleService.getTimeTable().then(
        (resolved: Schedule) => {
          this.cacheService.loadLecturesInCache(resolved)
          this.updateTileOpacity("dashboard.lectures", false)
          console.log("loaded Lectures")
        }, (rejected: any) => {
          console.log("lectures error: " + JSON.stringify(rejected))
          this.updateTileOpacity("dashboard.lectures", true)
        }
      );
    }

    if (!this.cacheService.isEventsInCache() || !this.cacheService.eventsFromToday()) {
      this.semesterEventService.getIsOpen().then(
        (resolved: SemesterEvents) => {
          this.cacheService.loadEventsInCache(resolved);
          this.updateTileOpacity("dashboard.events", false)
          console.log("loaded Events")
        }, (rejected: any) => {
          console.log("events error: " + JSON.stringify(rejected))
          this.updateTileOpacity("dashboard.events", true)
        }
      )
    }

    if (!this.cacheService.isEndlichtInCache() || !this.cacheService.endlichtFromToday()) {
      this.endlichtService.getEndlicht().then(
        (resolved: Endlicht) => {
          this.cacheService.loadEndlichtInCache(resolved);
          this.updateTileOpacity("dashboard.endlicht", false)
          console.log("loaded Endlicht")
        }, (rejected: any) => {
          console.log("endlicht error: " + JSON.stringify(rejected))
          this.updateTileOpacity("dashboard.endlicht", true)
        }
      )
    }

    if (!this.cacheService.isGradesInCache() || !this.cacheService.gradesFromToday()) {
      this.gradeService.getGrades().then(
        (resolved: Grades) => {
          this.cacheService.loadGradesInCache(resolved)
          this.updateTileOpacity("dashboard.grades", false)
          console.log("loaded Grades")
        }, (rejected: any) => {
          console.log("grades error: " + JSON.stringify(rejected))
          this.updateTileOpacity("dashboard.grades", true)
        }
      );
    }
    if (!this.cacheService.isPrintBalanceInCache() || !this.cacheService.printBalanceFromToday()) {
      this.balanceService.getBalance().then(
        (resolved: Balance) => {
          this.cacheService.loadPrintBalanceInCache(resolved)
          this.updatePrintTile()
          this.updateTileOpacity("dashboard.balance", false)
          this.cacheService.loadDashBoardInCache(this.components)
          console.log("loaded print balance")
        }, (rejected: any) => {
          console.log("print balance error: " + JSON.stringify(rejected))
          this.updateTileOpacity("dashboard.balance", true)
        }
      );
    }
    if (!this.cacheService.isStrandbarInCache() || !this.cacheService.strandbarFromCurrentHour()) {
      this.strandbarService.getIsOpen().then(
        (resolve: Strandbar) => {
          this.cacheService.loadStrandbarInCache(resolve)
          this.updateStrandBar()
          this.updateTileOpacity("dashboard.strandbar", false)
          this.cacheService.loadDashBoardInCache(this.components)
          console.log("loaded strandbar")
        }, (rejected: any) => {
          console.log("strandbar error: " + JSON.stringify(rejected))
          this.updateTileOpacity("dashboard.strandbar", true)
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

  onItemLoading(args: ListViewEventData) {
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
    this.cacheService.loadDashBoardInCache(this.components)
    //console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
  }

  async updatePrintTile(rounds = 2) {
    if (this.cacheService.isPrintBalanceInCache()) {
      let balance: Balance = this.cacheService.getPrintBalanceFromCache()
      let balanceIndex = this.components.tiles.findIndex(x => x.navigate == "balance")
      console.log("rounds printer")
      if (balanceIndex == -1 && rounds > 0) {
        await new Promise(resolve => setTimeout(resolve, 200));
        this.updatePrintTile(rounds - 1)
      } else {
        let tmp = this.components.tiles[balanceIndex]
        if (!tmp) return
        tmp.setDesc(balance.print + "€")
        this.components.tiles[balanceIndex] = tmp
      }
    }
  }
  async updateStrandBar(rounds = 2) {
    if (this.cacheService.isStrandbarInCache()) {
      let strandbar: Strandbar = this.cacheService.getStrandbarFromCache()
      let strandBarIndex = this.components.tiles.findIndex(x => x.navigate == "strandbar")
      console.log("rounds strandbar")
      if (strandBarIndex == -1 && rounds > 0) {
        await new Promise(resolve => setTimeout(resolve, 200));
        this.updateStrandBar(rounds - 1)
      } else {
        let tmp = this.components.tiles[strandBarIndex]
        if (!tmp) return
        let showTileDesc = strandbar.isOpen ? "strandbar.open" : "strandbar.close"
        tmp.setDesc(showTileDesc)
        this.components.tiles[strandBarIndex] = tmp
      }
    }
  }
  private updateTileOpacity(name: string, deactivate: boolean) {
    let searchIndex = this.components.tiles.findIndex(x => x.name.startsWith(name))
    if (searchIndex < 0) return
    let tmp = this.components.tiles[searchIndex]
    if (deactivate) {
      tmp.setDeactivate()
    } else {
      tmp.unsetDeactivate()
    }
    this.components.tiles[searchIndex] = tmp
  }
  public showTileBackgroundColor(item: MainTile) {
    return item.inactive ? '#eee' : '#334152';
  }
  public showTileDeactivate(item: MainTile) {
    return item.deactivate ? '.5' : '1.0'
  }

  public onNavigationItemTap(args: ListViewEventData) {
    let item = this.components.tiles[args.index]
    if (item.deactivate || item.inactive) return
    this.routerExtensions.navigateByUrl(item.navigate, { transition: { name: 'slideLeft' } })
  }


}
