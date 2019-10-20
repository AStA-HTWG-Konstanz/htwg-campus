import { Injectable } from '@angular/core';
import { User } from "~/app/model/user/user.model";
import * as appSettings from "tns-core-modules/application-settings";
import { Canteen } from '~/app/model/canteen/canteen';
import { Schedule } from '~/app/model/schedule/Schedule';
import { SemesterEvents } from '~/app/model/events/semesterevents';
import { Grades } from '~/app/model/grades/grades';
import { Endlicht } from '~/app/model/endlicht/endlicht';
import { Balance } from '~/app/model/balance/balance';
import { Dashboard } from '~/app/model/dashboard/Dashboard';
import { Strandbar } from '~/app/model/strandbar/strandbar';

@Injectable()
export class CacheService {

    constructor() { }

    isUserInCache(): boolean {
        if (appSettings.hasKey("account"))
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
        if (appSettings.hasKey("canteen"))
            return true
        return false
    }

    loadCanteenInCache(canteen: Canteen): void {
        appSettings.setString("canteen", JSON.stringify(canteen))
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        appSettings.setString("canteenTimestamp", today.toString());
    }

    getCanteenFromCache(): Canteen {
        return JSON.parse(appSettings.getString("canteen"))
    }

    cantennFromToday(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("canteenTimestamp")))
            return false
        return true
    }

    isLecturesInCache(): boolean {
        if (appSettings.hasKey("lectures"))
            return true
        return false
    }

    loadLecturesInCache(lectures: Schedule): void {
        appSettings.setString("lectures", JSON.stringify(lectures));
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        appSettings.setString("lecturesTimestamp", today.toString());
    }

    getLecturesFromCache(): Schedule {
        return JSON.parse(appSettings.getString("lectures"))
    }

    lecturesFromToday(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("lecturesTimestamp")))
            return false
        return true
    }

    isEventsInCache(): boolean {
        if (appSettings.hasKey("events"))
            return true
        return false
    }

    loadEventsInCache(events: SemesterEvents): void {
        appSettings.setString("events", JSON.stringify(events));
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        appSettings.setString("eventsTimestamp", today.toString());
    }

    getEventsFromCache(): SemesterEvents {
        return JSON.parse(appSettings.getString("events"))
    }

    eventsFromToday(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("eventsTimestamp")))
            return false
        return true
    }

    loadTokeninCache(token: string) {
        appSettings.setString("token", token);
    }

    isTokenInCache() {
        if (appSettings.hasKey("token"))
            return true
        return false
    }

    getTokenFromCache(): string {
        return appSettings.getString("token")
    }

    deleteTokenFromCache() {
        if (appSettings.hasKey("token")) {
            appSettings.remove("token")
        }
    }

    isGradesInCache(): boolean {
        if (appSettings.hasKey("grades"))
            return true
        return false
    }

    loadGradesInCache(grades: Grades): void {
        appSettings.setString("grades", JSON.stringify(grades));
        var today = new Date();
        var refreshTime = new Date();
        today.setHours(0, 0, 0, 0);
        refreshTime.setHours(0, 0, 0, 0);
        appSettings.setString("gradesTimestamp", today.toString());
        appSettings.setString("gradesRefreshTimestamp", refreshTime.toString())
    }

    getGradesFromCache(): Grades {
        return JSON.parse(appSettings.getString("grades"))
    }

    gradesFromToday(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("gradesTimestamp")))
            return false
        return true
    }

    isGradesRefreshInCache() {
        if (appSettings.hasKey("gradesRefreshTimestamp")) {
            return true
        }
        return false
    }

    gradesRefreshLastHour(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("gradesRefreshTimestamp")))
            return false
        return true
    }

    loadGradesRefreshInCache() {
        var refreshTime = new Date();
        refreshTime.setHours(0, 0, 0, 0);
        appSettings.setString("gradesRefreshTimestamp", refreshTime.toString())
    }

    isEndlichtInCache(): boolean {
        if (appSettings.hasKey("endlicht"))
            return true
        return false
    }

    loadEndlichtInCache(endlicht: Endlicht): void {
        appSettings.setString("endlicht", JSON.stringify(endlicht));
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        appSettings.setString("endlichtTimestamp", today.toString());
    }

    getEndlichtFromCache(): Endlicht {
        return JSON.parse(appSettings.getString("endlicht"))
    }

    endlichtFromToday(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("endlichtTimestamp")))
            return false
        return true
    }

    isLanguageInCache(): boolean {
        return appSettings.hasKey("language")
    }
    loadLanguageInCache(lang: string): void {
        appSettings.setString("language", JSON.stringify(lang));
    }
    getLanguageFromCache(): string {
        return JSON.parse(appSettings.getString("language"))
    }

    isPrintBalanceInCache(): boolean {
        return appSettings.hasKey("printbalance")
    }
    loadPrintBalanceInCache(balance: Balance) {
        appSettings.setString("printbalance", JSON.stringify(balance))
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        appSettings.setString("printbalanceTimestamp", today.toString())
    }
    getPrintBalanceFromCache(): Balance {
        return JSON.parse(appSettings.getString("printbalance"))
    }
    printBalanceFromToday(): boolean {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (today > new Date(appSettings.getString("printbalanceTimestamp")))
            return false
        return true
    }

    isDashBoardInCache(): boolean {
        return appSettings.hasKey("dashboard")
    }
    loadDashBoardInCache(dashBoard: Dashboard) {
        appSettings.setString("dashboard", JSON.stringify(dashBoard))
    }
    getDashBoardFromCache(): Dashboard {
        return JSON.parse(appSettings.getString("dashboard"))
    }

    isStrandbarInCache(): boolean {
        return appSettings.hasKey("strandbar")
    }
    loadStrandbarInCache(stranbar: Strandbar) {
        appSettings.setString("strandbar", JSON.stringify(stranbar))
        var today = new Date();
        today.setMinutes(0, 0, 0)
        appSettings.setString("strandbarTimestamp", today.toString())
    }
    strandbarFromCurrentHour(): boolean {
        var today = new Date();
        today.setMinutes(0, 0, 0)
        if (today.getHours() > new Date(appSettings.getString("strandbarTimestamp")).getHours()) {
            return false
        }
        return true
    }
    getStrandbarFromCache(): Strandbar {
        return JSON.parse(appSettings.getString("strandbar"))
    }

    clearCache(): void {
        appSettings.remove("strandbarTimestamp");
        appSettings.remove("strandbar");
        appSettings.remove("dashboard");
        appSettings.remove("language");
        appSettings.remove("printbalanceTimestamp");
        appSettings.remove("printbalance")
        appSettings.remove("account");
        appSettings.remove("lectures");
        appSettings.remove("lecturesTimestamp");
        appSettings.remove("token");
        appSettings.hasKey("grades") ? appSettings.remove("grades") : console.log("no grades");
        appSettings.hasKey("gradesTimestamp") ? appSettings.remove("gradesTimestamp") : console.log("no grades");
        appSettings.hasKey("gradesRefreshTimestamp") ? appSettings.remove("gradesRefreshTimestamp") : console.log("no grades");
        appSettings.remove("canteen");
        appSettings.remove("canteenTimestamp")
        appSettings.clear();
    }

}
