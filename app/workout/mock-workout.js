System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WORKOUTS;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by max on 3/29/2016.
             */
            exports_1("WORKOUTS", WORKOUTS = [
                {
                    "name": "chest", "exerciseSets": [
                        {
                            "type": "SuperSet", "exercises": [
                                { "exercise": { "name": "chestpress", "musclegroup": { "name": "chest" } }, "reps": 8 },
                                { "exercise": { "name": "chestpress", "musclegroup": { "name": "chest" } }, "reps": 8 }
                            ]
                        },
                        {
                            "type": "Normal", "exercises": [
                                { "exercise": { "name": "chestpress", "musclegroup": { "name": "chest" } }, "reps": 8 }
                            ]
                        }
                    ]
                },
                {
                    "name": "back", "exerciseSets": [
                        {
                            "type": "SuperSet", "exercises": [
                                { "exercise": { "name": "Deadlift", "musclegroup": { "name": "chest" } }, "reps": 8 },
                                { "exercise": { "name": "Row", "musclegroup": { "name": "chest" } }, "reps": 8 }
                            ]
                        },
                        {
                            "type": "Normal", "exercises": [
                                { "exercise": { "name": "Pull up", "musclegroup": { "name": "chest" } }, "reps": 8 }
                            ]
                        }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-workout.js.map