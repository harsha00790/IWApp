logHelpers = (function(){

    //get Id of the log by name,if not found return -1;
    var getIdFromName = function (logName)
    {
        if(!logName)
        {
            return -1;
        }
        var name = logName.toUpperCase();
        var tempId = logIdMap[name];
        if(!tempId)
        {
            return -1;
        }
        return tempId;
    };

    var getFieldOffsetByName = function(logName,feildName)
    {

        //final offset object, used to extract data from the packet.
        var offesetObject = {
            "CAAO":-1,
            "CABO":-1,
            "DataType":'',
            "NoOfBytes":0,
            "Offset":0,
            "status":false
        };

        //getting log structure with all its field names from the global "OFFSETMAP"
        var tempData = offsetMap[logName];
        if(!tempData)
        {
            console.log("getFieldOffsetByName::given LOG not found in the map for----",logName);
            return offesetObject;
        }

        //
        var tempCABO = [];
        tempCABO = tempData["CABO"];
        if(tempCABO && tempCABO.length)
        {
            if(tempCABO[0] >= 0)
            {
                offesetObject.CABO = parseInt(tempCABO[0]);
            }
        }

        //
        var tempCAAO = [];
        tempCAAO = tempData["CAAO"];
        if(tempCAAO && tempCAAO.length)
        {
            if(tempCAAO[0] >= 0)
            {
                offesetObject.CAAO = parseInt(tempCAAO[0]);
            }
        }

        //getting particular field offset details
        var tempFieldOffset = tempData[feildName];
        console.log("Temp Field  " + JSON.stringify(tempFieldOffset));
        if(!tempFieldOffset)
        {
            console.log("getFieldOffsetByName::given field not found in the map--",feildName);
            return offesetObject;
        }

        offesetObject.DataType = tempFieldOffset.DATATYPE;
        offesetObject.NoOfBytes = parseInt(tempFieldOffset.NOOFBYTES);
        offesetObject.Offset = parseInt(tempFieldOffset.OFFSET);
        offesetObject.status = true;

        console.log("offesetObject-----FOUND--for------",logName,feildName,"---------",offesetObject);

        return offesetObject;
    };

    //for test purpose...
    //getIdFromName("SITEUPDATENUMBER");
    //getFieldOffsetByName("SITEUPDATENUMBER",'Reserved');

    var getFieldOffsetById = function ()
    {

    };

    // -- Function to get the list of all the lgos which ahve the list of params and other supporting data --
    var getLogsList = function()
    {
        var keys = Object.keys(offsetMap);
        return keys;
    };

    var getParamsForLog = function(logName)
    {
        logName = logName.toUpperCase();
        var logObj = offsetMap[logName];
        if(typeof logObj == "object")
        {
            var keys = Object.keys(logObj);
            return keys;
        }

        return [];
    };

    return{
        getIdFromName_ : getIdFromName,
        getFieldOffSetByName_ :getFieldOffsetByName,
        getFieldOffSetById_  : getFieldOffsetById,
        getLogsList_ : getLogsList,
        getParamsForLog_ : getParamsForLog
    }
}());