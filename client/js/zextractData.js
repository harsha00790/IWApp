ExtractPacketData = (function(){

    var headerLength = 28;
    var CRCLength = 4;

    var getExtractedData = function (packet_,offsetInfo_) {
        var packetLength = packet_.byteLength;
        console.log("offsetInfo_---------------",offsetInfo_);
        var finalArray = [];
        if(!offsetInfo_.status)
        {
            console.log("getExtractedData::offset Object has  been found improper---");
            return finalArray;
        }


        if(offsetInfo_.CAAO == -1 || offsetInfo_.CABO == -1)
        {

            var end = packetLength-CRCLength;
            var reqPacket = packet_.slice(headerLength,end);
            var dataView = new DataView(reqPacket);
            var expr = offsetInfo_.DataType;
            switch (expr) {
                case "DOUBLE":
                    var testData = dataView.getFloat64(offsetInfo_.Offset, true);
                    finalArray.push(testData);
                    break;
                case "FLOAT":
                    dataView.getFloat32(offsetInfo_.Offset, true);
                    break;
                default:
                    console.log("Sorry, we are out of " + expr + ".");
            }
        }
        else
        {
            console.log("other type---");
        }
        console.log("finalArray---------",finalArray);
    }

    return {
        getData_:getExtractedData
    }
}());