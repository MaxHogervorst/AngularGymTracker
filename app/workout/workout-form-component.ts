import {Component, OnInit, DynamicComponentLoader, ElementRef, ComponentRef} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';

import {WorkoutService} from "./workout.service";
import {Workout} from "./workout";
import {ExerciseSetForm} from "./exercise-set-form.component";

function compileToComponent(template, directives) {
    @Component({
        selector: 'fake',
        template , directives
    })
    class FakeComponent {};
    return FakeComponent;
}

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
        this.addWorkoutExerciseSet();
        var id = this._routeParams.get("id");

        this.title = id ? "Edit Workout" : "New Workout";

        this.workout.name = "test";
        if (!id)
            return;

        this.workout = this._workoutService.getWorkout(id);
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
            result = this._workoutService.addWorkout(this.workout)

        result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['Users']);
        });
    }

    
    onSetChange($event){
       console.log($event);

    }


    addWorkoutExerciseSet(){
        this._dcl.loadIntoLocation(ExerciseSetForm, this._elementRef, 'hook').then((ref: ComponentRef) => {
            ref.instance.output.subscribe(
                v => { this.onSetChange(v); },
                e => { console.log("Error: " + e)},
                () => {this.deleteSet(ref)})
        });

    }

    deleteSet(ref: ComponentRef){
        ref.dispose();
    }


  


}
