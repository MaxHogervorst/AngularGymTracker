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
    getWorkout(workoutId){
        return _.findwhere(WORKOUTS, {id: workoutId});
    }
    addWorkout(workout: Workout){
        WORKOUTS.push(workout);
    }

    deleteWorkout(workoutId){
        return _.without(WORKOUTS, _.findwhere(WORKOUTS, {id: workoutId}));
    }

    updateWorkout(workout: Workout){
        return _.extend(WORKOUTS, _.findwhere(WORKOUTS, {id: workout.id}), workout);
    }
    
    
}