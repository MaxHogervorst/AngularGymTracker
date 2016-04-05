import {Workout} from "./workout";
/**
 * Created by max on 3/29/2016.
 */
export var WORKOUTS: Workout[] = [
    {
        "id": 1,"name": "chest", "exerciseSets":[
            {
                "id": 1, "type": "SuperSet", "exercises":
                    [
                        { "id": 1, "exercise": {"id": 1, "name": "chestpress", "musclegroup": {"name": "chest"}}, "reps": 8 },
                        { "id": 2, "exercise": {"id": 2, "name": "chestpress", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            },
            {
                "id": 2, "type": "Normal", "exercises":
                    [
                        { "id": 1, "exercise": {"id": 1,  "name": "chestpress", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            }
        ]
    },
    {
        "id": 2,"name": "back", "exerciseSets":[
            {
                "id": 1, "type": "SuperSet", "exercises":
                    [
                        { "id": 1, "exercise": {"id": 4, "name": "Deadlift", "musclegroup": {"name": "chest"}}, "reps": 8 },
                        { "id": 2, "exercise": {"id": 6, "name": "Row", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            },
            {
                "id": 2, "type": "Normal", "exercises":
                    [
                        {"id": 1, "exercise": {"id": 3, "name": "Pull up", "musclegroup": {"name": "chest"}}, "reps": 8 }
                    ]
            }
        ]
    }
];

