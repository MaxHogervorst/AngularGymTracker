/**
 * Created by max on 3/29/2016.
 */
import {Injectable} from "angular2/core";
import {Workout} from "./workout";
import {WORKOUTS} from "./mock-workout";

@Injectable()
export class WorkoutService {

    getWorkouts(): Workout[]
    {
        return WORKOUTS;
    }
}