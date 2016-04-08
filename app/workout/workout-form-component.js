System.register(['angular2/core', 'angular2/common', 'angular2/router', "./workout.service", "./workout", "./exercise-set-form.component", '../assets/helper.functions'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, workout_service_1, workout_1, exercise_set_form_component_1, helper_functions_1;
    var WorkoutFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (workout_service_1_1) {
                workout_service_1 = workout_service_1_1;
            },
            function (workout_1_1) {
                workout_1 = workout_1_1;
            },
            function (exercise_set_form_component_1_1) {
                exercise_set_form_component_1 = exercise_set_form_component_1_1;
            },
            function (helper_functions_1_1) {
                helper_functions_1 = helper_functions_1_1;
            }],
        execute: function() {
            WorkoutFormComponent = (function () {
                function WorkoutFormComponent(fb, _router, _routeParams, _workoutService, _dcl, _elementRef) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._workoutService = _workoutService;
                    this._dcl = _dcl;
                    this._elementRef = _elementRef;
                    this.workout = new workout_1.Workout();
                    this.id = 1;
                    this.form = fb.group({});
                }
                WorkoutFormComponent.prototype.ngOnInit = function () {
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit Workout" : "New Workout";
                    //new
                    if (!id) {
                        this.addWorkoutExerciseSet();
                        this.workout.exerciseSets = [];
                        return;
                    }
                    //edit
                    this.workout = this._workoutService.getWorkout(id);
                    console.log(this.workout);
                    for (var key in this.workout.exerciseSets) {
                        this.addWorkoutExerciseSet(this.workout.exerciseSets[key]);
                    }
                };
                WorkoutFormComponent.prototype.routerCanDeactivate = function () {
                    ///if (this.form.dirty)
                    // return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                WorkoutFormComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    if (this.workout.id)
                        result = this._workoutService.updateWorkout(this.workout);
                    else
                        result = this._workoutService.addWorkout(this.workout);
                    result.subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['Users']);
                    });
                };
                WorkoutFormComponent.prototype.onSetChange = function ($event) {
                    this.workout.exerciseSets = helper_functions_1.Helper.onChange($event, this.workout.exerciseSets);
                };
                WorkoutFormComponent.prototype.addWorkoutExerciseSet = function ($instance) {
                    var _this = this;
                    this._dcl.loadIntoLocation(exercise_set_form_component_1.ExerciseSetForm, this._elementRef, 'hook').then(function (ref) {
                        ref.instance.output.subscribe(function (v) { _this.onSetChange(v); }, function (e) { console.log("Error: " + e); }, function () {
                            _this.workout.exerciseSets = helper_functions_1.Helper.deleteSet(ref, _this.workout.exerciseSets, ref.instance.exerciseset);
                        });
                        if (typeof $instance == 'undefined') {
                            ref.instance.exerciseset.id = _this.id;
                            _this.id++;
                        }
                        else {
                            console.log($instance);
                        }
                    });
                };
                WorkoutFormComponent = __decorate([
                    core_1.Component({
                        selector: 'workout-form',
                        templateUrl: 'app/workout/workout-form.component.html',
                        providers: [workout_service_1.WorkoutService],
                        directives: [exercise_set_form_component_1.ExerciseSetForm]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, workout_service_1.WorkoutService, core_1.DynamicComponentLoader, core_1.ElementRef])
                ], WorkoutFormComponent);
                return WorkoutFormComponent;
            }());
            exports_1("WorkoutFormComponent", WorkoutFormComponent);
        }
    }
});
//# sourceMappingURL=workout-form-component.js.map