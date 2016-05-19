logHelpers = (function(){

    //get Id of the log by name,if not found return -1;
    var getIdFromName = function (logName)
    {
        if(!logName)
        {
            console.log("getIdFromName::logName not passed --undefiend");
            return -1;
        }
        var name = logName.toUpperCase();
        var tempId = logIdMap[name];
        if(!tempId)
        {
            console.log("getIdFromName::logName not found in the map");
            return -1;
        }
        console.log("getIdFromName----",tempId);
        return tempId;
    }

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
        if(!tempFieldOffset)
        {
            console.log("getFieldOffsetByName::given field not found in the map--",feildName);
            return offesetObject;
        }

        offesetObject.DataType = tempFieldOffset.DataType;
        offesetObject.NoOfBytes = parseInt(tempFieldOffset.NoOfBytes);
        offesetObject.Offset = parseInt(tempFieldOffset.Offset);
        offesetObject.status = true;

        console.log("offesetObject-----FOUND--for------",logName,feildName,"---------",offesetObject);

        return offesetObject;
    }

    //for test purpose...
    //getIdFromName("SITEUPDATENUMBER");
    //getFieldOffsetByName("SITEUPDATENUMBER",'Reserved');

    var getFieldOffsetById = function ()
    {

    }
    return{
        getIdFromName_ : getIdFromName,
        getFieldOffSetByName_ :getFieldOffsetByName,
        getFieldOffSetById_  : getFieldOffsetById
    }
}());