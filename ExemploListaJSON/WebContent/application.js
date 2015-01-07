sap.ui.localResources("exemplolistajson");
//construct and configure the app shell with a single work set item  
var shell = new sap.ui.ux3.Shell("objectivesAppShell", {showSearchTool:false, showInspectorTool:false, showFeederTool:false, showLogoutButton:false});    
 
shell.addWorksetItem(new sap.ui.ux3.NavigationItem({key : "wi_Events", text : "Exemplo Lista JSON"}));  
 
//construct the view  
var eventsView = sap.ui.view({ type: sap.ui.core.mvc.ViewType.JS,  
                           viewName: "exemplolistajson.Events",
                           controller: sap.ui.controller("exemplolistajson.Events")
                         });  
 
//load and bind the model  
var eventsModel = new sap.ui.model.json.JSONModel();  
eventsModel.loadData("model/Events.json","",false);  
var aData = eventsModel.getData();
var eventsList = eventsView.byId("eventList");  
eventsList.bindRows("/events");  

console.log(aData);
eventsList.setModel(eventsModel);
//place view in app shell, app shell in uiArea  
shell.setContent(eventsList); 
shell.placeAt("content");  