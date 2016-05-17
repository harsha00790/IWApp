/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
* Basically reads a file and keeps pushing its data to its clients.
* TODO: Do we need to add a log based filtering over here, decide and do anything --
*/

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.RxSimulator = {
    LoopMode: true, // -- Whether the file should be read continuously --
    CurrentFileOffset: 0,   // -- Indicates the current file pointer location --
    ReadGPSFile: function(filePath, nBytes){
        // -- Function to read a file and pass n-Bytes of data to the generic parser --
        // -- n can be somewhere between 32-128 taken on random --
        // -- Pass the function "PublishToClients" as a call back, so that if the log is completed, then the parser
        // -- will call the callback.
    },

    SimulateRX: function(){
        // -- Read and keep publishing into to clients --
        // -- Randomly generate a number b/w 32-128, read those bytes and update the parser --
    },

    PublishToClients: function(dataArray){
        
    }
};