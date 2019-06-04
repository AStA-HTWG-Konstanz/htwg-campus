"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backend_request_service_1 = require("./../backend-request/backend-request.service");
var core_1 = require("@angular/core");
var HtwgscheduleService = /** @class */ (function () {
    function HtwgscheduleService(backendRequest) {
        this.backendRequest = backendRequest;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/lectures";
        this.dummySchedule = {
            "lectures": [
                {
                    "date": "6.5.2019",
                    "lectures": [
                        {
                            "name": "Stochastik",
                            "startTime": "8:00",
                            "endTime": "9:30",
                            "room": "O007",
                            "category": "Vorlesung"
                        },
                        {
                            "name": "Programmiertechnik 1",
                            "startTime": "9:45",
                            "endTime": "11:15",
                            "room": "F033",
                            "category": "Übung"
                        }
                    ]
                },
                {
                    "date": "7.5.2019",
                    "lectures": [
                        {
                            "name": "Englisch",
                            "startTime": "11:30",
                            "endTime": "13:00",
                            "room": "C109",
                            "category": "Vorlesung"
                        }
                    ]
                },
                {
                    "date": "8.5.2019",
                    "lectures": [
                        {
                            "name": "Systemsoftware",
                            "startTime": "8:00",
                            "endTime": "9:30",
                            "room": "O108",
                            "category": "Vorlesung"
                        },
                        {
                            "name": "Rechnerarchitektur",
                            "startTime": "9:45",
                            "endTime": "11:15",
                            "room": "O303",
                            "category": "Übung"
                        },
                        {
                            "name": "Rechnerarchitektur",
                            "startTime": "11:30",
                            "endTime": "13:00",
                            "room": "O303",
                            "category": "Vorlesung"
                        }
                    ]
                },
                {
                    "date": "9.5.2019",
                    "lectures": [
                        {
                            "name": "Stochastik",
                            "startTime": "14:00",
                            "endTime": "15:30",
                            "room": "F023",
                            "category": "Vorlesung"
                        },
                        {
                            "name": "Programmiertechnik 1",
                            "startTime": "9:45",
                            "endTime": "11:15",
                            "room": "F033",
                            "category": "Vorlesung"
                        }
                    ]
                },
                {
                    "date": "10.5.2019",
                    "lectures": [
                        {
                            "name": "Englisch",
                            "startTime": "15:45",
                            "endTime": "17:15",
                            "room": "C109",
                            "category": "Übung"
                        },
                        {
                            "name": "Programmiertechnik 1",
                            "startTime": "9:45",
                            "endTime": "11:15",
                            "room": "F033",
                            "category": "Vorlesung"
                        }
                    ]
                }
            ]
        };
    }
    HtwgscheduleService.prototype.getTimeTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.latestRequest &&
                _this.latestRequest.getUTCDate == new Date().getUTCDate) {
                console.log("already requested today" +
                    JSON.stringify(_this.latestRequest.getUTCDate));
                resolve(_this.storedResponse);
            }
            else {
                _this.backendRequest.request(_this.serverUrl).then(function (response) {
                    if (response.length > 0) {
                        console.log("schedule response: ");
                        _this.latestRequest = new Date();
                        _this.storedResponse = _this.lectureParser(response);
                        resolve(_this.storedResponse);
                    }
                    else {
                        resolve(_this.lectureParser(_this.dummySchedule));
                        //reject("empty responsefrom schedule request");
                    }
                }, function (error) { return reject(error); });
            }
        });
    };
    HtwgscheduleService.prototype.lectureParser = function (lecturePayload) {
        if (JSON.stringify(lecturePayload) == null) {
            return null;
        }
        var schedule = JSON.parse(JSON.stringify(lecturePayload));
        if (schedule) {
            return schedule;
        }
        return null;
    };
    HtwgscheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_request_service_1.BackendRequestService])
    ], HtwgscheduleService);
    return HtwgscheduleService;
}());
exports.HtwgscheduleService = HtwgscheduleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR3Z3NjaGVkdWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHdnc2NoZWR1bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHdGQUFxRjtBQUNyRixzQ0FBMkM7QUFLM0M7SUFLSSw2QkFBb0IsY0FBcUM7UUFBckMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBSmpELGNBQVMsR0FBRyxxREFBcUQsQ0FBQztRQTZDMUUsa0JBQWEsR0FBRztZQUNaLFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxNQUFNLEVBQUUsVUFBVTtvQkFDbEIsVUFBVSxFQUFFO3dCQUNWOzRCQUNFLE1BQU0sRUFBRSxZQUFZOzRCQUNwQixXQUFXLEVBQUUsTUFBTTs0QkFDbkIsU0FBUyxFQUFFLE1BQU07NEJBQ2pCLE1BQU0sRUFBRSxNQUFNOzRCQUNkLFVBQVUsRUFBRSxXQUFXO3lCQUN4Qjt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsc0JBQXNCOzRCQUM5QixXQUFXLEVBQUUsTUFBTTs0QkFDbkIsU0FBUyxFQUFFLE9BQU87NEJBQ2xCLE1BQU0sRUFBRSxNQUFNOzRCQUNkLFVBQVUsRUFBRSxPQUFPO3lCQUNwQjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsVUFBVTtvQkFDbEIsVUFBVSxFQUFFO3dCQUNWOzRCQUNFLE1BQU0sRUFBRSxVQUFVOzRCQUNsQixXQUFXLEVBQUUsT0FBTzs0QkFDcEIsU0FBUyxFQUFFLE9BQU87NEJBQ2xCLE1BQU0sRUFBRSxNQUFNOzRCQUNkLFVBQVUsRUFBRSxXQUFXO3lCQUN4QjtxQkFDRjtpQkFDRjtnQkFDRDtvQkFDRSxNQUFNLEVBQUUsVUFBVTtvQkFDbEIsVUFBVSxFQUFFO3dCQUNWOzRCQUNFLE1BQU0sRUFBRSxnQkFBZ0I7NEJBQ3hCLFdBQVcsRUFBRSxNQUFNOzRCQUNuQixTQUFTLEVBQUUsTUFBTTs0QkFDakIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLFdBQVc7eUJBQ3hCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxvQkFBb0I7NEJBQzVCLFdBQVcsRUFBRSxNQUFNOzRCQUNuQixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLE9BQU87eUJBQ3BCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxvQkFBb0I7NEJBQzVCLFdBQVcsRUFBRSxPQUFPOzRCQUNwQixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLFdBQVc7eUJBQ3hCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxVQUFVO29CQUNsQixVQUFVLEVBQUU7d0JBQ1Y7NEJBQ0UsTUFBTSxFQUFFLFlBQVk7NEJBQ3BCLFdBQVcsRUFBRSxPQUFPOzRCQUNwQixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLFdBQVc7eUJBQ3hCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxzQkFBc0I7NEJBQzlCLFdBQVcsRUFBRSxNQUFNOzRCQUNuQixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLFdBQVc7eUJBQ3hCO3FCQUNGO2lCQUNGO2dCQUNEO29CQUNFLE1BQU0sRUFBRSxXQUFXO29CQUNuQixVQUFVLEVBQUU7d0JBQ1Y7NEJBQ0UsTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLFdBQVcsRUFBRSxPQUFPOzRCQUNwQixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLE9BQU87eUJBQ3BCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxzQkFBc0I7NEJBQzlCLFdBQVcsRUFBRSxNQUFNOzRCQUNuQixTQUFTLEVBQUUsT0FBTzs0QkFDbEIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsVUFBVSxFQUFFLFdBQVc7eUJBQ3hCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFBO0lBM0l5RCxDQUFDO0lBRTdELDBDQUFZLEdBQVo7UUFBQSxpQkE0QkM7UUEzQkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQ0ksS0FBSSxDQUFDLGFBQWE7Z0JBQ2xCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsVUFBVSxFQUN4RDtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUNQLHlCQUF5QjtvQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUNwRCxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDNUMsVUFBQyxRQUFnQjtvQkFDYixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRCxPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUNoQzt5QkFBTTt3QkFDSCxPQUFPLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDaEQsZ0RBQWdEO3FCQUNuRDtnQkFDTCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUN6QixDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwyQ0FBYSxHQUFiLFVBQWMsY0FBbUI7UUFDN0IsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxRQUFRLEVBQUU7WUFDVixPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUE3Q1EsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7eUNBTTJCLCtDQUFxQjtPQUxoRCxtQkFBbUIsQ0FpSi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpKRCxJQWlKQztBQWpKWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJy4vLi4vLi4vbW9kZWwvc2NoZWR1bGUvU2NoZWR1bGUnO1xuaW1wb3J0IHsgTGVjdHVyZXNQZXJEYXkgfSBmcm9tICcuLy4uLy4uL21vZGVsL3NjaGVkdWxlL2xlY3R1cmVzL0xlY3R1cmVzUGVyRGF5JztcbmltcG9ydCB7IEJhY2tlbmRSZXF1ZXN0U2VydmljZSB9IGZyb20gJy4vLi4vYmFja2VuZC1yZXF1ZXN0L2JhY2tlbmQtcmVxdWVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2NoZWR1bGVVc2VyIH0gZnJvbSBcIn4vYXBwL21vZGVsL3NjaGVkdWxldXNlci9zY2hlZHVsZXVzZXIubW9kZWxcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHdnc2NoZWR1bGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cHM6Ly9hcHAuYXN0YS5odHdnLWtvbnN0YW56LmRlL2FwaS91c2VyL2xlY3R1cmVzXCI7XG5cbiAgICBsYXRlc3RSZXF1ZXN0OiBEYXRlO1xuICAgIHN0b3JlZFJlc3BvbnNlOiBTY2hlZHVsZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tlbmRSZXF1ZXN0OiBCYWNrZW5kUmVxdWVzdFNlcnZpY2UpIHt9XG5cbiAgICBnZXRUaW1lVGFibGUoKTogUHJvbWlzZTxTY2hlZHVsZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVxdWVzdCAmJlxuICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVxdWVzdC5nZXRVVENEYXRlID09IG5ldyBEYXRlKCkuZ2V0VVRDRGF0ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIFwiYWxyZWFkeSByZXF1ZXN0ZWQgdG9kYXlcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmxhdGVzdFJlcXVlc3QuZ2V0VVRDRGF0ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdG9yZWRSZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja2VuZFJlcXVlc3QucmVxdWVzdCh0aGlzLnNlcnZlclVybCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsZSByZXNwb25zZTogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF0ZXN0UmVxdWVzdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZWRSZXNwb25zZSA9IHRoaXMubGVjdHVyZVBhcnNlcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0b3JlZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmxlY3R1cmVQYXJzZXIodGhpcy5kdW1teVNjaGVkdWxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZWplY3QoXCJlbXB0eSByZXNwb25zZWZyb20gc2NoZWR1bGUgcmVxdWVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZWN0dXJlUGFyc2VyKGxlY3R1cmVQYXlsb2FkOiBhbnkpIHtcbiAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkobGVjdHVyZVBheWxvYWQpID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzY2hlZHVsZTogU2NoZWR1bGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxlY3R1cmVQYXlsb2FkKSk7XG4gICAgICAgIGlmIChzY2hlZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkdW1teVNjaGVkdWxlID0ge1xuICAgICAgICBcImxlY3R1cmVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRhdGVcIjogXCI2LjUuMjAxOVwiLFxuICAgICAgICAgICAgXCJsZWN0dXJlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTdG9jaGFzdGlrXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogXCI4OjAwXCIsXG4gICAgICAgICAgICAgICAgXCJlbmRUaW1lXCI6IFwiOTozMFwiLFxuICAgICAgICAgICAgICAgIFwicm9vbVwiOiBcIk8wMDdcIixcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiVm9ybGVzdW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2dyYW1taWVydGVjaG5payAxXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogXCI5OjQ1XCIsXG4gICAgICAgICAgICAgICAgXCJlbmRUaW1lXCI6IFwiMTE6MTVcIixcbiAgICAgICAgICAgICAgICBcInJvb21cIjogXCJGMDMzXCIsXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIsOcYnVuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjcuNS4yMDE5XCIsXG4gICAgICAgICAgICBcImxlY3R1cmVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2NoXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogXCIxMTozMFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kVGltZVwiOiBcIjEzOjAwXCIsXG4gICAgICAgICAgICAgICAgXCJyb29tXCI6IFwiQzEwOVwiLFxuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJWb3JsZXN1bmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImRhdGVcIjogXCI4LjUuMjAxOVwiLFxuICAgICAgICAgICAgXCJsZWN0dXJlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTeXN0ZW1zb2Z0d2FyZVwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRUaW1lXCI6IFwiODowMFwiLFxuICAgICAgICAgICAgICAgIFwiZW5kVGltZVwiOiBcIjk6MzBcIixcbiAgICAgICAgICAgICAgICBcInJvb21cIjogXCJPMTA4XCIsXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlZvcmxlc3VuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWNobmVyYXJjaGl0ZWt0dXJcIixcbiAgICAgICAgICAgICAgICBcInN0YXJ0VGltZVwiOiBcIjk6NDVcIixcbiAgICAgICAgICAgICAgICBcImVuZFRpbWVcIjogXCIxMToxNVwiLFxuICAgICAgICAgICAgICAgIFwicm9vbVwiOiBcIk8zMDNcIixcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiw5xidW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlY2huZXJhcmNoaXRla3R1clwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRUaW1lXCI6IFwiMTE6MzBcIixcbiAgICAgICAgICAgICAgICBcImVuZFRpbWVcIjogXCIxMzowMFwiLFxuICAgICAgICAgICAgICAgIFwicm9vbVwiOiBcIk8zMDNcIixcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiVm9ybGVzdW5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJkYXRlXCI6IFwiOS41LjIwMTlcIixcbiAgICAgICAgICAgIFwibGVjdHVyZXNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3RvY2hhc3Rpa1wiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRUaW1lXCI6IFwiMTQ6MDBcIixcbiAgICAgICAgICAgICAgICBcImVuZFRpbWVcIjogXCIxNTozMFwiLFxuICAgICAgICAgICAgICAgIFwicm9vbVwiOiBcIkYwMjNcIixcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiVm9ybGVzdW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2dyYW1taWVydGVjaG5payAxXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogXCI5OjQ1XCIsXG4gICAgICAgICAgICAgICAgXCJlbmRUaW1lXCI6IFwiMTE6MTVcIixcbiAgICAgICAgICAgICAgICBcInJvb21cIjogXCJGMDMzXCIsXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlZvcmxlc3VuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjEwLjUuMjAxOVwiLFxuICAgICAgICAgICAgXCJsZWN0dXJlc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFbmdsaXNjaFwiLFxuICAgICAgICAgICAgICAgIFwic3RhcnRUaW1lXCI6IFwiMTU6NDVcIixcbiAgICAgICAgICAgICAgICBcImVuZFRpbWVcIjogXCIxNzoxNVwiLFxuICAgICAgICAgICAgICAgIFwicm9vbVwiOiBcIkMxMDlcIixcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiw5xidW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByb2dyYW1taWVydGVjaG5payAxXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFydFRpbWVcIjogXCI5OjQ1XCIsXG4gICAgICAgICAgICAgICAgXCJlbmRUaW1lXCI6IFwiMTE6MTVcIixcbiAgICAgICAgICAgICAgICBcInJvb21cIjogXCJGMDMzXCIsXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIlZvcmxlc3VuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbn1cbiJdfQ==