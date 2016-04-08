import {Component, OnInit, DynamicComponentLoader, ElementRef, ComponentRef} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';

import {WorkoutService} from "./workout.service";
import {Workout} from "./workout";
import {ExerciseSetForm} from "./exercise-set-form.component";
import {Helper} from '../assets/helper.functions';




@Component({
    selector: 'workout-form',
    templateUrl: 'app/workout/workout-form.component.html',
    providers: [WorkoutService],
    directives: [ExerciseSetForm]
})
export class WorkoutFormComponent implements OnInit, CanDeactivate {
    form: ControlGroup;
    title: string;
    workout = new Workout();
    id = 1;
    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _workoutService: WorkoutService,
        private _dcl: DynamicComponentLoader,
        private _elementRef: ElementRef
    ) {
        this.form = fb.group({});

    }

    ngOnInit(){

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
        for(var key in this.workout.exerciseSets){
            this.addWorkoutExerciseSet(this.workout.exerciseSets[key]);
        }
    }

    routerCanDeactivate(){
        ///if (this.form.dirty)
           // return confirm('You have unsaved changes. Are you sure you want to navigate away?');

        return true;
    }

    save(){
        var result;
        if (this.workout.id)
            result = this._workoutService.updateWorkout(this.workout);
        else
            result = this._workoutService.addWorkout(this.workout);

        result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['Users']);
        });
    }

    
    onSetChange($event){
        this.workout.exerciseSets = Helper.onChange($event, this.workout.exerciseSets);
    }


    addWorkoutExerciseSet($instance?){
        this._dcl.loadIntoLocation(ExerciseSetForm, this._elementRef, 'hook').then((ref: ComponentRef) => {
            ref.instance.output.subscribe(
                v => { this.onSetChange(v); },
                e => { console.log("Error: " + e)},
                () => {
                    this.workout.exerciseSets = Helper.deleteSet(ref, this.workout.exerciseSets, ref.instance.exerciseset)
                });
            if(typeof $instance == 'undefined') {
                ref.instance.exerciseset.id = this.id;
                this.id++;
            }else{
                console.log($instance);
            }
        });

    }


  


}
