$(document).ready(function() {
	var urlParams = new URLSearchParams(window.location.search);
	var str=urlParams.toString();
	var str1=str.replace("+"," ");
	var str2=str1.replace("=","");
	console.log(str2); // "?name"
	document.getElementById("name").innerHTML=str2;
	loadIssueList();
	$("#submit").click(function() {
		getData();
	});
	$("#update").click(function() {
		getData();
	});
	$("#cancel").click(clear);
	$("#count").click(function() {
		var count = $("#count").html();
		count++;
		$("#count").html(count);
	});

});

clear = function() {
	$("#count").html(1);
	$("#title").attr("disabled", false);
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
	$("#title").css("background-color", "#ffffff");
	$("#createdby").css("background-color", "#ffffff");
	$("#createdon").css("backgroung-color", "#ffffff");
}

function getData() {
	var ncount = $("#count").html();
	var ntitle = $("#title").val();
	var ndescription = $("#description").val();
	var nchatlink = $("#chatlink").val();
	var nassignedto = $("#assignedto").val();
	var ncreatedby = $("#createdby").val();
	var ncreatedon = $("#createdon").val();
	var nclosedby = $("#closedby").val();
	var nclosedon = $("#closedon").val();
	// validation
	if (ntitle == "" || ncreatedby == "" || ncreatedon == "") {
		alert("fill all the required fields");
		$("#title").css("background-color", "#ccccff");
		$("#createdby").css("background-color", "#ccccff");
		$("#createdon").css("backgroung-color", "#ccccff");
	}
	// json object creation, ajax to store it in db
	else {
		var issuejson = {
			"title" : ntitle,
			"count" : ncount,
			"description" : ndescription,
			"chatlink" : nchatlink,
			"assignedto" : nassignedto,
			"createdby" : ncreatedby,
			"createdon" : ncreatedon,
			"closedby" : nclosedby,
			"closedon" : nclosedon
		}
		$.ajax({
			url : "/saveissue",
			type : "POST",
			contentType : 'text/plain',
			dataType : "json",
			data : JSON.stringify(issuejson),
			success : function(response) {
				alert("data successfully sent");
			},
			error : function(err) {
				//alert("failed");
				loadIssueList();
				console.log(err);
			}
		});
	}
}

function loadIssueList() {
	$.ajax({
		url : "/loadissue",
		type : "GET",
		contentType : 'application/json',
		dataType : 'json',
		mimeType : 'application/json',
		data : JSON.stringify({
			"Status" : "UpdatedMe"
		}),
		success : function(data) {
			//alert("loadissue");
			console.log(data);
			console.log(data[1][0]);
			console.log(data[1]);
			$("#reportedissue").empty();
			$("#resolvedissue").empty();
			for (var i = 0; i < Object.keys(data).length; i++) {
				var ntitle = data[i][0];
				var ncount = data[i][1];
				var ndescription = data[i][2];
				var nchatlink = data[i][3];
				var nassignedto = data[i][4];
				var ncreatedby = data[i][5];
				var ncreatedon = data[i][6];
				var nclosedby = data[i][7];
				var nclosedon = data[i][8];
				var issuemodel = new issueModel({
					count : ncount,
					title : ntitle,
					description : ndescription,
					chatlink : nchatlink,
					assignedto : nassignedto,
					createdby : ncreatedby,
					createdon : ncreatedon,
					closedby : nclosedby,
					closedon : nclosedon
				});
				var view = new viewIssue({
					model : issuemodel
				});
				console.log(view);
				if ((view.model.get("closedon") == "")
						|| (view.model.get("closedby") == "")) {
					$("#reportedissue").append(view.el);
				} else {
					$("#resolvedissue").append(view.el);
				}

			}
			clear();

		},
		error : function(e) {
			alert("error in load issue");
		}
	});
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location="/index.html";
  });
}
