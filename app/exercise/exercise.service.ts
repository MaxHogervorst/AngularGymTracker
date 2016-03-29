/**
 * Created by max on 3/23/2016.
 */
import {Injectable} from "angular2/core";
import {Exercise} from "./exercise";
import {EXERCISES} from "./mock-exercises";
import {MuscleGroup} from "./muscle-group";
import {MUSCLEGROUPS} from "./mock-musclegroups";

@Injectable()
export class ExerciseService{

    getExercises(): Exercise[]{
        return EXERCISES;
    }

    getMuscleGroups(): MuscleGroup[]{
        return MUSCLEGROUPS;
    }
}