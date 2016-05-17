/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
 * Basically the generic GPS parsing logic for NovAtel logs --
 * TODO: Get the core logic from the WebUI Sources --
 */

var IWApp = typeof(IWApp == "undefined")?({}):IWApp;

IWApp.GPSParser = {
    CurrentPacket: 0,
    ParseData: function(dataArray, callback){
        // -- Once you manage to get a complete packet, call the call back --
    }
};