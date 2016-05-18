/**
 * Created by rlakkoju on 5/17/2016.
 */

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.CreateScreen = {
    ICONSRequired: ["ICONHome", "ICONApply", "ICONUndo", "ICONRedo"],
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
    CloneLabelToDA: function(position, size, element){
        var elChildren = element.children();
        var p = $(elChildren[0]).clone();
        p.addClass("createscreen-dragtools-element-bg");

        p.css("width", size.width);
        p.css("height", size.height);

        console.log("B" + position.left+"   " +position.top);
        $(p).css({top: position.top, left: position.left, position:'absolute'});

        $(".createscreen-drawarea-board").append(p);
        position = $(p).position();
        console.log("C" + position.left+"   " +position.top);
    },
    CloneFieldToDA: function(position, size, element){

    },
    PopulateDragTools: function(){
        // -- First things first, clear the drag tools list --
        var ulist = $(".createscreen-dragtools-list");
        ulist.empty();

        var element, li;

        // -- Now, start populating the list --
        // -- First the Label --
        element = $("<p>");
        element.addClass("user-label");
        element.text("Label");

        li = $("<div>");
        li.addClass("createscreen-dragtools-element-bg");
        li.append(element);

        ulist.append(li);

        // -- The Button --
        element = $("<button>");
        element.addClass("user-button");
        element.addClass("btn");
        element.addClass("btn-default");
        element.text("Button");

        li = $("<div>");
        li.addClass("createscreen-dragtools-element-bg");
        li.append(element);

        ulist.append(li);

        // -- Now, the field element --
        element = $("<p>");
        element.addClass("user-label");
        element.text("Data-Field");

        li = $("<div>");
        li.addClass("createscreen-dragtools-element-bg");
        li.append(element);

        ulist.append(li);

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
                var child = ((ui.draggable).children())[0];
                if($(child).hasClass("user-label")){
                    var elp = ui.helper.clone();
                    ui.helper.remove();

                    var size = {};
                    size.width = $(ui.draggable).css("width");
                    size.height = $(ui.draggable).css("height");

                    var areaOffset = $(this).offset();
                    var leftPosition  = ui.offset.left;
                    var topPosition   = ui.offset.top;

                    var position = {};
                    position.left = leftPosition;
                    position.top = topPosition;

                    elp.appendTo($(this));

                    // IWApp.CreateScreen.CloneLabelToDA(position, size, ui.draggable);
                }
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

    IWApp.CreateScreen.InitializeDragTools();
};