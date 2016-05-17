/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
* The interface which gives the client the offset, size and type information given the Logname and the parameter string
* The logs info is assumed to be stored in the MongoDB, considering we would be having a JSON --
*/

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.LogsInfo = {
    GetDetails: function(logName, parameterName){

        // -- Returns something like this --
        return {
            offset: 0,
            length: 0,
            type: "DOUBLE",
            collectionOffset: 0,
            collectionSize: 0
        }
    },
};