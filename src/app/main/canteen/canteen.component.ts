import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '~/app/model/canteen/menu/menu';
import { RouterExtensions } from 'nativescript-angular/router';
import { CanteenService } from '~/app/service/canteen/canteen.service';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';
import { DateFromatService } from '~/app/service/dateFormat/date-fromat.service';

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
    let day = dateList[0].length == 1 ? "0" + dateList[0] : dateList[0];
    let month = dateList[1].length == 1 ? "0" + dateList[1] : dateList[1];
    let year = dateList[2]
    let currDay = new Date(year + "-" + month + "-" + day)
    return this.dateFormatService.getDayOfWeekAsString(currDay) + " " + day + "." + month
  }
  reformMenuContent(menu: string) {
    let items = menu.split("|")
    return items.map(x => x.trim());
  }

  calcHeight(item) {
    return 15 + this.reformMenuContent(item).length * 1;
  }

  ngOnInit() {
    if (this.cacheService.isCanteenInCache()) {
      this.canteen = this.cacheService.getCanteenFromCache().menu
    } else {
      alert("Canteen current not available")
    }
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }
}