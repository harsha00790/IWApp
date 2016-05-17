/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
* Basically all the event handlings related to dashboard and UI manipulation
*/

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.DashBoard = {
    ICONSRequired: ["ICONAdd", "ICONRemove", "ICONEdit", "ICONHelp"],
    OnADDClick: function(){
        // var view = Blaze.getView($(".main-content"))[0];
        // Blaze.remove(view);
        // Blaze.remove(Template.dashboard);
        $(".main-content").children().remove();
        Blaze.render(Template.createscreen, $(".main-content")[0]);
    },
    OnRemoveClick: function(){
        console.log("Remove Clicked");
    },
    OnEditClicked: function(){
        console.log("Edit Clicked");
    },
    OnHelpClicked: function(){
        console.log("Help Clicked");
    }
};

Template.dashboard.rendered = function(){
    IWApp.MainContainer.PopulateFooter(IWApp.DashBoard.ICONSRequired, {
        "ICONAdd": IWApp.DashBoard.OnADDClick,
        "ICONRemove": IWApp.DashBoard.OnRemoveClick,
        "ICONEdit": IWApp.DashBoard.OnEditClicked,
        "ICONHelp": IWApp.DashBoard.OnHelpClicked
    });
};