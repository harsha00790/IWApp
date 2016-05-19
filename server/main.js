import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

    //Creating PRESISTENT collection to save data.
    ReceiverLogs = new Mongo.Collection("receiverlogs");

    //clearing the documents in the collection if already exists.Later we can comment this code.
    var deletedCount = ReceiverLogs.remove({});
    console.log("deleted count is ---",deletedCount);

    //CONVERSION:: From Buffer to ArrayBuffer:
    function toArrayBuffer(buffer) {
        var tempLength = buffer.length;
        var ab = new ArrayBuffer(tempLength);
        var view = new Uint8Array(ab);
        for (var i = 0; i < tempLength; ++i) {
            view[i] = buffer[i];
        }
        return ab;
    }

    //Reading the GPS FILE Data from private folder using assets.
    var dataBuffer = new Buffer(Assets.getBinary("bestpos.GPS"));

    //converting the Buffer data to ArrayBuffer required by the generic Parser
    var gpsArrayBufferData = toArrayBuffer(dataBuffer);
    var bufferLength = gpsArrayBufferData.byteLength;
    var startIndex = 0;
    var cutOff = 100;

    function passDataTOParserOnInterval()
    {
        var buffer;
        console.log("startIndex---",startIndex);
        if(startIndex < bufferLength)
        {
            buffer = gpsArrayBufferData.slice(startIndex,startIndex+cutOff);
            startIndex +=  cutOff;
        }
        else
        {
            startIndex = 0;
            buffer = gpsArrayBufferData.slice(startIndex,cutOff);
        }
        //Passing the ArrayBuffer data to generic parser to get the logs.
        WebSocketReader.processMessage_(buffer);

        //printDBValues();

    }
    Meteor.setInterval(passDataTOParserOnInterval,1000);



    function printDBValues() {
        var list = ReceiverLogs.find();
        console.log("Total Documents in the collection---",list.count());
        list.forEach(function (log) {
            console.log("Log ID: " + log.msgId + ", time: " + log.date);
        });
    }

    
});
