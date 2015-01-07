sap.ui.jsview("exemplolistajson.Events", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf mvcpattern.Events
	 */
	getControllerName : function() {
		return "exemplolistajson.Events";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf mvcpattern.Events
	 */
	createContent : function(oController) {

		// Create a Table and bind its columns with JSON Fields
		var oTable = new sap.ui.table.Table(this.createId("eventList"), {
			title : "Events Calendar",
			visibleRowCount : 5,
			selectionMode : "Single"
		});
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Events"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"title")
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Data"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"date")
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Local"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"location")
		}));
		oTable.attachRowSelectionChange(oController.getDetails);
		
		// Create a Panel and attach a Text View to show the description
		var oPanel = new sap.ui.commons.Panel(this.createId("detail"));
		oPanel.setTitle(new sap.ui.core.Title({
			text : "Events Details"
		}));
		oPanel.addContent(new sap.ui.commons.TextView().bindProperty("text",
				"description"));

	}

});
