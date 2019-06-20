import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';
import { EndlichtContent } from '~/app/model/endlicht/endlichtContent';
@Component({
  selector: 'ns-endlicht',
  templateUrl: './endlicht.component.html',
  styleUrls: ['./endlicht.component.css']
})
export class EndlichtComponent implements OnInit {
  @ViewChild("actionButton", { static: false })
  _buttonRef: ActionButtonComponent;


  endlicht: EndlichtContent
  constructor(
    private routerExtensions: RouterExtensions,
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    this.endlicht = this.cacheService.getEndlichtFromCache().endlicht
  }

  reformTabTitel(date: string) {
    let dateList = date.split('-')
    let day = dateList[2].length == 1 ? "0" + dateList[2] : dateList[2];
    let month = dateList[1].length == 1 ? "0" + dateList[1] : dateList[1];
    return day + "." + month
  }

  getEndlicht() {
    return this.endlicht
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }

}