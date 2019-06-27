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

@Component({
    selector: 'ns-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css'],
    moduleId: module.id,
})
export class ScheduleComponent implements OnInit {
    @ViewChild("actionButton", { static: false })
    _buttonRef: ActionButtonComponent;

    lectures: Array<LecturesPerDay>;
    clickedList: Array<number> = new Array();
    selectedIndex: number = 0;
    constructor(
        private scheduleService: HtwgscheduleService,
        private routerExtensions: RouterExtensions,
        private cacheService: CacheService
    ) {
    }

    ngOnInit() {
        var lecturestmp: Schedule = this.cacheService.getLecturesFromCache()
        if(lecturestmp)
            this.lectures = lecturestmp.lectures
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
        return 35 * (item.lectures.length) + 65
    }
}
