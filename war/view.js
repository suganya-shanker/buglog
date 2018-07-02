var viewIssue = Backbone.View
		.extend({
			tagName : "li",
			// className:"divborder1",
			events : {
				"click #reportedissueitem" : "display",
			// "click #rcount" : "increment",
			},
			template : _.template("<div id='reportedissueitem' ><button id='rcount' style='display:inline-block'><%= count %></button> <h3 style='display:inline-block'><%=title%></h3><br> Assigned to: <%=assignedto%><h5 style='float:right'><%=createdon%> </h5></div>"),

			initialize : function() {
				this.render();
			},

			render : function() {
				this.$el.html(this.template({
					title : this.model.get("title"),
					createdon : this.model.get("createdon"),
					assignedto : this.model.get("assignedto"),
					count : this.model.get("count")
				}));
			},
			display : function() {
				$("#new").hide();
				$("#count").html(this.model.get("count"));
				$("#title").val(this.model.get("title"));
				$("#title").attr("disabled", true);
				$("#description").val(this.model.get("description"));
				$("#chatlink").val(this.model.get("chatlink"));
				$("#assignedto").val(this.model.get("assignedto"));
				$("#createdby").val(this.model.get("createdby"));
				$("#createdon").val(this.model.get("createdon"));
				$("#closedby").val(this.model.get("closedby"));
				$("#closedon").val(this.model.get("closedon"));
				$("#submit").hide();
				$("#update").show();

			},
			increment : function() {
				var newcount = this.model.get("count");
				newcount++;
				this.model.set({
					count : newcount
				});
				console.log(this);
				}

		});