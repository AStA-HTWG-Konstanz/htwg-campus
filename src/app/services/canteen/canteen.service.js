"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CanteenService = /** @class */ (function () {
    function CanteenService(http) {
        this.http = http;
        this.serverUrl = "https://app.asta.htwg-konstanz.de/api/canteen/en/menu";
    }
    CanteenService.prototype.getCanteen = function () {
        var header = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: header });
    };
    CanteenService.prototype.getMenu = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.canteen && new Date(_this.canteen.menu[0].date) > new Date()) {
                resolve(_this.canteen);
            }
            else {
                _this.getCanteen().subscribe(function (response) {
                    var today = new Date();
                    for (var i = 0; i < response.menu.length; ++i) {
                        var date = new Date(response.menu[i].date);
                        if (today < date) {
                            response.menu = response.menu.slice(i);
                            break;
                        }
                    }
                    _this.canteen = response;
                    resolve(_this.canteen);
                }, function (error) { return reject(error); });
            }
        });
    };
    CanteenService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    CanteenService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CanteenService);
    return CanteenService;
}());
exports.CanteenService = CanteenService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudGVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FudGVlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQU0vRDtJQUtJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjVCLGNBQVMsR0FBRyx1REFBdUQsQ0FBQTtJQUluQyxDQUFDO0lBRWpDLG1DQUFVLEdBQWxCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFBQSxpQkFtQkM7UUFsQkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUcsS0FBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFO2dCQUNqRSxPQUFPLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFpQjtvQkFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUMxQyxJQUFHLEtBQUssR0FBRyxJQUFJLEVBQUU7NEJBQ2IsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTs0QkFDdEMsTUFBTTt5QkFDVDtxQkFDSjtvQkFDRCxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztvQkFDeEIsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFBO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU8sNENBQW1CLEdBQTNCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUF4Q1EsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVTtPQUwzQixjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYW50ZWVuIH0gZnJvbSBcIn4vYXBwL21vZGVsL2NhbnRlZW4vY2FudGVlblwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW50ZWVuU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vYXBwLmFzdGEuaHR3Zy1rb25zdGFuei5kZS9hcGkvY2FudGVlbi9lbi9tZW51XCJcbiAgICBcbiAgICBjYW50ZWVuOiBDYW50ZWVuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIHByaXZhdGUgZ2V0Q2FudGVlbigpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xuICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsLCB7aGVhZGVyczogaGVhZGVyfSlcbiAgICB9XG5cbiAgICBnZXRNZW51KCk6IFByb21pc2U8Q2FudGVlbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5jYW50ZWVuICYmIG5ldyBEYXRlKHRoaXMuY2FudGVlbi5tZW51WzBdLmRhdGUpID4gbmV3IERhdGUoKSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5jYW50ZWVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYW50ZWVuKCkuc3Vic2NyaWJlKChyZXNwb25zZTogQ2FudGVlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UubWVudS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShyZXNwb25zZS5tZW51W2ldLmRhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b2RheSA8IGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5tZW51ID0gcmVzcG9uc2UubWVudS5zbGljZShpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudGVlbiA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuY2FudGVlbik7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgfVxufSJdfQ==