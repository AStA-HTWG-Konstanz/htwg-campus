import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DateFromatService {
  days = ["LSF.sunday", "LSF.monday", "LSF.tuesday", "LSF.wednesday", "LSF.thursday", "LSF.friday", "LSF.saturday"];

  constructor(private translate: TranslateService) { }

  public getDayOfWeekAsString(date: Date) {
    let getDayOfFound = "";
    this.translate.get(this.days[date.getDay()]).subscribe((res: string) => getDayOfFound = res);
    return getDayOfFound;
  }
  public getFullDayOfWeekAsString(date: Date) {
    let getDayOfFound = "";
    this.translate.get(this.days[date.getDay()] + "F").subscribe((res: string) => getDayOfFound = res);
    return getDayOfFound;
  }
}
