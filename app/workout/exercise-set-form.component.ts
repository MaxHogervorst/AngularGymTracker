import {
    Component, OnInit, DynamicComponentLoader, ElementRef,    ComponentRef
} from 'angular2/core';
import {ExerciseSet} from "./exercise-set";
import {ExerciseService} from "../exercise/exercise.service";
import {ExerciseSetDetailsForm} from "./exercise-set-details-form.component";
import {Subject} from "rxjs/Subject";
import {Helper} from '../assets/helper.functions';


@Component({
    selector: 'exercise-set-form',
    templateUrl: 'app/workout/exercise-set-form.component.html',
    directives: [ExerciseSetDetailsForm],
    providers: [ExerciseService]

})
export class ExerciseSetForm implements OnInit{


    exerciseset = new ExerciseSet();
    output: Subject<ExerciseSet> = new Subject();
    id = 1;

    constructor(
        private _dcl: DynamicComponentLoader,
        private _elementRef: ElementRef
    ){
       
    }

    ngOnInit(){
        this.exerciseset.exercises = [];
        this.addWorkoutExerciseSetDetail();
    }

    addWorkoutExerciseSetDetail(){
        this._dcl.loadIntoLocation(ExerciseSetDetailsForm, this._elementRef, 'hook').then((ref: ComponentRef) => {
            ref.instance.test.subscribe(
                v => { this.onSetDetailChange(v); },
                e => { console.log("Error: " + e)},
                () => {
                    this.exerciseset.exercises = Helper.deleteSet(ref, this.exerciseset.exercises, ref.instance.execiseSetDetail)
                }
            );
            ref.instance.execiseSetDetail.id = this.id;
            this.id++;
        });
    }
    remove(){
        if(confirm("Are you sure you want to delete this set?"))
            this.output.complete();
    }


    onSetDetailChange($event){
        this.exerciseset.exercises = Helper.onChange($event, this.exerciseset.exercises);
    }

    updateWorkout(type){
        this.exerciseset.type = type;
        this.output.next(this.exerciseset);
    }
}