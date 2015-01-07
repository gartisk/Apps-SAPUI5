sap.ui.controller("exemplolistajson.Events", {
	onInit: function() {
		// Get the Panel element and hide
		var panel = this.byId("detail");  
		panel.setVisible(false);
		
	},
	
	// Get Events Details
	getDetails: function(oEvent){
		// Get the selected Row context and bind the value to the Panel
        var eventDetail = this.byId("detail");  
        var context = oEvent.getParameter("rowContext");
        eventDetail.bindContext(context);  
        eventDetail.setVisible(true);  
	},
    onRowSelect : function(event) {
        eventDetail = this.byId("eventDetail");
        eventDetail.bindContext(event.getParameter("rowContext"));
        eventDetail.setVisible(true);
    }
});