package buglog;

import java.io.IOException;
import java.util.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.repackaged.com.google.gson.Gson;

	@SuppressWarnings("serial")
	public class ViewAllServlet extends HttpServlet {
		public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
	DatastoreService ds = DatastoreServiceFactory.getDatastoreService();
	Query q1 = new Query("issues").addSort("Count", SortDirection.DESCENDING);
	PreparedQuery pq = ds.prepare(q1);
	System.out.println(pq.toString());
	Map<Integer, List<String>> issue_map = new TreeMap<Integer, List<String>>();
	int i=0;
	for (Entity issue : pq.asIterable()) {
		List<String> issue_list = new LinkedList<String>();
		String title = (String) issue.getProperty("Title");
		issue_list.add(title);
		issue_list.add((String) issue.getProperty("Count"));
		issue_list.add((String) issue.getProperty("Description"));
		issue_list.add((String) issue.getProperty("Chatlink"));
		issue_list.add((String) issue.getProperty("Assignedto"));
		issue_list.add((String) issue.getProperty("Createdby"));
		issue_list.add((String) issue.getProperty("Createdon"));
		issue_list.add((String) issue.getProperty("Closedby"));
		issue_list.add((String) issue.getProperty("Closedon"));
		issue_map.put(i, issue_list);
		i++;
		System.out.println(issue_list);
	}
	
	Gson gson = new Gson();
	String json = gson.toJson(issue_map);
	System.out.printf("JSON: %s", json.toString());

	resp.setContentType("application/json");

	resp.getWriter().println(json);
}
	}
