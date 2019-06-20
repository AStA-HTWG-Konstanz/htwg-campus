import { Injectable } from '@angular/core';
import { User } from "~/app/model/user/user.model";
import * as appSettings from "tns-core-modules/application-settings";
import { Canteen } from '~/app/model/canteen/canteen';
import { Schedule } from '~/app/model/schedule/Schedule';
import { SemesterEvents } from '~/app/model/events/semesterevents';
import { SemesterGrades } from '~/app/model/grades/semester-grades';
import { Grades } from '~/app/model/grades/grades';
import { Endlicht } from '~/app/model/endlicht/endlicht';

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

    isGradesInCache(): boolean {
        if(appSettings.hasKey("grades"))
            return true
        return false
    }

    loadGradesInCache(grades: Grades): void {
        appSettings.setString("grades", JSON.stringify(grades));
        var today = new Date();
        today.setHours(0,0,0,0);
        appSettings.setString("gradesTimestamp",today.toString());
    }

    getGradesFromCache(): Grades {
        return JSON.parse(appSettings.getString("grades"))
    }

    gradesFromToday(): boolean {
        var today = new Date();
        today.setHours(0,0,0,0);
        if(today > new Date(appSettings.getString("gradesTimestamp")))
            return false
        return true
    }

    isEndlichtInCache(): boolean {
        if(appSettings.hasKey("endlicht"))
            return true
        return false
    }

    loadEndlichtInCache(endlicht: Endlicht): void {
        appSettings.setString("endlicht", JSON.stringify(endlicht));
        var today = new Date();
        today.setHours(0,0,0,0);
        appSettings.setString("endlichtTimestamp",today.toString());
    }

    getEndlichtFromCache(): Endlicht {
        return JSON.parse(appSettings.getString("endlicht"))
    }

    endlichtFromToday(): boolean {
        var today = new Date();
        today.setHours(0,0,0,0);
        if(today > new Date(appSettings.getString("endlichtTimestamp")))
            return false
        return true
    }

    clearCache(): void {
        appSettings.remove("account");
        appSettings.remove("lectures");
        appSettings.remove("lecturesTimestamp");
        appSettings.remove("grades");
        appSettings.remove("gradesTimestamp");
    }

}
