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

  /**
   * fill numbers under 10 with leading zeros. 
   * Fix IOS Date format
   * @param dateAsString 
   */
  public reformDate(dateAsString: string): string {
    let tmp = dateAsString.split("-")
    let year = tmp[0]
    let month = tmp[1].length == 1 ? "0" + tmp[1] : tmp[1]
    let day = tmp[2].length == 1 ? "0" + tmp[2] : tmp[2]
    return year + "-" + month + "-" + day
  }
}
