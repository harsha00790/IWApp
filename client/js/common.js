/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
 * Basically JS to have some common client calculation functions --
 */

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.Common = {
    GetKeyForValue: function(value, object){
        if(typeof object == "object"){
            var keys = Object.keys(object);
            for(var i = 0; i < keys.length; i++){
                if(object[keys[i]] == value){
                    return keys[i];
                }
            }
        }

        return "PK";
    },
};