import {Component, OnInit} from 'angular2/core';
import {ExerciseService} from "./exercise.service";


@Component({
    templateUrl: 'app/exercise/exercise.component.html'
})
export class ExerciseComponent implements OnInit{

    exercises;

    constructor(private _exerciseService: ExerciseService){}

    ngOnInit(){
        this.exercises = this._exerciseService.getExercises()
    }

}