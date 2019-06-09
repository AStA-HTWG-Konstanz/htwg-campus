import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Menu } from '~/app/model/canteen/menu/menu';
import { RouterExtensions } from 'nativescript-angular/router';
import { CanteenService } from '~/app/service/canteen/canteen.service';
import { ActivatedRoute } from '@angular/router';
import { Canteen } from '~/app/model/canteen/canteen';
import { SwipeGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';

@Component({
  selector: 'ns-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css'],
  moduleId: module.id,
})
export class CanteenComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
    _buttonRef: ActionButtonComponent;
  private canteen: Array<Menu>;

  constructor(
    private routerExtensions: RouterExtensions,
    private canteenService: CanteenService
  ) {
    this.canteenService.getMenu().then((resolved: Canteen) => {
      this.canteen = resolved.menu
    }, (rejected: any) => {
      alert(rejected.toString())
    })
  }

  reformTabTitel(date: string) {
    let dateList = date.split('-')
    let day = dateList[2].length == 1 ? "0" + dateList[2] : dateList[2];
    let month = dateList[1].length == 1 ? "0" + dateList[1] : dateList[1];
    return day + "." + month
  }

  ngOnInit() {  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }
}