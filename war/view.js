var viewIssue=Backbone.View.extend({
	tagName:"li",
	className:"reported divborder",
	events:{
		"click #reportedissueitem":"display",
		//"click #update" :"update",
		//"click .reported" :"display",
	},
	template: _.template("<div id='reportedissueitem'> <h3><%=title%></h3> Assigned to: <%=assignedto%><h5 style='float:right'><%=createdon%> </h5></div>"),

	initialize: function(){
     this.render();
	},

	render: function(){
     this.$el.html(this.template({title:this.model.get("title"),createdon:this.model.get("createdon"),assignedto:this.model.get("assignedto")}));
	},
	display : function(){
		//alert("click event done");
		$("#new").hide();
		$("#title").val(this.model.get("title"));
		$("#description").val(this.model.get("description"));
        $("#chatlink").val(this.model.get("chatlink"));
$("#assignedto").val(this.model.get("assignedto"));
$("#createdby").val(this.model.get("createdby"));
$("#createdon").val(this.model.get("createdon"));
$("#closedby").val(this.model.get("closedby"));
$("#closedon").val(this.model.get("closedon"));
//$("#closedon").append("");
$("#submit").hide();
$("#update").show();

			},
			/*update:function(){
            $("#submit").show();
            $("#update").hide();
			}*/

});s