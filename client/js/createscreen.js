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
    }
};

Template.createscreen.rendered = function(){
    IWApp.MainContainer.PopulateFooter(IWApp.CreateScreen.ICONSRequired, {
        "ICONHome": IWApp.CreateScreen.OnHomeClick,
        "ICONApply": IWApp.CreateScreen.OnApplyClick,
        "ICONUndo": IWApp.CreateScreen.OnUndoClicked,
        "ICONRedo": IWApp.CreateScreen.OnRedoClicked
    });
};