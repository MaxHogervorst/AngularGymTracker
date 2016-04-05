import {
    Component, OnInit, Input, DynamicComponentLoader, ElementRef, EventEmitter, Output,
    ComponentRef, Renderer
} from 'angular2/core';
import {ExerciseSet} from "./exercise-set";
import {ExerciseService} from "../exercise/exercise.service";
import {ExerciseSetDetailsForm} from "./exercise-set-details-form.component";
import {Workout} from "./workout";
import {Subject} from "rxjs/Subject";
import {ExerciseSetDetails} from "./exercise-set-details";

function compileToComponent(template, directives) {
    @Component({
        selector: 'fake',
        template , directives
    })
    class FakeComponent {
        onSetDetailChange($event) {
            console.log("hier");
            console.log($event);
        }
    };
    return FakeComponent;
}

@Component({
    selector: 'exercise-set-form',
    templateUrl: 'app/workout/exercise-set-form.component.html',
    directives: [ExerciseSetDetailsForm],
    providers: [ExerciseService]

})
export class ExerciseSetForm implements OnInit{


    exerciseset = new ExerciseSet();
    output: Subject<ExerciseSet> = new Subject();
    id = 1;

    constructor(
        private _dcl: DynamicComponentLoader,
        private _elementRef: ElementRef
    ){
       
    }

    ngOnInit(){
        this.exerciseset.exercises = [];
        this.addWorkoutExerciseSetDetail();
    }

    addWorkoutExerciseSetDetail(){
        this._dcl.loadIntoLocation(ExerciseSetDetailsForm, this._elementRef, 'hook').then((ref: ComponentRef) => {
            ref.instance.test.subscribe(
                v => { this.onSetDetailChange(v); },
                e => { console.log("Error: " + e)},
                () => {this.deleteSetDetail(ref)}
            );
            ref.instance.execiseSetDetail.id = this.id;
            this.id++;
        });
    }
    remove(){
        this.output.complete();
    }


    onSetDetailChange($event){
        var found  = false;

        for(var key in this.exerciseset.exercises){
            if($event.id == this.exerciseset.exercises[key].id){
                found = true;
                this.exerciseset.exercises[key] = $event;
            }
        }

        if(!found)
            this.exerciseset.exercises.push($event);

        console.log($event);
        console.log(this.exerciseset);
    }
    deleteSetDetail(element: ComponentRef){
        _.reject(this.exerciseset.exercises, function (x) { return x.id == element.instance.execiseSetDetail.id});
        console.log(element);
        //element.dispose();
    }
    updateWorkout(type){
        this.exerciseset.type = type;
        this.output.next(this.exerciseset);
    }
}