import {Component, OnInit} from 'angular2/core';
import {WorkoutService} from "./workout.service";


@Component({
    templateUrl: 'app/workout/workout.component.html',
    providers: [WorkoutService]
})
export class WorkoutComponent implements OnInit{

    workouts;

    constructor(private _workoutService: WorkoutService){ }

    ngOnInit(){
        this.workouts = this._workoutService.getWorkouts();

    
    }

}