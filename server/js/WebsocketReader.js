

//singleton class for websocket
WebSocketReader= (function(){

    var websoc;
    var messagetype = "";

    var g_waitingForNextPacket = false;
    var g_waitingForNextAsciiPacket = false;
    var temp_ascii_packet;
    var ascii_endchar_found = false;
    var ascii_log_endchar_found = false;

    //found these intializer list from index.js of webui
    var g_ints, g_oldDataView, g_crcLen = 4;
    var g_expectOtherPacket = false, g_startOfNextPacket = true, g_waitingForNextPacket = false, g_bytesInNextPacket = 0;
    var satvis_data = new Array(), track_data, track_rend = 0, satvis2_rend = 0;
    var totalLen, temp_buffer, temp_length = 0, temp_index_st_r = 0;

    //create a websocket if not created otherwise return existing one
    var init = function(url) {
        if(!websoc)
        {

        }
        else
        {
            return websoc;
        }
    };
    var webSocketReader = function(socket)
    {
        websoc = socket;
    };


    var processMessage = function(data)
    {
        var eventdata = data;
        if(typeof eventdata === "object");
        {
            if(eventdata.byteLength > 0)
            {
                temp_index_st_r = 0;
                readMessage(eventdata, 0);
            }
        }
    };

    /*	reads the message , identifies whether it is ASCII or BINARY and calls the appropriate read function */
    var readMessage = function(data, index)
    {
        var dataview = new jDataView(data, index);

        var arr_buff = new Uint8Array(dataview.byteLength);

        for(var i = 0;i < dataview.byteLength; i++)
        {
            arr_buff[i] = dataview.getUint8(i);
        }

        if (g_waitingForNextPacket)
        {
            if(messagetype ==  "BINARY")
            {
                readBinaryMessage(data, index);
            }
        }

        else if (g_waitingForNextAsciiPacket)
        {
            if(messagetype ==  "ASCII")
            {
                readASCIIMessage(data, index);
            }
        }

        else
        {
            var start_char = dataview.getString(1, 0);

            if( start_char == "#" ) //start of ascii packet
            {
                messagetype = "ASCII";
                readASCIIMessage(data, index);
            }
            else if(dataview.getUint8(0) == 170 && dataview.getUint8(1) == 68 && dataview.getUint8(2) == 18)	//start of binary packet
            {
                messagetype = "BINARY";
                readBinaryMessage(data, index);
            }
        }

    };

    /*	parses the asciimessage , does the validation , routes back to basecontroller */
    var readASCIIMessage = function(data, index)
    {

        var dataview = new jDataView(data, index);

        var start_char = dataview.getString(1, 0);
        var next_three_chars = dataview.getString(3, 1);
        var ascii_endchar_index;
        var arr_buff;
        var complete_ascii_packet;

        arr_buff = new Uint8Array(dataview.byteLength);

        for(var i = 0;i < dataview.byteLength; i++)
        {
            arr_buff[i] = dataview.getUint8(i);
        }

        if(g_waitingForNextAsciiPacket)
        {
            for (var ind = 0; ind < dataview.byteLength; ind++)
            {
                if ( dataview.getString(1, ind) == "*" )
                {
                    ascii_endchar_found = true;
                    ascii_endchar_index = ind;
                    break;
                }
            }

            if ( ascii_endchar_found )
            {
                ascii_endchar_found = false;
                g_waitingForNextAsciiPacket = false;
                var total_length = ascii_endchar_index + 11;
                if( dataview.byteLength == total_length )
                {
                    var arrBufferFinal =  jDataView.wrapBuffer(arr_buff);
                    complete_ascii_packet = mergeAsciiPacket(temp_ascii_packet.buffer, arrBufferFinal);
                    messagetype = "";
                    //BaseController.routeAsciiPacket(complete_ascii_packet);
                    console.log("ASCII--139");

                }
                else if( dataview.byteLength > total_length )
                {
                    var arrBufferTemp;
                    for(var i = 0;i < total_length; i++)
                    {
                        arrBufferTemp[i] = dataview.getUint8(i);
                    }

                    complete_ascii_packet = mergeAsciiPacket(temp_ascii_packet.buffer, arrBufferTemp);
                    messagetype = "";
                    //BaseController.routeAsciiPacket(complete_ascii_packet);
                    console.log("ASCII--153");
                    readMessage(dataview, dataview.byteLength - total_length);
                }
            }
            else
            {
                g_waitingForNextAsciiPacket = true;

                var arrBufferTemp =  jDataView.wrapBuffer(arr_buff);
                var temp_ascii_packet1 = new jDataView(arrBufferTemp);
                temp_ascii_packet = mergeAsciiPacket( temp_ascii_packet1, temp_ascii_packet );
            }
        }
        else
        {
            if( start_char == "#")
            {
                for(var ind = 0; ind < dataview.byteLength; ind++)
                {
                    if( dataview.getString(1, ind) == "*" )
                    {
                        ascii_endchar_found = true;
                        ascii_endchar_index = ind;
                        break;
                    }
                }

                if ( ascii_endchar_found )
                {
                    ascii_endchar_found = false;
                    g_waitingForNextAsciiPacket = false;

                    var total_length = ascii_endchar_index + 11;
                    if( dataview.byteLength == total_length )
                    {
                        var arrBufferFinal =  jDataView.wrapBuffer(arr_buff);
                        complete_ascii_packet = new jDataView(arrBufferFinal);
                        messagetype = "";
                        //BaseController.routeAsciiPacket(complete_ascii_packet);
                        console.log("ASCII--192");
                    }
                    else if( dataview.byteLength > total_length )
                    {
                        var arrBufferFinal =  jDataView.wrapBuffer(arr_buff);
                        complete_ascii_packet = new jDataView(arrBufferFinal);
                        messagetype = "";
                        //BaseController.routeAsciiPacket(complete_ascii_packet);
                        console.log("ASCII--200");
                        readMessage(dataview, dataview.byteLength - total_length);
                    }
                }

                else
                {
                    g_waitingForNextAsciiPacket = true;
                    temp_ascii_packet = dataview;
                }

            }
        }

    };


    var readTextMessage = function()
    {
    };

    var readBinaryMessage = function(data, index)
    {
        var dataview = new DataView(data, index);
        if(g_waitingForNextPacket)
        {
            g_waitingForNextPacket = false;
            if(g_bytesInNextPacket >= dataview.byteLength)
            {
                temp_index_st_r = temp_index_st_r + g_bytesInNextPacket;
                g_bytesInNextPacket = g_bytesInNextPacket - dataview.byteLength;
                g_waitingForNextPacket = true;
                g_oldDataView = mergePackets(g_oldDataView, dataview, dataview.byteLength);
                if(g_bytesInNextPacket <= 0)
                {
                    g_waitingForNextPacket = false;
                    var g_t_arr_buff = gen_array_buffer(g_oldDataView, 0);
                    var mid = g_oldDataView.getUint16(4, true);
                    messagetype = "";
                    insertIntoDB(mid, g_t_arr_buff);

                }
            }
            else
            {
                dataviewNew = mergePackets(g_oldDataView, dataview, g_bytesInNextPacket);
                if(dataview.byteLength == g_bytesInNextPacket)
                {
                    temp_index_st_r = temp_index_st_r + g_bytesInNextPacket;
                    g_waitingForNextPacket = false;
                    var g_t_arr_buff = gen_array_buffer(dataviewNew, 0);
                    var mid = dataviewNew.getUint16(4, true);
                    insertIntoDB(mid, g_t_arr_buff);
                }
                else if(dataview.byteLength > g_bytesInNextPacket)
                {
                    temp_index_st_r = temp_index_st_r + g_bytesInNextPacket;
                    g_waitingForNextPacket = false;
                    var g_t_arr_buff = gen_array_buffer(dataviewNew, 0);
                    var mid = dataviewNew.getUint16(4, true);
                    messagetype = "";
                    insertIntoDB(mid, g_t_arr_buff);
                    readMessage(data, g_bytesInNextPacket);
                }
            }
        }
        else if(dataview.byteLength + temp_length >= 10)
        {
            var arr_buff = 0;
            if(temp_length > 0)
            {
                var i = 0;
                arr_buff = new Uint8Array(dataview.byteLength + temp_length);
                for(i = 0;i < temp_length; i++)
                    arr_buff[i] = temp_buffer[i];
                for(var k = 0; k < dataview.byteLength; k++, i++)
                    arr_buff[i] = dataview.getUint8(k);
                arr_buff = jDataView.wrapBuffer(arr_buff);
                dataview = new DataView(arr_buff, 0);
                delete temp_buffer;
                temp_buffer = 0;
            }
            temp_length = 0;
            if(dataview.getUint8(0) == 170 && dataview.getUint8(1) == 68 && dataview.getUint8(2) == 18)//start of packet
            {
                var headerLen = dataview.getUint8(3);
                var messageLen = dataview.getUint16(8, true);
                totalLen = headerLen + messageLen + g_crcLen;
                if((dataview.byteLength - temp_index_st_r) == totalLen)
                {
                    g_waitingForNextPacket = false;
                    dataviewNew = completePacket(dataview, totalLen);
                    var g_t_arr_buff = gen_array_buffer(dataviewNew, 0);
                    var mid = dataviewNew.getUint16(4, true);
                    messagetype = "";
                    insertIntoDB(mid, g_t_arr_buff);
                }
                else if((dataview.byteLength - temp_index_st_r) > totalLen)
                {
                    g_waitingForNextPacket = false;
                    dataviewNew = completePacket(dataview, totalLen);
                    var g_t_arr_buff = gen_array_buffer(dataviewNew, 0);
                    var mid = dataviewNew.getUint16(4, true);
                    messagetype = "";
                    insertIntoDB(mid, g_t_arr_buff);
                    temp_index_st_r = temp_index_st_r + totalLen;
                    readMessage(data, temp_index_st_r);
                }
                else if((dataview.byteLength - temp_index_st_r) < totalLen)
                {
                    g_waitingForNextPacket = true;
                    g_oldDataView = dataview;
                    g_bytesInNextPacket = totalLen - dataview.byteLength;
                }
            }
        }
        else if(dataview.byteLength < 10)
        {
            temp_buffer = new Uint8Array(dataview.byteLength);
            for(var i = temp_length; i < temp_length + dataview.byteLength; i++)
            {
                temp_buffer[i] = dataview.getUint8(i);
            }
            temp_length = temp_length + dataview.byteLength;
        }
        else
        {
            //Forget it.
        }
    };

    var completePacket = function(packetData, length)
    {
        /*var ints = new Uint8Array(length);
        for (var i = 0; i < ints.length; i++)
        {
            ints[i] = packetData.getUint8(i);
        }
        var arrBufferFinal =  jDataView.wrapBuffer(ints);
        var dataviewNew = new DataView(arrBufferFinal);
        return dataviewNew;*/

        var ab = new ArrayBuffer(length);
        var ints = new Uint8Array(ab);
        for (var i = 0; i < ints.length; i++)
        {
            ints[i] = packetData.getUint8(i);
        }
        var arrBufferFinal =  jDataView.wrapBuffer(ab);
        var dataviewNew = new DataView(arrBufferFinal);
        return dataviewNew;

    };

    var mergePackets = function(packetData, packetData2, length)
    {
        var message_id = packetData.getUint16(4,true);
        var ints = new Uint8Array(packetData.byteLength+length);
        var i = 0;
        for (; i < packetData.byteLength; i++)
        {
            ints[i] = packetData.getUint8(i);
        }
        for (var k = 0; k < length; k++,i++)
        {
            ints[i] = packetData2.getUint8(k);
        }
        var arrBufferMerged = jDataView.wrapBuffer(ints);
        var dataviewNew = new DataView(arrBufferMerged);
        return dataviewNew;
    };

    var gen_array_buffer = function(dataview, index)
    {
        var ints = new Uint8Array(dataview.byteLength - index);
        for (var i = index; i < dataview.byteLength; i++)
        {
            ints[i] = dataview.getUint8(i);
        }
        var arrBuffer = jDataView.wrapBuffer(ints);
        return arrBuffer;
    }


    /* accepts 2 array buffers , merge them, create a jdataview and return	*/
    var mergeAsciiPacket = function(data1, data2)
    {

        var dataview1 = new jDataView(data1);
        var dataview2 = new jDataView(data2);


        var mergedPacket = new Uint8Array(dataview1.byteLength + dataview2.byteLength);

        for (var i=0; i < dataview1.byteLength; i++)
        {
            mergedPacket[i] = dataview1.getUint8(i);
        }

        for (var j=0; j < dataview2.byteLength; j++,i++)
        {
            mergedPacket[i] = dataview2.getUint8(j);
        }

        var mergedPacket =  jDataView.wrapBuffer(mergedPacket);
        var dataviewNew = new jDataView(mergedPacket);
        return dataviewNew;
    }


    var insertIntoDB = function(msgId_,data_)
    {
        //Search if document already exists, if found update it--- if not found create new document
        var ret = ReceiverLogs.update(
            { "msgId": msgId_},
            { msgId:msgId_,data:data_,date:Date.now() },
            { upsert: true }
        );
    }

//public interface for required functions
    return{
        processMessage_:processMessage,
        readTextMessage_:readTextMessage
    };

}());
