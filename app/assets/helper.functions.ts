import {ComponentRef} from "angular2/core";
export module Helper {

    export function onChange($event, $array)
    {
        var found  = false;

        for(var key in $array){
            if($event.id == $array[key].id){
                found = true;
                $array[key] = $event;
            }
        }

        if(!found)
            $array.push($event);

        console.log($event);
        console.log($array);
        return $array;

    }
    export function deleteSet(element: ComponentRef, $array, $instance){
        $array = _.reject($array, function (x) { return x.id == $instance.id});
        element.dispose();
        return $array;
    }
}

