/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
* Basically all the event handlings related to dashboard and UI manipulation
*/

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.DashBoard = {
    ICONSRequired: ["ICONAdd", "ICONRemove", "ICONEdit", "ICONHelp"],
    Screens: [],
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
    },
    AddScreenToDashBoard: function(screen){

    },
    AddImageToDashBoard: function(img){

    },
    InitializeDummyDashBoard: function(){
        var element, div, a, img;

        var parent = $(".gridly");

        element = $("<div>");
        element.addClass("brick large");
        img = $("<img>");
        img.attr("src", "dashboard/bg-constellation.JPG");
        img.appendTo(element);
        a = $("<a>");
        a.addClass("delete");
        a.attr("href", "#");
        a.text("x");
        a.appendTo(element);
        element.appendTo($(parent));

        element = $("<div>");
        element.addClass("brick large");
        img = $("<img>");
        img.attr("src", "dashboard/bg-dop.JPG");
        img.appendTo(element);
        a = $("<a>");
        a.addClass("delete");
        a.attr("href", "#");
        a.text("x");
        a.appendTo(element);
        element.appendTo($(parent));

        element = $("<div>");
        element.addClass("brick large");
        img = $("<img>");
        img.attr("src", "dashboard/bg-gpstracking.JPG");
        img.appendTo(element);
        a = $("<a>");
        a.addClass("delete");
        a.attr("href", "#");
        a.text("x");
        a.appendTo(element);
        element.appendTo($(parent));

        element = $("<div>");
        element.addClass("brick large");
        img = $("<img>");
        img.attr("src", "dashboard/bg-glonasstracking.JPG");
        img.appendTo(element);
        a = $("<a>");
        a.addClass("delete");
        a.attr("href", "#");
        a.text("x");
        a.appendTo(element);
        element.appendTo($(parent));

        element = $("<div>");
        element.addClass("brick large");
        img = $("<img>");
        img.attr("src", "dashboard/bg-position.JPG");
        img.appendTo(element);
        a = $("<a>");
        a.addClass("delete");
        a.attr("href", "#");
        a.text("x");
        a.appendTo(element);
        element.appendTo($(parent));

        element = $("<div>");
        element.addClass("brick large");
        img = $("<img>");
        img.attr("src", "dashboard/bg-beidoutracking.JPG");
        img.appendTo(element);
        a = $("<a>");
        a.addClass("delete");
        a.attr("href", "#");
        a.text("x");
        a.appendTo(element);
        element.appendTo($(parent));

        var columns = (Number($(parent).width()) - 300)/ 60;

        $(parent).gridly({
            base: 60, // px
            gutter: 20, // px
            columns: columns
        });

        $(parent).on("resize", function(){
            var columns = (Number($(this).width()) - 300) / 60;

            $(this).gridly({
                base: 60, // px
                gutter: 20, // px
                columns: columns
            });
        });
    }
};

Template.dashboard.rendered = function(){
    IWApp.MainContainer.PopulateFooter(IWApp.DashBoard.ICONSRequired, {
        "ICONAdd": IWApp.DashBoard.OnADDClick,
        "ICONRemove": IWApp.DashBoard.OnRemoveClick,
        "ICONEdit": IWApp.DashBoard.OnEditClicked,
        "ICONHelp": IWApp.DashBoard.OnHelpClicked
    });

    IWApp.DashBoard.InitializeDummyDashBoard();
};