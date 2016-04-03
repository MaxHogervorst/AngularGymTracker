import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './shared/navbar.component';
import {ExerciseComponent} from "./exercise/exercise.component";
import {WorkoutComponent} from "./workout/workout.component";
import {WorkoutFormComponent} from "./workout/workout-form-component";


@RouteConfig([
    { path: '/', name: 'Home', component: ExerciseComponent },
    { path: '/workouts', name: 'Workouts', component: WorkoutComponent },
    { path: '/workouts/new', name: 'NewWorkout', component: WorkoutFormComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }