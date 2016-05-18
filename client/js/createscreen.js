/**
 * Created by rlakkoju on 5/17/2016.
 */

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.CreateScreen = {
    ICONSRequired: ["ICONHome", "ICONApply", "ICONUndo", "ICONRedo"],
    ElementClasses: {
        LABEL: 0,
        FIELD: 1,
        ACTION: 2,
        CUSTOM: 3,
        UNKNOWN: 4
    },
    CustomClassElements: {
        POLARGRID: 0
    },
    ActionClassElements: {
        BUTTON: 0
    },
    UserInterface: {
        ScreenRes:{
            Width: 0,
            Height: 0
        },
        Elements:[]
    },
    UIObject: function(){
        this.id = "element";
        this.position = {}; // -- top and left
        this.size = {}; // -- Width and Height
        this.style = {};    // -- For Future Use .. :P
        this.properties = {};
    },
    DataObject: function(){
        this.logName = "";
        this.logID = "";
        this.logFieldName= "";
        this.logFieldOffset = "";
        this.logFieldSize = "";
        this.logFieldType = "";
        this.repeatField = false;
        this.repeatOffset = "";
        this.repeatSize = "";
        this.resultValue = "";
    },
    ComplexDataObjects: function(){
        this.DataObjects = [];
        this.processor = "";
        this.resultValue = "";
    },
    Element: function(){
        this.id = "";
        this.type = IWApp.CreateScreen.ElementClasses.UNKNOWN;
        this.specificType = "";
        this.UIObject = {};
        this.DataObjects = [];
        this.ComplexDataObjects = [];
    },
    OnHomeClick: function(){
        // var view = Blaze.getView($(".main-content"))[0];
        // Blaze.remove(view);
        $(".main-content").children().remove();
        Blaze.render(Template.dashboard, $(".main-content")[0]);
    },
    OnApplyClick: function(){
        console.log("Apply Clicked");
    },
    OnUndoClicked: function(){
        console.log("Undo Clicked");
    },
    OnRedoClicked: function(){
        console.log("Redo Clicked");
    },
    CloneElementToDA: function(element, position, size){
        // -- Currently, we want to actually clone the element in the div, so do that --
        // var actElement = $(element).children();
        var actElement = $(element).clone();
        if(actElement.length > 0){
            // actElement = actElement[0];

            var type = Number($(actElement).attr("data-etype"));
            var specificType = Number($(actElement).attr("data-especifier"));

            var screenElement = new IWApp.CreateScreen.Element();
            screenElement.UIObject = new IWApp.CreateScreen.UIObject();

            var date = new Date();
            var components = [
                Math.floor((Math.random() * 10) + 1),
                date.getYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds(),
                Math.floor((Math.random() * 100) + 1)
            ];

            var id = components.join("");
            screenElement.UIObject.id = id;
            screenElement.id = id;

            switch(type){
                case IWApp.CreateScreen.ElementClasses.LABEL:{
                    screenElement.type = IWApp.CreateScreen.ElementClasses.LABEL;
                    screenElement.UIObject.position.top = position.top;
                    screenElement.UIObject.position.left = position.left;
                    screenElement.UIObject.size.width = size.width;
                    screenElement.UIObject.size.height = size.height;

                    screenElement.UIObject.properties.text = actElement.find("p").text();
                    // -- Remember, you need to overwrite the position and size over the class --
                    screenElement.UIObject.properties.class = $(actElement).attr('class');
                    break;
                }
                case IWApp.CreateScreen.ElementClasses.ACTION:{
                    switch(specificType){
                        case IWApp.CreateScreen.ActionClassElements.BUTTON:{
                            screenElement.type = IWApp.CreateScreen.ElementClasses.LABEL;
                            screenElement.specificType = IWApp.CreateScreen.ActionClassElements.BUTTON;
                            screenElement.UIObject.position.top = position.top;
                            screenElement.UIObject.position.left = position.left;
                            screenElement.UIObject.size.width = size.width;
                            screenElement.UIObject.size.height = size.height;
                            break;
                        }
                    }
                    break;
                }
                case IWApp.CreateScreen.ElementClasses.FIELD:{
                    screenElement.type = IWApp.CreateScreen.ElementClasses.FIELD;
                    screenElement.UIObject.position.top = position.top;
                    screenElement.UIObject.position.left = position.left;
                    screenElement.UIObject.size.width = size.width;
                    screenElement.UIObject.size.height = size.height;

                    screenElement.DataObjects.push(new IWApp.CreateScreen.DataObject());

                    screenElement.UIObject.properties.text = actElement.find("p").text();
                    break;
                }
                case IWApp.CreateScreen.ElementClasses.CUSTOM:{
                    break;
                }
                default:
                case IWApp.CreateScreen.ElementClasses.UNKNOWN:{
                    break;
                }
            }

            IWApp.CreateScreen.RenderElementToView(screenElement, $(".createscreen-drawarea-board"));
        }
    },
    RenderElementToView: function(element, view){
        // -- Note: Currently, assuming that the view is a relatively placed item. If not additional calculations are required --
        var positionType = $(view).css("position");
        if(positionType.toLowerCase() == "relative"){
            var type = Number(element.type);
            switch(type){
                case IWApp.CreateScreen.ElementClasses.LABEL:{
                    var newEle = IWApp.Elements.CreateLabel();

                    // -- Set the text from the properties --
                    $(newEle).find('p').text(element.UIObject.properties.text);

                    $(newEle).attr("id", element.id);

                    // -- Append it to the parent --
                    $(view).append($(newEle));

                    $(view).find("#" + element.id).css({position: "absolute"});
                    $(view).find("#" + element.id).css({width: element.UIObject.size.width, height: element.UIObject.size.height});
                    $(view).find("#" + element.id).css({left: element.UIObject.position.left + 7, top: element.UIObject.position.top + 7});

                    break;
                }
            }
        }else{

        }
    },
    PopulateDragTools: function(){
        // -- First things first, clear the drag tools list --
        var ulist = $(".createscreen-dragtools-list");
        ulist.empty();

        var element;

        // -- Now, start populating the list --
        // -- First the Label --
        element = IWApp.Elements.CreateLabel();
        ulist.append(element);

        // -- The Button --
        element = IWApp.Elements.CreateButton();
        ulist.append(element);

        // -- Now, the field element --
        element = IWApp.Elements.CreateField();
        ulist.append(element);

        // -- Set the flag to true --
        IWApp.CreateScreen.DragToolsPopulated = true;
    },
    InitializeDragTools: function(){
        // -- First things first, create them --
        IWApp.CreateScreen.PopulateDragTools();

        // -- First, make all the li in the drag tools kit draggable --
        var uList = $(".createscreen-dragtools-list");
        $(".createscreen-dragtools-list div").draggable({
            opacity: 0.9,
            helper: function(ev, ui) {
                var $elem = $(this);
                var pos = $elem.offset();
                var dX = ev.pageX - pos.left;
                var dY = ev.pageY - pos.top;

                $clone = $elem.clone();
                $clone.css("width", $(this).css("width"));
                $clone.css("height", $(this).css("height"));

                $(this).draggable("option", "cursorAt", {
                    left: dX,
                    top: dY
                });

                return $clone;
            },
        });

        // -- Now, make the draw area droppable --
        $(".createscreen-drawarea-board").droppable({
            accept: ".createscreen-dragtools-list div",
            activeClass: "createscreen-drawarea-board-hover",
            hoverClass: "createscreen-drawarea-board-hover",
            drop: function(event, ui){
                var elp = ui.helper.clone();
                ui.helper.remove();

                var size = {};
                size.width = $(ui.draggable).css("width");
                size.height = $(ui.draggable).css("height");

                // -- Not really a piece of code i'm proud of --

                var dummyTemplate = $(elp).clone();
                dummyTemplate.css({width: 0, height: 0});
                dummyTemplate.addClass("dummy");
                dummyTemplate.appendTo($(this));

                var position = {};
                position.left = $(dummyTemplate).position().left - $(this).position().left;
                position.top = $(dummyTemplate).position().top - $(this).position().top;

                $(this).find(".dummy").remove();

                $(elp).css({top: position.top, left:position.left});

                IWApp.CreateScreen.CloneElementToDA(elp, position, size);
            }
        });
    }
};

Template.createscreen.rendered = function(){
    IWApp.MainContainer.PopulateFooter(IWApp.CreateScreen.ICONSRequired, {
        "ICONHome": IWApp.CreateScreen.OnHomeClick,
        "ICONApply": IWApp.CreateScreen.OnApplyClick,
        "ICONUndo": IWApp.CreateScreen.OnUndoClicked,
        "ICONRedo": IWApp.CreateScreen.OnRedoClicked
    });

    IWApp.CreateScreen.UserInterface.ScreenRes.Width = 0;
    IWApp.CreateScreen.UserInterface.ScreenRes.Height = 0;
    IWApp.CreateScreen.UserInterface.Elements = [];

    IWApp.CreateScreen.InitializeDragTools();
};