/**
 * Created by rlakkoju on 5/17/2016.
 */

/*
* Basically all the event handlings related to dashboard and UI manipulation
*/

IWApp = (typeof IWApp == "undefined")?({}):IWApp;

IWApp.DashBoard = {

};

Template.dashboard.rendered = function(){
    console.log(Object.keys(IWApp));
    IWApp.MainContainer.PopulateFooter("dashboard");
};