/**
 * Created by rlakkoju on 5/19/2016.
 */

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.DataBind = {
    ScreenContainer: function(){
        this.screen = "";
        this.view = "";
    },
    DataScreens: {},
    BindDataScreen: function(screen, view, id){
        IWApp.DataBind.DataScreens[id] = new IWApp.DataBind.ScreenContainer();
        IWApp.DataBind.DataScreens[id].screen = screen;
        IWApp.DataBind.DataScreens[id].view = view;

        IWApp.DataBind.RenderScreen(screen, view);
    },
    UnBindDataScreen: function(id){
        if(id in IWApp.DataBind.DataScreens) {
            delete IWApp.DataBind.DataScreens[id];
        }
    },
    RenderElement: function(element, view){
        // -- Note: Currently, assuming that the view is a relatively placed item. If not additional calculations are required --
        var positionType = $(view).css("position");
        var appendedElement, newEle;
        if(positionType.toLowerCase() == "relative"){
            var type = Number(element.type);
            switch(type){
                case IWApp.CreateScreen.ElementClasses.LABEL:{
                    appendedElement = $(view).find("#" + element.id);
                    if(appendedElement.length == 0){
                        newEle = IWApp.Elements.CreateLabel();

                        // -- Set the text from the properties --
                        $(newEle).find('p').text(element.UIObject.properties.text);

                        $(newEle).attr("id", element.id);

                        // -- Append it to the parent --
                        $(view).append($(newEle));

                        appendedElement = $(view).find("#" + element.id);

                        // -- Now, set that element to be draggable --
                        $(appendedElement).draggable({
                            containment: "parent",
                            stop: function(event, ui){
                                var pos = $(this).position();

                                // -- Update the position of the dragged element --
                                element.UIObject.position.top = pos.top;
                                element.UIObject.position.left = pos.left;
                            }
                        });

                        // -- Now, set the element to be resizable --
                        $(appendedElement).resizable({
                            animate: true,
                            containment: "parent",
                            resize: function(event, ui){
                                var size = $(ui).size();

                                // -- Update the size of the element --
                                element.UIObject.size.width = size.width;
                                element.UIObject.size.height = size.height;
                            }
                        });
                    }

                    // -- Update the label text --
                    $(appendedElement).find('p').text(element.UIObject.properties.text);

                    // -- Update the Position And the Size --
                    appendedElement.css({position: "absolute"});
                    appendedElement.css({width: element.UIObject.size.width, height: element.UIObject.size.height});
                    appendedElement.css({left: element.UIObject.position.left + 7, top: element.UIObject.position.top + 7});

                    // -- Update the Font size --
                    appendedElement.find('p').css({fontSize: element.UIObject.properties.fontsize + "px"});

                    // -- Update color --
                    appendedElement.find('p').css({color: element.UIObject.properties.color});

                    break;
                }
                case IWApp.CreateScreen.ElementClasses.FIELD:{
                    appendedElement = $(view).find("#" + element.id);
                    if(appendedElement.length == 0){
                        newEle = IWApp.Elements.CreateField();

                        // -- Set the text from the properties --
                        $(newEle).find('p').text(element.DataObjects[0].logFieldName);

                        $(newEle).attr("id", element.id);

                        // -- Append it to the parent --
                        $(view).append($(newEle));

                        appendedElement = $(view).find("#" + element.id);

                        // -- Now, set that element to be draggable --
                        $(appendedElement).draggable({
                            containment: "parent",
                            stop: function(event, ui){
                                var pos = $(this).position();

                                // -- Update the position of the dragged element --
                                element.UIObject.position.top = pos.top;
                                element.UIObject.position.left = pos.left;
                            }
                        });

                        // -- Now, set the element to be resizable --
                        $(appendedElement).resizable({
                            animate: true,
                            containment: "parent",
                            resize: function(event, ui){
                                var size = $(ui).size();

                                // -- Update the size of the element --
                                element.UIObject.size.width = size.width;
                                element.UIObject.size.height = size.height;
                            }
                        });
                    }

                    // -- Update the Actual data into the field --
                    var text = element.DataObjects[0].resultValue || "Data-Field";
                    $(appendedElement).find('p').text(text);

                    // -- Update the Position And the Size --
                    appendedElement.css({position: "absolute"});
                    appendedElement.css({width: element.UIObject.size.width, height: element.UIObject.size.height});
                    appendedElement.css({left: element.UIObject.position.left + 7, top: element.UIObject.position.top + 7});

                    break;
                }
            }
        }else{

        }
    },
    RenderScreen: function(screen, view){
        if(typeof screen == "object"){
            // var convertedElements = IWApp.DataBind.SquishElementsToSize(screen.elements);
            var convertedElements = screen.Elements;

            for(var i = 0; i < convertedElements.length; i++){
                IWApp.DataBind.RenderElement(convertedElements[i], view);
            }
        }
    },
    RenderDataToScreen: function(id, packet, screen, view){
        if(typeof screen == "object"){
            for(var i = 0; i < screen.Elements.length; i++){
                var type = screen.Elements[i].type;
                switch(type){
                    case IWApp.CreateScreen.ElementClasses.FIELD:{
                        var msgID = logHelpers.getIdFromName_(screen.Elements[i].DataObjects[0].logName.toUpperCase());
                        if(Number(msgID) == Number(id) && Number(id) > 0){
                            // -- Extract the result value and put it the element value --
                            console.log(screen.Elements[i].DataObjects[0].logName.toUpperCase() + "   " + screen.Elements[i].DataObjects[0].logFieldName.toUpperCase());
                            var offsetInfo = logHelpers.getFieldOffSetByName_(screen.Elements[i].DataObjects[0].logName.toUpperCase(), screen.Elements[i].DataObjects[0].logFieldName.toUpperCase());
                            var dataArray = ExtractPacketData.getData_(packet, offsetInfo);
                            if(dataArray.length > 0){
                                screen.Elements[i].DataObjects[0].resultValue = dataArray[0];
                            }

                            console.log(dataArray + "    DA");
                            // -- Now, render the element again --
                            IWApp.DataBind.RenderElement(screen.Elements[i], view);
                        }
                        break;
                    }
                }
            }
        }
    },
    OnNewData: function(id, packet){
        var keys = Object.keys(IWApp.DataBind.DataScreens);
        for(var i = 0; i < keys.length; i++){
            IWApp.DataBind.RenderDataToScreen(id, packet, IWApp.DataBind.DataScreens[keys[i]].screen, IWApp.DataBind.DataScreens[keys[i]].view);
        }
    },
    Dummy: function(doc){
        var dataKeys = Object.keys(doc.data);
        var ab = new ArrayBuffer(dataKeys.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < dataKeys.length; ++i) {
            view[i] = Number(doc.data[dataKeys[i]]);
        }

        IWApp.DataBind.OnNewData(Number(doc.msgId), ab);
    }
};