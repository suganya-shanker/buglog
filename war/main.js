$(document).ready(function(){
//alert("page is loaded");
$("#submit").click(function(){
	getData();
	/*var ntitle=$("#title").val();
	var ndescription=$("#description").val();
	var nchatlink=$("#chatlink").val();
	var nassignedto=$("#assignedto").val();
	var ncreatedby=$("#createdby").val();
	var ncreatedon=$("#createdon").val();
	var nclosedby=$("#closedby").val();
	var nclosedon=$("#closedon").val();
	var issuemodel=new issueModel({title:ntitle,description:ndescription,chatlink:nchatlink,assignedto:nassignedto,createdby:ncreatedby,createdon:ncreatedon,closedby:nclosedby,closedon:nclosedon});
issue_Collection.add(issuemodel);
var view=new viewIssue({model:issuemodel});
	if(nclosedon=="" && nclosedby == ""){
	//alert(ntitle+ndescription+nchatlink+nassignedto+ncreatedby+ncreatedon+nclosedby+nclosedon);
	$("#reportedissue").append(view.el);
}else{
    $("#resolvedissues").append(view.el);
}*/
//console.log(view.el);
/*$("#title").val("");
$("#description").val("");
$("#chatlink").val("");
$("#assignedto").val("");
$("#createdby").val("");
$("#createdon").val("");
$("#closedby").val("");
$("#closedon").val("");*/
clear();
});
$("#update").click(function(){
	getData();
/*alert("update button is clicked");
console.log(this.model);*/
/*var ntitle=$("#title").val();
	var ndescription=$("#description").val();
	var nchatlink=$("#chatlink").val();
	var nassignedto=$("#assignedto").val();
	var ncreatedby=$("#createdby").val();
	var ncreatedon=$("#createdon").val();
	var nclosedby=$("#closedby").val();
	var nclosedon=$("#closedon").val();
	var issuemodel=new issueModel({title:ntitle,description:ndescription,chatlink:nchatlink,assignedto:nassignedto,createdby:ncreatedby,createdon:ncreatedon,closedby:nclosedby,closedon:nclosedon});
issue_Collection.add(issuemodel);
var view=new viewIssue({model:issuemodel});
	if(nclosedon=="" && nclosedby == ""){
	//alert(ntitle+ndescription+nchatlink+nassignedto+ncreatedby+ncreatedon+nclosedby+nclosedon);
	$("#reportedissue").append(view.el);
}else{
    $("#resolvedissues").append(view.el);
}*/
//console.log(view.el);
/*$("#title").val("");
$("#description").val("");
$("#chatlink").val("");
$("#assignedto").val("");
$("#createdby").val("");
$("#createdon").val("");
$("#closedby").val("");
$("#closedon").val("");*/
clear();
});
$("#cancel").click(clear);
});
//function clear(){
	clear = function(){
$("#title").val("");
$("#description").val("");
$("#chatlink").val("");
$("#assignedto").val("");
$("#createdby").val("");
$("#createdon").val("");
$("#closedby").val("");
$("#closedon").val("");
$("#update").hide();
$("#submit").show();
$("#new").show();
}
function getData(){
	var ntitle=$("#title").val();
	var ndescription=$("#description").val();
	var nchatlink=$("#chatlink").val();
	var nassignedto=$("#assignedto").val();
	var ncreatedby=$("#createdby").val();
	var ncreatedon=$("#createdon").val();
	var nclosedby=$("#closedby").val();
	var nclosedon=$("#closedon").val();
	var issuemodel=new issueModel({title:ntitle,description:ndescription,chatlink:nchatlink,assignedto:nassignedto,createdby:ncreatedby,createdon:ncreatedon,closedby:nclosedby,closedon:nclosedon});
issue_Collection.add(issuemodel);
var view=new viewIssue({model:issuemodel});
	if(nclosedon=="" && nclosedby == ""){
	//alert(ntitle+ndescription+nchatlink+nassignedto+ncreatedby+ncreatedon+nclosedby+nclosedon);
	$("#reportedissue").append(view.el);
}else{
    $("#resolvedissues").append(view.el);
}
	}