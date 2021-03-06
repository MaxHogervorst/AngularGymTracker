System.register(['angular2/core', "./exercise-set-details", "../exercise/exercise.service", "rxjs/Subject"], function(exports_1, context_1) {
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
    var core_1, exercise_set_details_1, exercise_service_1, Subject_1;
    var ExerciseSetDetailsForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exercise_set_details_1_1) {
                exercise_set_details_1 = exercise_set_details_1_1;
            },
            function (exercise_service_1_1) {
                exercise_service_1 = exercise_service_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            ExerciseSetDetailsForm = (function () {
                function ExerciseSetDetailsForm(_exerciseService) {
                    this._exerciseService = _exerciseService;
                    this.execiseSetDetail = new exercise_set_details_1.ExerciseSetDetails();
                    this.test = new Subject_1.Subject();
                }
                ExerciseSetDetailsForm.prototype.ngOnInit = function () {
                    this.exercises = this._exerciseService.getExercises();
                };
                ExerciseSetDetailsForm.prototype.updateReps = function (value) {
                    this.execiseSetDetail.reps = value;
                    this.test.next(this.execiseSetDetail);
                };
                ExerciseSetDetailsForm.prototype.updateExercise = function (value) {
                    this.execiseSetDetail.exercise = this._exerciseService.getExercise(value);
                    this.test.next(this.execiseSetDetail);
                };
                ExerciseSetDetailsForm.prototype.remove = function () {
                    if (confirm("Are you sure you want to delete this set details?"))
                        this.test.complete();
                };
                ExerciseSetDetailsForm = __decorate([
                    core_1.Component({
                        selector: 'exercise-set-details-form',
                        templateUrl: 'app/workout/exercise-set-details-form.component.html',
                        providers: [exercise_service_1.ExerciseService]
                    }), 
                    __metadata('design:paramtypes', [exercise_service_1.ExerciseService])
                ], ExerciseSetDetailsForm);
                return ExerciseSetDetailsForm;
            }());
            exports_1("ExerciseSetDetailsForm", ExerciseSetDetailsForm);
        }
    }
});
//# sourceMappingURL=exercise-set-details-form.component.js.map