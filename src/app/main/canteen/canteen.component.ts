import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '~/app/model/canteen/menu/menu';
import { RouterExtensions } from 'nativescript-angular/router';
import { CanteenService } from '~/app/service/canteen/canteen.service';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';
import { DateFromatService } from '~/app/service/dateFormat/date-fromat.service';
import { Canteen } from '~/app/model/canteen/canteen';

@Component({
  selector: 'ns-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css'],
  moduleId: module.id,
})
export class CanteenComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;
  canteen: Array<Menu>;

  constructor(
    private routerExtensions: RouterExtensions,
    private canteenService: CanteenService,
    private cacheService: CacheService,
    private dateFormatService: DateFromatService
  ) { }

  reformTabTitel(date: string) {
    let dateList = date.split('-')
    let day = dateList[2].length == 1 ? "0" + dateList[2] : dateList[2];
    let month = dateList[1].length == 1 ? "0" + dateList[1] : dateList[1];
    let year = dateList[0]
    let currDay = new Date(year + "-" + month + "-" + day)
    return this.dateFormatService.getDayOfWeekAsString(currDay) + " " + day + "." + month
  }
  reformMenuContent(menu: string) {
    let items = menu.split("|")
    return items.map(x => x.trim());
  }

  calcHeight(item) {
    return 18 + this.reformMenuContent(item).length;
  }

  ngOnInit() {
    if (this.cacheService.isCanteenInCache()) {
      let currentDate: Date = new Date()
      currentDate.setHours(0, 0, 0, 0)
      this.canteen = this.cacheService.getCanteenFromCache().menu.filter(menu => {
        let menuDate = new Date(this.dateFormatService.reformDate(menu.date))
        menuDate.setHours(0, 0, 0, 0)
        return currentDate.getTime() <= menuDate.getTime()
      })
    } else {
      alert("Canteen current not available")
    }
  }

  isClosed(menu: string) {
    if (menu.startsWith("geschlossen") || menu.startsWith("closed")) {
      return true;
    }
    return false;
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }
}