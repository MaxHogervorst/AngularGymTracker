System.register(['angular2/core', 'angular2/router', "./workout.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, workout_service_1;
    var WorkoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            }],
        execute: function() {
            WorkoutComponent = (function () {
                function WorkoutComponent(_workoutService) {
                    this._workoutService = _workoutService;
                }
                WorkoutComponent.prototype.ngOnInit = function () {
                    this.workouts = this._workoutService.getWorkouts();
                };
                WorkoutComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/workout/workout.component.html',
                        providers: [workout_service_1.WorkoutService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [workout_service_1.WorkoutService])
                ], WorkoutComponent);
                return WorkoutComponent;
            }());
            exports_1("WorkoutComponent", WorkoutComponent);
        }
    }
});
//# sourceMappingURL=workout.component.js.map