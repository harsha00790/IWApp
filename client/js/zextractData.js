ExtractPacketData = (function(){

    var headerLength = 28;
    var CRCLength = 4;

    var getExtractedData = function (packet_,offsetInfo_) {
        var packetLength = packet_.byteLength;
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
            if(typeof expr != "string"){
                expr = "";
            }
            expr = expr.toUpperCase();
            if(expr.indexOf("ENUM") >= 0){
                expr = "ENUM";
            }
            var info = 0;
            switch (expr) {
                case "DOUBLE":
                    info = dataView.getFloat64(offsetInfo_.Offset, true);
                    break;
                case "FLOAT":
                case "GPSSEC":
                    info = dataView.getFloat32(offsetInfo_.Offset, true);
                    break;
                case "ULONG":
                case "ENUM":
                    info = dataView.getUint32(offsetInfo_.Offset, true);
                    break;
                case "CHAR":
                    info = dataView.getInt8(offsetInfo_.Offset);
                    break;
                case "UCHAR":
                    info = dataView.getUint8(offsetInfo_.Offset);
                    break;
                case "SHORT":
                    info = dataView.getInt16(offsetInfo_.Offset, true);
                    break;
                case "USHORT":
                    info = dataView.getUint16(offsetInfo_.Offset, true);
                    break;
                default:
                    break;
            }

            finalArray.push(info);
        }
        else
        {
            console.log("other type---");
        }
        return finalArray;
        console.log("finalArray---------",finalArray);
    }

    return {
        getData_:getExtractedData
    }
}());