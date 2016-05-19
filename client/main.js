import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// -- Create the user data collection --
GLogData = new Mongo.Collection("receiverlogs");
GLogDataCursor = GLogData.find({});

GLogDataCursor.observe({
    added: IWApp.DataBind.Dummy,
    removed: IWApp.DataBind.Dummy,
    changed: IWApp.DataBind.Dummy
});