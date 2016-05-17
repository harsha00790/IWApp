/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
 * Basically JS to manipulate and handle events from the main container.
 */

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.MainContainer = {
    // -- Going ahead with the assumption that no two icons will have the same image path --
    ICONImageMap: {
        ICONHome: "icons/dashboard-icon.png",
        ICONAdd: "icons/add3.png",
        ICONRemove: "icons/remove2.png",
        ICONEdit: "icons/edit2.png",
        ICONHelp: "icons/help.png",
        ICONUndo: "icons/bomb.png",
        ICONRedo: "icons/settings.png",
        ICONApply: "icons/shuttle.png"
    },
    PopulateFooter: function(pageName){
        // -- Populates the footer with appropriate icons given the page we're dealing with --
        pageName = (typeof pageName == "string")?(pageName):("");
        pageName = pageName.toLowerCase();

        // -- First things, first, clear the icons --
        $(".main-footer .footer-icon").remove();

        var dashboardIcons = [IWApp.MainContainer.ICONImageMap.ICONAdd, IWApp.MainContainer.ICONImageMap.ICONRemove, IWApp.MainContainer.ICONImageMap.ICONEdit, IWApp.MainContainer.ICONImageMap.ICONHelp];
        var drawboardIcons = [IWApp.MainContainer.ICONImageMap.ICONHome, IWApp.MainContainer.ICONImageMap.ICONApply, IWApp.MainContainer.ICONImageMap.ICONUndo, IWApp.MainContainer.ICONImageMap.ICONRedo];

        var icons = [];

        // -- Switch case proably not required --
        switch(pageName) {
            case "drawboard":{
                icons = drawboardIcons;
                break;
            }
            case "dashboard":
            default:{
                icons = dashboardIcons;
            }
        }

        // -- Assuming that the icons are less than or equal to 12 --
        var modulus = Math.floor(12 / (icons.length));
        for(var i = 0; i < icons.length; i++){
            var icon = $(".footer-icon-template").clone().appendTo($(".main-footer"));

            // -- Add the class based on the number of icons --
            icon.addClass("col-xs-"+modulus);
            icon.addClass("footer-icon");
            icon.removeClass("footer-icon-template");

            var img = icon.find("img");
            if(img.length > 0){
                $(img).attr("src", icons[i]);
            }

            icon.css("display", "inline-block");
            icon.appendTo($(".main-footer"));
        }
    }
};
