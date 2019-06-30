import { Component, OnInit, ViewChild } from '@angular/core';
import { Schedule } from '~/app/model/schedule/Schedule';
import { LecturesPerDay } from '~/app/model/schedule/lectures/LecturesPerDay';
import { HtwgscheduleService } from '~/app/service/schedule/htwgschedule.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';
declare var UIView, NSMutableArray, NSIndexPath;
import { ActionButtonComponent } from '~/app/action-button/action-button.component';
import { CacheService } from '~/app/service/cache/cache.service';
import { Lecture } from '~/app/model/schedule/lectures/lecture/Lecture';
import { DateFromatService } from '~/app/service/dateFormat/date-fromat.service';

@Component({
    selector: 'ns-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css'],
    moduleId: module.id,
})
export class ScheduleComponent implements OnInit {
    @ViewChild("actionButton", { static: false })
    _buttonRef: ActionButtonComponent;

    lectures: Array<LecturesPerDay> = new Array();
    clickedList: Array<number> = new Array();
    selectedIndex: number = 0;
    constructor(
        private scheduleService: HtwgscheduleService,
        private routerExtensions: RouterExtensions,
        private cacheService: CacheService,
        private dateFormatService: DateFromatService
    ) {
    }

    ngOnInit() {
        if (this.cacheService.isLecturesInCache()) {
            this.lectures = this.cacheService.getLecturesFromCache().lectures;
        } else {
            alert("Lectures current not available")
        }
    }

    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    }


    templateSelector(item: any, index: number, items: any): string {
        return item.selected ? "expanded" : "default";
    }
    onItemTap(event: ListViewEventData) {
        const listView = event.object
        const rowIndex = event.index
        const dataItem = event.view.bindingContext;

        dataItem.selected = !dataItem.selected;
        if (isIOS) {
            UIView.animateWithDurationAnimations(0.10, () => {
                var indexPaths = NSMutableArray.new();
                indexPaths.addObject(NSIndexPath.indexPathForRowInSection(rowIndex, event.groupIndex));
                listView.ios.reloadItemsAtIndexPaths(indexPaths);
            });
        }
        if (isAndroid) {
            listView.androidListView.getAdapter().notifyItemChanged(rowIndex);
        }
    }
    calcHeight(item) {
        return 100 * (item.lectures.length) + 40
    }
    trimTime(text: string) {
        return text.split(":").slice(0, 2).join(":")
    }
    formatDay(showDay: string) {
        let tmp = showDay.split("-")
        let day = tmp[2].length == 1 ? "0" + tmp[2] : tmp[2]
        let month = tmp[1].length == 1 ? "0" + tmp[1] : tmp[1]
        let year = tmp[0]
        let currDate = new Date(year + "-" + month + "-" + day)
        return this.dateFormatService.getFullDayOfWeekAsString(currDate)
    }
}
