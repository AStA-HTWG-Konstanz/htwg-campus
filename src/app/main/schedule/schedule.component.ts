import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Schedule } from '~/app/model/schedule/Schedule';
import { LecturesPerDay } from '~/app/model/schedule/lectures/LecturesPerDay';
import { HtwgscheduleService } from '~/app/service/schedule/htwgschedule.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid, booleanConverter } from 'tns-core-modules/ui/page/page';
declare var UIView, NSMutableArray, NSIndexPath;

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ActionButtonComponent } from '~/app/action-button/action-button.component';

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
        private routerExtensions: RouterExtensions
    ) {
    }

    ngOnInit() {
        this.getSchedule();
    }

    navigateBack() {
        this.routerExtensions.navigateByUrl("main", { transition: { name: 'slideRight' }, clearHistory: true });
    }

    getSchedule() {
        this.scheduleService.getTimeTable().then(
            (resolved: any) => {
                let currentSchedule: Schedule = (resolved) ? resolved : null;
                this.lectures = currentSchedule.lectures;
            },
            (rejected: any) => {
                alert(JSON.stringify(rejected));
            }
        );
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
