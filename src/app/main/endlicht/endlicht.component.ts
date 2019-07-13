import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';
import { EndlichtContent } from '~/app/model/endlicht/endlichtContent';
import { DateFromatService } from '~/app/service/dateFormat/date-fromat.service';
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
    private cacheService: CacheService,
    private dateFormatService: DateFromatService
  ) { }

  ngOnInit() {
    if (this.cacheService.isEndlichtInCache()) {
      this.endlicht = this.cacheService.getEndlichtFromCache().endlicht
    } else {
      alert("Lectures current not available")
    }
  }

  reformTabTitel(date: string) {
    let currDate = new Date(this.reformDate(date))
    return this.dateFormatService.getFullDayOfWeekAsString(currDate)
  }
  private reformDate(dateAsString: string): string {
    let tmp = dateAsString.split("-")
    let year = tmp[2]
    let month = tmp[1].length == 1 ? "0" + tmp[1] : tmp[1]
    let day = tmp[0].length == 1 ? "0" + tmp[0] : tmp[0]
    return year + "-" + month + "-" + day
  }

  getEndlicht() {
    return this.endlicht
  }

  navigateBack() {
    this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
  }

}
