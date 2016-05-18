import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

    ReceiverLogs = new Mongo.Collection("receiverlogs");
    var deletedCount = ReceiverLogs.remove({});
    console.log("deleted count is ---",deletedCount);

    // From Buffer to ArrayBuffer:
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
    var dataBuffer = new Buffer(Assets.getBinary("LogList.GPS"));

    //converting the Buffer data to ArrayBuffer required by the generic Parser
    var gpsArrayBufferData = toArrayBuffer(dataBuffer);

    //Passing the ArrayBuffer data to generic parser to get the logs.
    WebSocketReader.processMessage_(gpsArrayBufferData);


    var list = ReceiverLogs.find();
    console.log("Total Documents in the collection---",list.count());
    list.forEach(function (log) {
        console.log("Log ID: " + log.msgId + ", time: " + log.date);
    });
    
});
