import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ActionButtonComponent } from "../../action-button/action-button.component";
import { RouterExtensions } from "nativescript-angular/router";
import { CanteenService } from "~/app/services/canteen/canteen.service"
import { Canteen } from '~/app/model/canteen/canteen';
import { Menu } from '~/app/model/canteen/menu/menu';
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { ActivatedRoute } from '@angular/router';
import { environment } from '~/app/environment/environment';
import * as app from "tns-core-modules/application";

export class CanteenComponent implements OnInit, AfterViewInit {

  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;

  protected container = 'a';

  private currentSlideNum: number = 0;
  private slideCount = 3;
  menu: Menu;
  date: string;

  constructor(
    private routerExtensions: RouterExtensions,
    private canteenService: CanteenService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    //this.item = this.itemService.getItem(id);
    this.canteenService.getMenu().then((resolved: Canteen) => {
      this.menu = resolved.menu[id];
      this.date = new Date(this.menu.date).toLocaleDateString();
      this.currentSlideNum = id;
      this.slideCount = resolved.menu.length
    }, (rejected: any) => {
      alert(rejected.toString())
    })
  }

  get detailsPath(): string {
    return (this.container === 'a') ? '/item-b' : '/item-a'
  }

  getStyle(index: number) {
    if (index == this.currentSlideNum) {
      return "black";
    }
    return "#bbb";
  }

  ngAfterViewInit() {

  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true })
  }

  onSwipe(args: SwipeGestureEventData) {
    if (args.direction === 2) {
      if (this.currentSlideNum == this.slideCount - 1) {
        this.navigateRight(0)
      } else {
        this.navigateRight(this.currentSlideNum + 1);
      }
    } else if (args.direction === 1) {
      if (this.currentSlideNum === 0) {
        this.navigateLeft(this.slideCount - 1)
      } else {
        this.navigateLeft(this.currentSlideNum - 1)
      }
    }
  }

  navigateRight(id: number) {
    this.routerExtensions.navigate([this.detailsPath, id], {
      transition: {
        name: 'slideLeft',
        duration: 300
      }, clearHistory: true
    });
  }
  navigateLeft(id: number) {
    this.routerExtensions.navigate([this.detailsPath, id], {
      transition: {
        name: 'slideRight',
        duration: 300
      },
      clearHistory: true
    });
  }
}


@Component({
  selector: 'ns-details-a',
  moduleId: module.id,
  templateUrl: './canteen.component.html',
})
export class ItemDetailComponentA extends CanteenComponent {

  constructor(
    routerExtensions: RouterExtensions,
    canteenService: CanteenService,
    activatedRoute: ActivatedRoute
  ) {
    super(routerExtensions, canteenService, activatedRoute);
    this.container = 'a';
  }
}

@Component({
  selector: 'ns-details-b',
  moduleId: module.id,
  templateUrl: './canteen.component.html',
})
export class ItemDetailComponentB extends CanteenComponent {

  constructor(
    routerExtensions: RouterExtensions,
    canteenService: CanteenService,
    activatedRoute: ActivatedRoute
  ) {
    super(routerExtensions, canteenService, activatedRoute);
    this.container = 'b';
  }
}
