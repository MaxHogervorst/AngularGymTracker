import {Component, OnInit, Input, EventEmitter, Output} from 'angular2/core';
import {ExerciseSetDetails} from "./exercise-set-details";
import {Exercise} from "../exercise/Exercise";
import {ExerciseService} from "../exercise/exercise.service";
import {ExerciseSet} from "./exercise-set";



@Component({
    selector: 'exercise-set-details-form',
    templateUrl: 'app/workout/exercise-set-details-form.component.html',
    providers: [ExerciseService]

})
export class ExerciseSetDetailsForm implements OnInit{

    @Input() _exerciseSet: ExerciseSet;
    @Output() change = new EventEmitter();
    execiseSetDetail = new ExerciseSetDetails();
    exercises: Exercise[];


    constructor(private _exerciseService: ExerciseService){
        
    }
    
    ngOnInit(){
        this.exercises = this._exerciseService.getExercises();
    }

    updateReps(value){
        this.execiseSetDetail.reps = value;
        this.change.emit(this.execiseSetDetail);
    }

    updateExercise(value){
        this.execiseSetDetail.exercise =  this._exerciseService.getExercise(value);
        this.change.emit(this.execiseSetDetail);
    }

   
}