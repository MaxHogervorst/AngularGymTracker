import {Workout} from "./workout";
/**
 * Created by max on 3/29/2016.
 */
export var WORKOUTS: Workout[] = [
    {
        "name": "chest", "exerciseSets":[
            {
                "type": "SuperSet", "exercises":
                    [
                        { "exercise": {"name": "chestpress", "musclegroup": {"name": "chest"}}, "reps": 8 },
                        { "exercise": {"name": "chestpress", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            },
            {
                "type": "Normal", "exercises":
                    [
                        { "exercise": {"name": "chestpress", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            }
        ]
    },
    {
        "name": "back", "exerciseSets":[
            {
                "type": "SuperSet", "exercises":
                    [
                        { "exercise": {"name": "Deadlift", "musclegroup": {"name": "chest"}}, "reps": 8 },
                        { "exercise": {"name": "Row", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            },
            {
                "type": "Normal", "exercises":
                    [
                        { "exercise": {"name": "Pull up", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            }
        ]
    }
];

