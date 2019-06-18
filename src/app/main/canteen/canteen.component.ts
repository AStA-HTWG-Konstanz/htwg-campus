import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '~/app/model/canteen/menu/menu';
import { RouterExtensions } from 'nativescript-angular/router';
import { CanteenService } from '~/app/service/canteen/canteen.service';
import { ActivatedRoute } from '@angular/router';
import { Canteen } from '~/app/model/canteen/canteen';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';

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
    private cacheService: CacheService
  ) { }

  reformTabTitel(date: string) {
    let dateList = date.split('-')
    let day = dateList[2].length == 1 ? "0" + dateList[2] : dateList[2];
    let month = dateList[1].length == 1 ? "0" + dateList[1] : dateList[1];
    return day + "." + month
  }

  ngOnInit() {
    if(this.cacheService.isCanteenInCache())
      this.canteen = this.cacheService.getCanteenFromCache().menu
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }

  // trimItemsByDate() {
  //   let curDate = new Date();
  //   let currentDate: string = JSON.stringify(curDate); //+ "-" + JSON.stringify(curDate.getUTCMonth) + "-" + JSON.stringify(curDate.getUTCFullYear);
  //   console.log(JSON.stringify(currentDate))
  // }
}