System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Helper;
    return {
        setters:[],
        execute: function() {
            (function (Helper) {
                function onChange($event, $array) {
                    var found = false;
                    for (var key in $array) {
                        if ($event.id == $array[key].id) {
                            found = true;
                            $array[key] = $event;
                        }
                    }
                    if (!found)
                        $array.push($event);
                    console.log($event);
                    console.log($array);
                    return $array;
                }
                Helper.onChange = onChange;
                function deleteSet(element, $array, $instance) {
                    $array = _.reject($array, function (x) { return x.id == $instance.id; });
                    element.dispose();
                    return $array;
                }
                Helper.deleteSet = deleteSet;
            })(Helper = Helper || (Helper = {}));
            exports_1("Helper", Helper);
        }
    }
});
//# sourceMappingURL=helper.functions.js.map