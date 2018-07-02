var issueModel = Backbone.Model.extend({});
var issueCollection = Backbone.Collection.extend({});
var issue_Collection = new issueCollection();
// issue_Collection.comparator = 'count';
issue_Collection.comparator = function(count) {
	return -count.get("count");
};
