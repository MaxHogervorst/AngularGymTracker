System.register(['angular2/core', "./exercise-set", "../exercise/exercise.service", "./exercise-set-details-form.component", "./workout"], function(exports_1, context_1) {
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
    var core_1, exercise_set_1, exercise_service_1, exercise_set_details_form_component_1, workout_1;
    var ExerciseSetForm;
    function compileToComponent(template, directives) {
        var FakeComponent = (function () {
            function FakeComponent() {
            }
            FakeComponent.prototype.onSetDetailChange = function ($event) {
                console.log("hier");
                console.log($event);
            };
            FakeComponent = __decorate([
                core_1.Component({
                    selector: 'fake',
                    template: template, directives: directives
                }), 
                __metadata('design:paramtypes', [])
            ], FakeComponent);
            return FakeComponent;
        }());
        ;
        return FakeComponent;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (exercise_set_1_1) {
                exercise_set_1 = exercise_set_1_1;
            },
            function (exercise_service_1_1) {
                exercise_service_1 = exercise_service_1_1;
            },
            function (exercise_set_details_form_component_1_1) {
                exercise_set_details_form_component_1 = exercise_set_details_form_component_1_1;
            },
            function (workout_1_1) {
                workout_1 = workout_1_1;
            }],
        execute: function() {
            ExerciseSetForm = (function () {
                function ExerciseSetForm(_dcl, _elementRef) {
                    this._dcl = _dcl;
                    this._elementRef = _elementRef;
                    this.change = new core_1.EventEmitter();
                    this.exerciseset = new exercise_set_1.ExerciseSet();
                }
                ExerciseSetForm.prototype.ngOnInit = function () {
                };
                ExerciseSetForm.prototype.addWorkoutExerciseSetDetail = function () {
                    var setdetail = '<exercise-set-details-form (change)="onSetDetailChange($event)"></exercise-set-details-form>';
                    this._dcl.loadIntoLocation(exercise_set_details_form_component_1.ExerciseSetDetailsForm, this._elementRef, 'hook').then;
                };
                ExerciseSetForm.prototype.onSetDetailChange = function ($event) {
                    console.log($event);
                };
                ExerciseSetForm.prototype.updateWorkout = function (type) {
                    this.exerciseset.type = type;
                    this.change.emit(this.exerciseset);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', workout_1.Workout)
                ], ExerciseSetForm.prototype, "_workout", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ExerciseSetForm.prototype, "change", void 0);
                ExerciseSetForm = __decorate([
                    core_1.Component({
                        selector: 'exercise-set-form',
                        templateUrl: 'app/workout/exercise-set-form.component.html',
                        directives: [exercise_set_details_form_component_1.ExerciseSetDetailsForm],
                        providers: [exercise_service_1.ExerciseService]
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
                ], ExerciseSetForm);
                return ExerciseSetForm;
            }());
            exports_1("ExerciseSetForm", ExerciseSetForm);
        }
    }
});
//# sourceMappingURL=exercise-set-form.component.js.map