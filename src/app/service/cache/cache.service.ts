import { Injectable } from '@angular/core';
import { User } from "~/app/model/user/user.model";
import * as appSettings from "tns-core-modules/application-settings";
import { Canteen } from '~/app/model/canteen/canteen';
import { Schedule } from '~/app/model/schedule/Schedule';
import { SemesterEvents } from '~/app/model/events/semesterevents';

@Injectable()
export class CacheService {

    constructor() { }

    isUserInCache(): boolean {
        if(appSettings.hasKey("account"))
            return true
        return false
    }

    loadUserInCache(user: User) {
        appSettings.setString("account", JSON.stringify(user))
    }

    getUserFromCache(): User {
        return JSON.parse(appSettings.getString("account"))
    }

    isCanteenInCache(): boolean {
        if(appSettings.hasKey("canteen"))
            return true
        return false
    }

    loadCanteenInCache(canteen: Canteen): void {
        appSettings.setString("canteen", JSON.stringify(canteen))
        var today = new Date();
        today.setHours(0,0,0,0);
        appSettings.setString("canteenTimestamp", today.toString());
    }

    getCanteenFromCache(): Canteen {
        return JSON.parse(appSettings.getString("canteen"))
    }

    cantennFromToday(): boolean {
        var today = new Date();
        today.setHours(0,0,0,0);
        if(today > new Date(appSettings.getString("canteenTimestamp")))
            return false
        return true
    }

    isLecturesInCache(): boolean {
        if(appSettings.hasKey("lectures"))
            return true
        return false
    }

    loadLecturesInCache(lectures: Schedule): void {
        appSettings.setString("lectures", JSON.stringify(lectures));
        var today = new Date();
        today.setHours(0,0,0,0);
        appSettings.setString("lecturesTimestamp", today.toString());
    }

    getLecturesFromCache(): Schedule {
        return JSON.parse(appSettings.getString("lectures"))
    }

    lecturesFromToday(): boolean {
        var today = new Date();
        today.setHours(0,0,0,0);
        if(today > new Date(appSettings.getString("lecturesTimestamp")))
            return false
        return true
    }

    isEventsInCache(): boolean {
        if(appSettings.hasKey("events"))
            return true
        return false
    }

    loadEventsInCache(events: SemesterEvents): void {
        appSettings.setString("events", JSON.stringify(events));
        var today = new Date();
        today.setHours(0,0,0,0);
        appSettings.setString("eventsTimestamp", today.toString());
    }

    getEventsFromCache(): SemesterEvents {
        return JSON.parse(appSettings.getString("events"))
    }

    eventsFromToday(): boolean {
        var today = new Date();
        today.setHours(0,0,0,0);
        if(today > new Date(appSettings.getString("eventsTimestamp")))
            return false
        return true
    }

    clearCache(): void {
        appSettings.remove("account");
        appSettings.remove("canteen");
        appSettings.remove("canteenTimestamp");
        appSettings.remove("lectures");
        appSettings.remove("lecturesTimestamp");
        appSettings.remove("events");
        appSettings.remove("eventsTimestamp");
    }

}
