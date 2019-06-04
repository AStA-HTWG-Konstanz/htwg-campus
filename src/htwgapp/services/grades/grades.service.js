"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_request_service_1 = require("../backend-request/backend-request.service");
var GradesService = /** @class */ (function () {
    function GradesService(backendRequest) {
        this.backendRequest = backendRequest;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/user/grades";
        // TODO: remove dummy
        this.dummyResponse = [
            {
                semesterIdentifier: "Wintersemester 16/17",
                semesterPerformance: [
                    {
                        course: "AIN",
                        name: "Mathematik 1 und Konsolidierung",
                        grade: "2",
                        ects: "10",
                        passed: true,
                        bachelor: true,
                        master: false
                    },
                    {
                        course: "AIN",
                        name: "Mathematik 1 Übungen",
                        grade: "0",
                        ects: "0",
                        passed: true,
                        bachelor: true,
                        master: false
                    }
                ]
            },
            {
                semesterIdentifier: "Sommersemester 17",
                semesterPerformance: [
                    {
                        course: "AIN",
                        name: "Bachelorzwischenprüfung",
                        grade: "2,1",
                        ects: "60",
                        passed: true,
                        bachelor: true,
                        master: false
                    },
                    {
                        course: "AIN",
                        name: "Softwaremodellierung",
                        grade: "3",
                        ects: "7",
                        passed: true,
                        bachelor: true,
                        master: false
                    },
                    {
                        course: "AIN",
                        name: "Systemmodellierung Übungen",
                        grade: "0",
                        ects: "0",
                        passed: true,
                        bachelor: true,
                        master: false
                    }
                ]
            }
        ];
    }
    GradesService.prototype.getGrades = function () {
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
                        console.log("grades response: ");
                        _this.latestRequest = new Date();
                        _this.storedResponse = _this.dummyResponse; //JSON.parse(response) as SemesterGrades[];
                        resolve(_this.storedResponse);
                    }
                    else {
                        _this.storedResponse = _this.dummyResponse;
                        console.log("resolve dummy");
                        resolve(_this.storedResponse);
                        //reject("empty response from grades request");
                    }
                }, function (error) {
                    console.log("error");
                    reject(error);
                });
            }
        });
    };
    GradesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_request_service_1.BackendRequestService])
    ], GradesService);
    return GradesService;
}());
exports.GradesService = GradesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncmFkZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUMzQyxzRkFBbUY7QUFHbkY7SUFLSSx1QkFBb0IsY0FBcUM7UUFBckMsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBSmpELGNBQVMsR0FBRyxtREFBbUQsQ0FBQztRQXdDeEUscUJBQXFCO1FBQ3JCLGtCQUFhLEdBQ2I7WUFDSTtnQkFDSSxrQkFBa0IsRUFBRSxzQkFBc0I7Z0JBQzFDLG1CQUFtQixFQUFFO29CQUNyQjt3QkFDSSxNQUFNLEVBQUUsS0FBSzt3QkFDYixJQUFJLEVBQUUsaUNBQWlDO3dCQUN2QyxLQUFLLEVBQUUsR0FBRzt3QkFDVixJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUUsSUFBSTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxNQUFNLEVBQUUsS0FBSztxQkFDaEI7b0JBQ0Q7d0JBQ0ksTUFBTSxFQUFFLEtBQUs7d0JBQ2IsSUFBSSxFQUFFLHNCQUFzQjt3QkFDNUIsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsSUFBSSxFQUFFLEdBQUc7d0JBQ1QsTUFBTSxFQUFFLElBQUk7d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsTUFBTSxFQUFFLEtBQUs7cUJBQ2hCO2lCQUFDO2FBQ0w7WUFDRDtnQkFDSSxrQkFBa0IsRUFBRSxtQkFBbUI7Z0JBQ3ZDLG1CQUFtQixFQUFFO29CQUNyQjt3QkFDSSxNQUFNLEVBQUUsS0FBSzt3QkFDYixJQUFJLEVBQUUseUJBQXlCO3dCQUMvQixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUUsSUFBSTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxNQUFNLEVBQUUsS0FBSztxQkFDaEI7b0JBQ0Q7d0JBQ0ksTUFBTSxFQUFFLEtBQUs7d0JBQ2IsSUFBSSxFQUFFLHNCQUFzQjt3QkFDNUIsS0FBSyxFQUFFLEdBQUc7d0JBQ1YsSUFBSSxFQUFFLEdBQUc7d0JBQ1QsTUFBTSxFQUFFLElBQUk7d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsTUFBTSxFQUFFLEtBQUs7cUJBQ2hCO29CQUNEO3dCQUNJLE1BQU0sRUFBRSxLQUFLO3dCQUNiLElBQUksRUFBRSw0QkFBNEI7d0JBQ2xDLEtBQUssRUFBRSxHQUFHO3dCQUNWLElBQUksRUFBRSxHQUFHO3dCQUNULE1BQU0sRUFBRSxJQUFJO3dCQUNaLFFBQVEsRUFBRSxJQUFJO3dCQUNkLE1BQU0sRUFBRSxLQUFLO3FCQUNoQjtpQkFBQzthQUNMO1NBQ0osQ0FBQTtJQTVGMkQsQ0FBQztJQUU3RCxpQ0FBUyxHQUFUO1FBQUEsaUJBaUNDO1FBaENHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUNJLEtBQUksQ0FBQyxhQUFhO2dCQUNsQixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLFVBQVUsRUFDeEQ7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FDUCx5QkFBeUI7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FDcEQsQ0FBQztnQkFDRixPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQzVDLFVBQUMsUUFBZ0I7b0JBQ2IsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQSxDQUFBLDJDQUEyQzt3QkFDbkYsT0FBTyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDaEM7eUJBQU07d0JBQ0gsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDO3dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO3dCQUM1QixPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUM3QiwrQ0FBK0M7cUJBQ2xEO2dCQUNMLENBQUMsRUFDRCxVQUFBLEtBQUs7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNqQixDQUFDLENBQ0osQ0FBQzthQUNMO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeENRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FNMkIsK0NBQXFCO09BTGhELGFBQWEsQ0FrR3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWxHRCxJQWtHQztBQWxHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbWVzdGVyR3JhZGVzIH0gZnJvbSAnLi8uLi8uLi9tb2RlbC9ncmFkZXMvc2VtZXN0ZXItZ3JhZGVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFja2VuZFJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vYmFja2VuZC1yZXF1ZXN0L2JhY2tlbmQtcmVxdWVzdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyYWRlc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwczovL2FwcC5hc3RhLmh0d2cta29uc3RhbnouZGUvYXBpL3VzZXIvZ3JhZGVzXCI7XG5cbiAgICBsYXRlc3RSZXF1ZXN0OiBEYXRlO1xuICAgIHN0b3JlZFJlc3BvbnNlOiBTZW1lc3RlckdyYWRlc1tdO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFJlcXVlc3Q6IEJhY2tlbmRSZXF1ZXN0U2VydmljZSkge31cblxuICAgIGdldEdyYWRlcygpOiBQcm9taXNlPFNlbWVzdGVyR3JhZGVzW10+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmxhdGVzdFJlcXVlc3QuZ2V0VVRDRGF0ZSA9PSBuZXcgRGF0ZSgpLmdldFVUQ0RhdGVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBcImFscmVhZHkgcmVxdWVzdGVkIHRvZGF5XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5sYXRlc3RSZXF1ZXN0LmdldFVUQ0RhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RvcmVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tlbmRSZXF1ZXN0LnJlcXVlc3QodGhpcy5zZXJ2ZXJVcmwpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ3JhZGVzIHJlc3BvbnNlOiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXRlc3RSZXF1ZXN0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlZFJlc3BvbnNlID0gdGhpcy5kdW1teVJlc3BvbnNlLy9KU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBTZW1lc3RlckdyYWRlc1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdG9yZWRSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVkUmVzcG9uc2UgPSB0aGlzLmR1bW15UmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlIGR1bW15XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0b3JlZFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JlamVjdChcImVtcHR5IHJlc3BvbnNlIGZyb20gZ3JhZGVzIHJlcXVlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gVE9ETzogcmVtb3ZlIGR1bW15XG4gICAgZHVtbXlSZXNwb25zZTogU2VtZXN0ZXJHcmFkZXNbXSA9IFxuICAgIFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VtZXN0ZXJJZGVudGlmaWVyOiBcIldpbnRlcnNlbWVzdGVyIDE2LzE3XCIsXG4gICAgICAgICAgICBzZW1lc3RlclBlcmZvcm1hbmNlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291cnNlOiBcIkFJTlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWF0aGVtYXRpayAxIHVuZCBLb25zb2xpZGllcnVuZ1wiLFxuICAgICAgICAgICAgICAgIGdyYWRlOiBcIjJcIixcbiAgICAgICAgICAgICAgICBlY3RzOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgcGFzc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2hlbG9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hc3RlcjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291cnNlOiBcIkFJTlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWF0aGVtYXRpayAxIMOcYnVuZ2VuXCIsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IFwiMFwiLFxuICAgICAgICAgICAgICAgIGVjdHM6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHBhc3NlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBiYWNoZWxvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXN0ZXI6IGZhbHNlXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZW1lc3RlcklkZW50aWZpZXI6IFwiU29tbWVyc2VtZXN0ZXIgMTdcIixcbiAgICAgICAgICAgIHNlbWVzdGVyUGVyZm9ybWFuY2U6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3Vyc2U6IFwiQUlOXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCYWNoZWxvcnp3aXNjaGVucHLDvGZ1bmdcIixcbiAgICAgICAgICAgICAgICBncmFkZTogXCIyLDFcIixcbiAgICAgICAgICAgICAgICBlY3RzOiBcIjYwXCIsXG4gICAgICAgICAgICAgICAgcGFzc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2hlbG9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hc3RlcjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291cnNlOiBcIkFJTlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU29mdHdhcmVtb2RlbGxpZXJ1bmdcIixcbiAgICAgICAgICAgICAgICBncmFkZTogXCIzXCIsXG4gICAgICAgICAgICAgICAgZWN0czogXCI3XCIsXG4gICAgICAgICAgICAgICAgcGFzc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2hlbG9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hc3RlcjogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291cnNlOiBcIkFJTlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3lzdGVtbW9kZWxsaWVydW5nIMOcYnVuZ2VuXCIsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IFwiMFwiLFxuICAgICAgICAgICAgICAgIGVjdHM6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHBhc3NlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBiYWNoZWxvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXN0ZXI6IGZhbHNlXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgXVxufVxuIl19