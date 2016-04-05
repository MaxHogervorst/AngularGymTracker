import {Component, OnInit, Input, EventEmitter, Output} from 'angular2/core';
import {ExerciseSetDetails} from "./exercise-set-details";
import {Exercise} from "../exercise/Exercise";
import {ExerciseService} from "../exercise/exercise.service";
import {ExerciseSet} from "./exercise-set";
import {Subject} from "rxjs/Subject";



@Component({
    selector: 'exercise-set-details-form',
    templateUrl: 'app/workout/exercise-set-details-form.component.html',
    providers: [ExerciseService]

})
export class ExerciseSetDetailsForm implements OnInit{

    execiseSetDetail = new ExerciseSetDetails();
    exercises: Exercise[];

    test: Subject<ExerciseSetDetails> = new Subject();


    constructor(private _exerciseService: ExerciseService){

    }
    
    ngOnInit(){
        this.exercises = this._exerciseService.getExercises();

    }

    updateReps(value){
        
        this.execiseSetDetail.reps = value;
        this.test.next(this.execiseSetDetail);
    }

    updateExercise(value){
        this.execiseSetDetail.exercise =  this._exerciseService.getExercise(value);
        this.test.next(this.execiseSetDetail);
    }
    remove(){
        this.test.complete();
    }


   
}