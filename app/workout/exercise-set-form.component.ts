import {Component, OnInit, Input, DynamicComponentLoader, ElementRef, EventEmitter, Output} from 'angular2/core';
import {ExerciseSet} from "./exercise-set";
import {ExerciseService} from "../exercise/exercise.service";
import {ExerciseSetDetailsForm} from "./exercise-set-details-form.component";
import {Workout} from "./workout";

function compileToComponent(template, directives) {
    @Component({
        selector: 'fake',
        template , directives
    })
    class FakeComponent {
        onSetDetailChange($event) {
            console.log("hier");
            console.log($event);
        }
    };
    return FakeComponent;
}

@Component({
    selector: 'exercise-set-form',
    templateUrl: 'app/workout/exercise-set-form.component.html',
    directives: [ExerciseSetDetailsForm],
    providers: [ExerciseService]

})
export class ExerciseSetForm implements OnInit{

    @Input() _workout: Workout;
    @Output() change = new EventEmitter();

    exerciseset = new ExerciseSet();

    constructor(
        private _dcl: DynamicComponentLoader,
        private _elementRef: ElementRef
    ){}

    ngOnInit(){

    }

    addWorkoutExerciseSetDetail(){

        var setdetail = '<exercise-set-details-form (change)="onSetDetailChange($event)"></exercise-set-details-form>';
        this._dcl.loadIntoLocation(ExerciseSetDetailsForm, this._elementRef, 'hook').then;

    }

    onSetDetailChange($event){
        console.log($event);
    }
    updateWorkout(type){
        this.exerciseset.type = type;
        this.change.emit(this.exerciseset);
    }
}