/**
 * Created by rlakkoju on 5/18/2016.
 */

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.Elements = {
    CreateLabel: function(){
        var element, li;

        // -- Now, start populating the list --
        // -- First the Label --
        element = $("<p>");
        element.addClass("user-label");
        element.text("Label");
        // -- For a custom type, add a data-ecustomtype as "POLARGRID"/or something, ...

        li = $("<div>");
        li.addClass("createscreen-dragtools-element-bg");
        li.attr("data-etype", IWApp.CreateScreen.ElementClasses.LABEL);
        li.append(element);

        return li;
    },
    CreateButton: function(){
        var element, li;

        element = $("<button>");
        element.addClass("user-button");
        element.addClass("btn");
        element.addClass("btn-default");
        element.text("Button");

        li = $("<div>");
        li.addClass("createscreen-dragtools-element-bg");
        li.attr("data-etype", IWApp.CreateScreen.ElementClasses.ACTION);
        li.attr("data-especifier", IWApp.CreateScreen.ActionClassElements.BUTTON);
        li.append(element);

        return li;
    },
    CreateField: function(){
        var element, li;

        element = $("<p>");
        element.addClass("user-label");
        element.text("Data-Field");

        li = $("<div>");
        li.addClass("createscreen-dragtools-element-bg");
        li.attr("data-etype", IWApp.CreateScreen.ElementClasses.FIELD);
        li.append(element);

        return li;
    },
    CreateMap: function(){
        var element, container;
        container = $("<div>");

        container.addClass("createscreen-container-map");
        container.addClass("createscreen-dragtools-element-bg");

        var p = $("<div>");
        p.append($("<p>"));
        p.addClass("createscreen-map-label");
        // "https://developers.google.com/chart/interactive/docs/gallery/map#geocoded-locations"

        element = IWApp.Elements.CreateField();
        container.append(element);
        element = IWApp.Elements.CreateField();
        container.append(element);

        container.attr("data-etype", IWApp.CreateScreen.ElementClasses.CUSTOM);
        container.attr("data-etype", IWApp.CreateScreen.CustomClassElements.MAP);

        return container;
    }
};