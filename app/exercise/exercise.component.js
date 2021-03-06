System.register(['angular2/core', "./exercise.service"], function(exports_1, context_1) {
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
    var core_1, exercise_service_1;
    var ExerciseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exercise_service_1_1) {
                exercise_service_1 = exercise_service_1_1;
            }],
        execute: function() {
            ExerciseComponent = (function () {
                function ExerciseComponent(_exerciseService) {
                    this._exerciseService = _exerciseService;
                }
                ExerciseComponent.prototype.ngOnInit = function () {
                    this.exercises = this._exerciseService.getExercises();
                };
                ExerciseComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/exercise/exercise.component.html',
                        providers: [exercise_service_1.ExerciseService]
                    }), 
                    __metadata('design:paramtypes', [exercise_service_1.ExerciseService])
                ], ExerciseComponent);
                return ExerciseComponent;
            }());
            exports_1("ExerciseComponent", ExerciseComponent);
        }
    }
});
//# sourceMappingURL=exercise.component.js.map